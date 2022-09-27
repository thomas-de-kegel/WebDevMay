/*
1. npm i express mongoose --save
2. import express and mongoose
3. create server for express + listening port on 8080
4. import middleware
5. npm run dev
6. response and request module + test via Insomnia app
7. connect to mongoDB with MongoCompass app
8. create a schema and compile to model
9. we GET posts through /posts and POST or PUT(update) posts via /post
10. intigrate the other necessary HTTP request methods ||NOTE|| keep the 'Not found' page at the very end of the page
11. 
*/
//importing express and mongoose
const express = require('express')
const mongoose = require('mongoose')

//create server for express
const app = express()

//connect to mongoDB
mongoose.connect('mongodb://localhost:27017/expressmongo', (err)=>{
    console.log("Connected to mongoDB")
})

//create post schema
const postSchema= mongoose.Schema({
    title:String,
    content:String,
    date:String
})

//compile schema to model
const Post= mongoose.model('Posts', postSchema)

//import middleware (built in module like bodyParser)
app.use(express.json())

//first endpoint
app.get('/',(request,response) => {
   response.send("Newspaper restfulAPI v1.0")
})

app.get('/posts',(request,response) => {
    //retrieves all posts from mongoDB and returns them as JSON
    Post.find({})
    .then(posts=>{
        console.log(posts)
        response.json({
            message:"ok",
            data:posts
        })
    })
})

app.post('/post', (request,response) => {
    const {title,content} = request.body
    const post = new Post({title,content,date:new Date()})
    post.save()
    .then(answer => {
        response.json({
            message: "Saved",
            data: answer
        })
    })
})

//we find a specific post and update it
//http://localhost:8080/post/(post id)
app.put('/post/:id', (request,response) => {
    const {id} = request.params
    Post.findByIdAndUpdate(id, request.body) //find a post by its id and update it with the body content of our HTTP request
    .then(result=>{
        response.json({
            message: "Updated",
            data: result
        })
    })
})

//find and delete a specific post by its id
//http://localhost:8080/post/(post id)
app.delete('/post/:id', (request,response) => {
    const {id} = request.params
    Post.findByIdAndDelete(id)
    .then(result => {
        response.json({
            message: "Deleted",
            data: result
        })
    })
})

app.all('*',(request,response)=>{
    response.json({
        message:"Not Found!"
    })
})

//set listen port
app.listen(8080, ()=>{
    console.log("Server online on 8080")
})