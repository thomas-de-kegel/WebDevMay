const express = require('express');

//recordRoutes is an instance of the express router
//we use it to define our routes.
//The router will be added as a middleware and will take control of requests starting with path /record
const recordRoutes= express.Router();

//This will connect us to the database
const dbo = require("../db/conn");

//this will convet the id from the string to ObjectId for the _id
const ObjectId = require("mongodb").ObjectId;


//this will get us a list of all the records
recordRoutes.route("/record").get(function (request,response) {
    let db_connect = dbo.getDb("employees");
})