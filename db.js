const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://isha:isha@cluster0.byfmy0h.mongodb.net/inotebook"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI , () => {
        console.log("Connected To Mongo successfully.")
    })
}

module.exports = connectToMongo;