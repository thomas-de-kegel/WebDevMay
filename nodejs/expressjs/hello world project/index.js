//import express module
const express = require("express");
const server = express();
const bodyParser = require("body-parser");

//use bodyParser middle
server.use(
  bodyParser({
    extended: true,
  })
);

// homepage http get request endpoint
server.get("/:id", (request, response) => {
  console.log(request.params);
  response.json({ id: 1, paramResult: request.params });
  //https://localhost:8080?username=admin&passworld

  //post https request
  server.post("/", (request, response));

  //display HTML
  //response.send('Hello World')

  //   response.json({
  //     id:1,
  //     username:'admin'
  //   })

  response.json([{ id: 1 }, { id: 2 }]);
});

server.listen(8080, () => {
  //set port number
  console.log("server is running on port 8080");
});
