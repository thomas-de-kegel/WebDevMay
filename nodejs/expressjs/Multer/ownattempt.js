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
const uploader = multer({
  storage,
  fileFilter: (request, file, callback) => {
    //console.log(file.mimetype); //we console the type of the file uploaded
    if(file.mimetype === 'application/pdf' || 'image/png' || 'image/jpeg'){ //we only allow pdf, png and jpg files
        callback(null, true); //the callback function specifies that if it is called, the file is allowed to be stored
    }else{
        callback(new Error('Invalid file type'))
    }
  },
}); //we specify where multer will save the files

app.post("/", uploader.single("document"), (request, response) => {
  console.log(request.file.path); //displays the filepath of the upload !!file.path, NOT files.path!!
  response.json({
    msg: "ok", //we confirm the upload worked
  });
});

//setting up server listener
app.listen(4000, () => {
  console.log("Server started on port 4000");
});
