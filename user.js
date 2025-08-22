const {Router} = require("express");
const userRouter = Router()




userRouter.post("/signup", (req,res)=>{
    res.json({
        msg:"user signup"
    })

})




userRouter.post("/signin", (req,res)=>{
    res.json({
        msg:"user signin"
    })
})




userRouter.get("/purchases", (req,res)=>{
    res.json({
        msg:"user purchased courses"
    })
})


module.exports={
    userRouter
}