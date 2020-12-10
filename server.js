const express = require("express")
const connectDB = require("./model/connectDB")
const router = require("./routes/router")
require("dotenv").config()
require("./model/connectDB")

const app = express()
const port = process.env.PORT

// responds to /api router
connectDB()

app.use(express.json())
app.use('/api',router)

app.listen(port, ()=>{
    console.log(`I 'am listening on port ${port}`)
})
