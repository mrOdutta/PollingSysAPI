const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Polling-sys');

// Uploding into the cloud cluster 
const ConnectCloud = {
    useNewUrlParser : true,
    useUnifiedTopology:true
}
const db = mongoose.connection;

// CONNETION CHECKING 
db.on('error', console.error.bind(console, 'Fecting These Notable error in the meantime'));
db.once('open', ()=>{
    console.log("Yahoo!, We're Successfully Connected to the Database");
})

module.exports = mongoose;