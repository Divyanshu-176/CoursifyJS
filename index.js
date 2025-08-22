const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

const app = express()







async function server(){
    await app.listen(3000)
    await console.log("Server started at port: 3000")
}