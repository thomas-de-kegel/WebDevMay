//dependencies
const express = require('express');
const cors = require('cors');
const multer = require('multer');

//server
const server = express();

//use middlewares
server.use(cors())
server.use(express.json())

server.get('/', (request,response)=>{
    response.json({
        message:"Welcome to restfulAPI"
    })
})

server.post((request,response)=>{
    console.log(request.file)
    response.json({
        msg:"ok"
    })
})

//port number for server