const express = require("express")
require("dotenv").config()
const connectDB = require("./model/connectDB")
const router = require("./routes/router")



const app = express()
const port = process.env.PORT
connectDB()

// responds to /api router

app.use(express.json())
app.use('/api',router)

app.listen(port, ()=>{
    console.log(`I 'am listening on port http://localhost:${port}`)
})
