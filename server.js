const express = require("express")
const router = require("./routes/router")
require("dotenv").config()

const app = express()
const port = process.env.PORT

// responds to /api router

app.use('/api',router)

app.listen(port, ()=>{
    console.log(`I 'am listening on port ${port}`)
})
