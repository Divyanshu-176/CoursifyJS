const {Router} = require("express");
const courseRouter = Router()

const {courseModel} = require("../db")
const {purchaseModel} = require("../db")

const {userMiddleware} = require("../auth-middlewares/userMiddleware")


courseRouter.post("/purchase", userMiddleware, async(req,res)=>{

    const userId = req.userId;
    const courseId = req.body.courseId

    //here u also neeed to check that the user has actually paid the price
    try {
        await purchaseModel.create({
            userId,
            courseId
        })

        res.json({
        msg:"user course purchase success"
    })
    } catch (error) {
        res.status(403).json({
            msg:`error: ${error}`
        })
    }
    
})
 



courseRouter.get("/preview", async (req,res)=>{
    const courses = await courseModel.find({

    })

    res.json({
        courses:courses
    })
})


module.exports ={
    courseRouter
}