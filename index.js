const PORT = process.env.PORT || 3000;
const express = require('express');
const path = require('path');
const app = express();
const middleWare = require('body-parser');
const db = require('./db/mongoose');


// Configure the body parser to the encoded
app.use(middleWare.urlencoded({ extended: true }));
// Configure the Mongoose
app.use('./', require('./routes/index'));

app.listen(PORT , function(err){
    if(err){
        console.log(`We have found an error, Details ${err} , Fix It to continue`);
    }
    console.log(`Your server is been fired up on ${PORT} Port`);
}

)
