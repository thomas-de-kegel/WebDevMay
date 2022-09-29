//in Insomnia: set to multipart form. name as document, choose type as file and then post.

//dependencies
const express = require("express");
const cors = require("cors");
const multer = require("multer");

//server
const server = express();

//use middlewares
server.use(cors());
server.use(express.json());

server.get("/", (request, response) => {
  response.json({
    message: "Welcome to restfulAPI",
  });
});

const storage = multer.diskStorage({
  destination: (request, file, callback) => callback(null, "./uploads"),
  filename: (request, file, callback) => callback(null, file.originalname),
});

const uploader = multer({ storage });

server.post('/',uploader.single('document'),(request, response) => {
  console.log(request.file.path); // display file location out
  response.json({
    msg: "ok",
  });
});

//port number for server
server.listen(4000, () => console.log("Server is running on 4000"))