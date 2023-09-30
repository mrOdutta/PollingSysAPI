// Dependencies defined 
const express = require('express');
const Router = express.Router;


// Defining the Entry points Thoughtout the API 
console.log("i in in");
Router.use('/API', require('./API/index'));


// Module Export
module.exports=Router;

