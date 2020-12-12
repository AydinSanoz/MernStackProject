const mongoose = require("mongoose")

const uri = process.env.MONGODB_URI
console.log(process.env.MONGODB_URI)

const connectDB = async ()=>{
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true, useUnifiedTopology: true})
            console.log("Successfully connected DB")
        
    } catch (error) {
        console.log("Error ConnectDb",error)
    }

}


module.exports = connectDB;