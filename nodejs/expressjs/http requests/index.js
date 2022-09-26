//import express module
const express = require("express");
const app = express();

//import env variables
require("dotenv").config();

//import body-parser
const bodyParser = require("body-parser");

app.use(
  bodyParser({
    extended: true,
  })
);

//middleware
function isUserLoggedIn(request, response, next) {
  const {username} = request.query
  if(username ==='admin'){
    response.json({
        username:username,
        msg:"success"
    })
  }else{
    response.json({
        msg:"failed"
    })
  }
  next()
}
// get request
app.get("/", (request, response) => {
  response.json({ id: 1, title: "Lorem Ipsum", body: "Lorem Ipsum Dolor" });
});

// post request
app.post("/", isUserLoggedIn, (request, response) => {
  //mongo should save request body here
  const { id, title, body } = request.body;
  response.json({
    id,
    title,
    body,
  });
});

// put request
app.put("/", (request, response) => {
  const { id } = request.query;
  const { title, body } = request.body;
  response.json({ title, body, message: `${id} is updated.` });
});

//delete request
app.delete("/", (request, response) => {
  const { id } = request.query;
  const { _id } = request.body;
  response.json({
    message: `${id} has been deleted | ${_id} has been deleted`,
  });
});

//set listening port number
app.listen(process.env.PORT, () => {
  console.log(`server is listening on ${process.env.PORT}`);
});
