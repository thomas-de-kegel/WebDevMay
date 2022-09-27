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
*/

//import express and mongoose
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//create the server
const app = express();
app.use(express.json())
app.use(cors()) //can be used to either allow access to the api from everywhere, or to restrict it to certain domains

//connect to mongoDB
mongoose.connect('mongodb://localhost:27017/expresstodos', (err)=>{
    console.log("DB connected")
})

//create todo schema
const todoSchema= mongoose.Schema({
    task:String,
    done:Boolean,
    date:String
})

//compile schema to model
const Todo= mongoose.model('todos', todoSchema)

//import middleware (built in module like bodyParser)
app.use(express.json())

//first endpoint
app.get('/',(request,response) => {
   response.send("todo API v1.0")
})

app.get('/todos',(request,response) => {
    //retrieves all todos from mongoDB and returns them as JSON
    Todo.find({})
    .then(todos=>{
        console.log(todos)
        response.json({
            message:"ok",
            data:todos
        })
    })
})

//find todos by userId

//app.get(/todos/)

app.post('/todo', (request,response) => {
    const {task,done} = request.body
    const todo = new Todo({task,done,date:new Date()})
    todo.save()
    .then(answer => {
        response.json({
            message: "Saved",
            data: answer
        })
    })
})

//we find a specific todo and update it
//http://localhost:8080/todo/(todo id)
app.put('/todo/:id', (request,response) => {
    const {id} = request.params
    Todo.findByIdAndUpdate(id, request.body) //find a todo by its id and update it with the body content of our HTTP request
    .then(result=>{
        response.json({
            message: "Updated",
            data: result
        })
    })
})

//find and delete a specific todo by its id
//http://localhost:8080/todo/(todo id)
app.delete('/todo/:id', (request,response) => {
    const {id} = request.params
    Todo.findByIdAndDelete(id)
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