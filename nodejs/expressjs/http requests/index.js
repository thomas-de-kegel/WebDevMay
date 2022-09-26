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

// get request
app.get("/", (request, response) => {
  response.json({ id: 1, title: "Lorem Ipsum", body: "Lorem Ipsum Dolor" });
});

// post request
app.post("/", (request, response) => {
    //mongo should save request body here
  const { id, title, body } = request.body;
  response.json({
    id,
    title,
    body,
  });
});

//set listening port number
app.listen(process.env.PORT, () => {
  console.log(`server is listening on ${process.env.PORT}`);
});
