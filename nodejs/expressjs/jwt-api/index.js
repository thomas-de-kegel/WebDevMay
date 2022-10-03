//import modules
const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
//import mongoose
const mongoose = require("mongoose");

//user schema
const userSchema = mongoose.Schema({
    username:{
        type:String,
        unique:true
    },
    password:{
        type:String
    }
})

//compile schema to model
const User = mongoose.model('Users', userSchema)

//db connection
mongoose.connect(process.env.DB_URI, ()=>console.log('db connected'))

require('dotenv').config()
//use middleware
app.use(express.json());
app.use(cors());

//endpoints
app.get("/", (request, response) => {
  response.send("Welcome to protected restfulAPI");
});

//registration endpoint
app.post('/register', (request, response) => {
    console.log(request.body)
    //make obj from model
    // const new_user = new User(request.body)
    // new_user.save()
    // .then(user=>{
    //     response.json({
    //         msg:"User created",
    //         data:user
    //     })
    // })

})

app.post("/login", (request, response) => {
  const { username } = request.body;
  jwt.sign(
    { username },
    "verysecretkey",
    {
      algorithm: "HS256",
      expiresIn: "60s",
    },
    (err, token) => {
      response.json({
        payload: request.body,
        token: token,
      });
    }
  );
});

// isTokenValid middleware function
// const isTokenValid = (request, response, next) =>{
//     console.log(request.headers['authorization'])
//     const token = request.headers['authorization']
//     jwt.verify(token, 'verysecretkey', (err,decoded)=>{
//         if(!err) {
//             request.user=decoded
//             next()
//         }else{
//             response.status(403).send('Unauthorized')
//         }
//     })
// }

//in eclipse:
//1. post request with username to /login
//2. copy token
//3. get request to /profile with token in authorization header within expiration time(60s)

//retrieve token as bearer
// const doesTokenExist = (request,response,next)=>{
//     console.log(request.headers['authorization'].split(' ')[1])
//     const token = request.headers['authorization'].split(' ')[1]
//     jwt.verify(token, 'verysecretkey', (err,decoded)=>{
//         if(decoded !== undefined){
//             //http 200 success response
//             request.user= decoded
//             next()
//         }else{
//             response.status(403).send('Forbidden')
//         }
//     })
// }
// for this method:
//disable the authorization header and when sending the get request, paste the token in the bearer token field

//token from url query
const doesTokenExist = (request, response, next) => {
  console.log(request.query);
  const token = request.query.apiKey;
  jwt.verify(token, 'verysecretkey', (err,decoded)=>{
    if(decoded !== undefined){
        request.user= decoded
        next()
    }else{
        response.status(403).send('Forbidden')
    }
  })
};
//for this method:
//disable bearer token and instead add a query that will hold the token when you send the get request to /profile

app.get("/profile", doesTokenExist, (request, response) => {
  response.json({
    id: 1,
    username: "admin",
    follower: 100,
  });
});

//set listener post number
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
