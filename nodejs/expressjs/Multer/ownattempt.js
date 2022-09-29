//dependencies
const express = require("express");
const cors = require("cors");
const multer = require("multer");

//setting up server
const app = express();

//setting up middleware
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.json({
    message: "Welcome!",
  });
});

//storage
const storage = multer.diskStorage({
  destination: (request, file, callback) => callback(null, "./uploads"),
  filename: (request, file, callback) => callback(null, file.originalname),
});

//setting up fileuploader
const uploader = multer({ storage }); //we specify where multer will save the files
app.post("/", uploader.single("document"), (request, response) => {
  console.log(request.files.path); //displays the filepath of the upload
  response.json({
    msg: "ok", //we confirm the upload worked
  });
});

//setting up server listener
app.listen(4000, () => {
  console.log("Server started on port 4000");
});
