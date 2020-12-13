const express = require("express")
const app = express()

require("dotenv").config()


const connectDB = require("./model/connectDB")
const router = require("./routes/router")


connectDB()


//app.use(cors()) //to pass cors policy localhost:3000 to localhost:5000 in mern project

// responds to /api router
app.use(express.json())
app.use('/api',router)



// Production Check
if(process.env.NODE_ENV==="production") {
    app.use(express.static("/client/build"))
    app.get("*", (req,res)=>{
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
        
    });
}

const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`I 'am listening on port http://localhost:${port}`)
})
