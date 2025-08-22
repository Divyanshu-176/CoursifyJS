const {Router}=require("express");

const adminRouter = Router()

adminRouter.post("/signup",(req,res)=>{
    res.json({
        msg:"Admin signup"
    })
})




adminRouter.post("/signin",(req,res)=>{
    res.json({
        msg:"Admin signin"
    })
})







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