const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

const app = express()


app.post("/user/signup", (req,res)=>{
    res.json({
        msg:"user signup"
    })

})




app.post("/user/signin", (req,res)=>{
    res.json({
        msg:"user signin"
    })
})




app.get("/user/purchases", (req,res)=>{
    res.json({
        msg:"user purchased courses"
    })
})




app.get("/course/purchase", (req,res)=>{
    res.json({
        msg:"user purchasing course"
    })
})
 



app.get("/courses", (req,res)=>{
    res.json({
        msg:"All the courses"
    })
})


async function server(){
    await app.listen(3000)
    await console.log("Server started at port: 3000")
}
server()