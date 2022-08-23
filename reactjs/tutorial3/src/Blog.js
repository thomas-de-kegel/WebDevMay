import { Button } from 'react-bootstrap'
import React, { useEffect, useRef, useState } from 'react'

function Blog() {
    const [posts, setPosts] = useState([])
    const getAllPosts = async()  => {  //Don't forget async() 
        let response = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await response.json()
        setPosts(data);
    }

    const buttonRef = useRef() //useRef is similar to querySelector
    const inputText= useRef()
    useEffect(() => {
        getAllPosts()
        console.log(buttonRef.current)
        console.log(inputText.current.value)
    })
  return (
    <div>Blog <br/>
    <Button onClick={getAllPosts} ref={buttonRef}>Get all posts </Button>
    <input type="text" ref={inputText} placeholder="Search"></input>
    {
        posts.map((post,index)=>(
            <a href={`/blog/${post.id}`} key={post.id}>{post.title}</a>  //For every post we write a link corresponding to the post's id, with the link's text being the post's title
        ))
    }
    </div>
  )
}

export default Blog