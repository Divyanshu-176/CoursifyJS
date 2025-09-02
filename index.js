const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
require('dotenv').config()

const {userRouter} = require("./routes/user")
const {courseRouter} = require("./routes/course")
const {adminRouter} =require("./routes/admin")

const app = express()
app.use(express.json())


app.use("/api/v1/user", userRouter)
app.use("/api/v1/course", courseRouter)
app.use("/api/v1/admin",adminRouter)






async function server(){
    await mongoose.connect(process.env.MONGO_URL)
    console.log("connected to DB")
    app.listen(3001)
    console.log("Server started at port: 3000")
}
server() 