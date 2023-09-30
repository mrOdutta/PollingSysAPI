const mongoose = require('mongoose');
const OptionSchema =  new mongoose.Schema({
    option :{
        type : String,
        require : true
    },
    question : {
        type: mongoose.Schema.Types.ObjectId , 
        ref:'Question',
        require:true
    },
    // Adding Vote Count
    vote :{
        type : Number,
        default : 0
    },
    addVote : {
        type : String
    },
})