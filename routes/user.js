const {Router} = require("express");
const userRouter = Router()
const {userModel} = require("../db")
const {userAuth} = require("../auth-middlewares/userMiddleware")


userRouter.post("/signup", async (req,res)=>{
   
    res.json({
        msg:"user signup"
    })

})




userRouter.post("/signin", (req,res)=>{
    res.json({
        msg:"user signin"
    })
})






userRouter.use(userAuth)


userRouter.get("/purchases", (req,res)=>{
    res.json({
        msg:"user purchased courses"
    })
})


module.exports={
    userRouter
}