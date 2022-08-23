import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Blogdetail() {
    const [id] = useParams()
    const [detail, setDetail] = useState([])

    const fetchingData = async() => {
    console.log("Here's your data, champ:")
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    let data = await response.json()
    setDetail(data)
    }

    //useEffect triggers when the DOM content is loaded
    useEffect(() =>{
        fetchingData()
    },[])

  return (
    <div>Blogdetail {id} {/* the param has to be the same as the blogdetail /:*/}
    <h5>{detail.title}</h5>
    </div>
  )
}

export default Blogdetail