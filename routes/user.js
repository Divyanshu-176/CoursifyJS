const {Router} = require("express");
const userRouter = Router()
const {userModel} = require("../db")
const {userAuth} = require("../auth-middlewares/userMiddleware")


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






app.use(userAuth)


userRouter.get("/purchases", (req,res)=>{
    res.json({
        msg:"user purchased courses"
    })
})


module.exports={
    userRouter
}