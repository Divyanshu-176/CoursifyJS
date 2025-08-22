const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

const {userRouter} = require("./user")
const {courseRouter} = require("./course")

const app = express()


app.use("/api/v1/user", userRouter)
app.use("/api/v1/course", courseRouter)






async function server(){
    await app.listen(3000)
    await console.log("Server started at port: 3000")
}
server()