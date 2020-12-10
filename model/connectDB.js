const mongoose = require("mongoose")

const uri = process.env.MONGODB_URI

const connectDB = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://canan:090519@cluster0.b4rcd.mongodb.net/mernStack', {
            useNewUrlParser: true, useUnifiedTopology: true})
            console.log("Successfully connected DB")
        
    } catch (error) {
        console.log("Error ConnectDb",error)
    }

}


module.exports = connectDB;