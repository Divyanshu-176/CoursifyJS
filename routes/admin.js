const {Router}=require("express");
const adminRouter = Router()
const {adminModel} = require("../db")
const {adminAuth} = require("../auth-middlewares/adminMiddleware")
const bcrypt = require("bcrypt")


adminRouter.post("/signup", async (req,res)=>{
    res.json({
        msg:"Admin signup"
    })
})




adminRouter.post("/signin",(req,res)=>{
    res.json({
        msg:"Admin signin"
    })
})



adminRouter.use(adminAuth)



adminRouter.post("/course",(req,res)=>{
    res.json({
        msg:"Admin course creation"
    })
})


adminRouter.put("/course",(req,res)=>{
    res.json({
        msg:"admin update their course"
    })
})



adminRouter.get("/course/bulk",(req,res)=>{
    res.json({
        msg:"admin get their created courses"
    })
})


module.exports = {
    adminRouter
}