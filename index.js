const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

const {userRouter} = require("./routes/user")
const {courseRouter} = require("./routes/course")
const {adminRouter} =require("./routes/admin")

const app = express()


app.use("/api/v1/user", userRouter)
app.use("/api/v1/course", courseRouter)
app.use("/api/v1/admin",adminRouter)






async function server(){
    await mongoose.connect("mongodb+srv://divyanshujain:mongo123@cluster0.hqz2muc.mongodb.net/Coursify")
    await console.log("connected to DB")
    await app.listen(3000)
    await console.log("Server started at port: 3000")
}
server()