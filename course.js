const {Router} = require("express");

const courseRouter = Router()

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