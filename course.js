const {Router} = require("express");

const courseRouter = Router

courseRouter.get("/course/purchase", (req,res)=>{
    res.json({
        msg:"user purchasing course"
    })
})
 



courseRouter.get("/course/preview", (req,res)=>{
    res.json({
        msg:"All the courses"
    })
})


module.exports ={
    courseRouter
}