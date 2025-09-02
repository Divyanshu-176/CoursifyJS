const {Router} = require("express");
const courseRouter = Router()

const {courseModel} = require("../db")
const {purchaseModel} = require("../db")


courseRouter.get("/purchase", (req,res)=>{
    res.json({
        msg:"user purchasing course"
    })
})
 



courseRouter.get("/preview", (req,res)=>{
    res.json({
        msg:"All the courses"
    })
})


module.exports ={
    courseRouter
}