//import modules
const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
//import mongoose
const mongoose = require("mongoose");
require("dotenv").config();

//user schema
const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

//compile schema to model
const User = mongoose.model("Users", userSchema);

//db connection
mongoose.connect(process.env.DB_URI, () => console.log("db connected"));

//use middleware
app.use(express.json());
app.use(cors());

//endpoints
app.get("/", (request, response) => {
  response.send("Welcome to protected restfulAPI");
});

//registration endpoint
app.post("/register", (request, response) => {
  console.log(request.body);
  const password = bcrypt.hashSync(request.body.password, 10); //password is encrypted here
  //make obj from model
  const new_user = new User({
    username: request.body.username,
    password: password,
  });
  new_user
    .save()
    .then((user) => {
      response.json({
        msg: "User created",
        data: user,
      });
    })
    .catch((err) => {
      if (err) {
        response.status(403).send("Try another username");
      }
    });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  // jwt.sign({ username }, process.env.JWT_KEY, {
  //     algorithm: 'HS256',
  //     expiresIn: '2000s'
  // }, (err, token) => {
  //     res.json({
  //         payload: req.body,
  //         token: token
  //     })
  // })
  // step1 find username
  User.find({ username: username }).then((user) => {
    console.log(user.length);
    if (user.length > 0) {
      // user is exist
      let isPassCorrect = bcrypt.compareSync(password, user[0].password) // will store true or false
      if (isPassCorrect) {
        jwt.sign({ username: username }, process.env.JWT_KEY, (err, token) => {
          res.json({
            msg: "User logged in",
            token: token,
          });
        });
      } else {
        res.json({ msg: "username or password incorrect" });
      }
    } else {
      res.json({
        msg: "username or password incorrect",
      });
    }
  });
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
  jwt.verify(token, "verysecretkey", (err, decoded) => {
    if (decoded !== undefined) {
      request.user = decoded;
      next();
    } else {
      response.status(403).send("Forbidden");
    }
  });
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
