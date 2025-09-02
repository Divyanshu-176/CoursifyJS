const {Router} = require("express");
const userRouter = Router()
const {userModel} = require("../db")
const {userMiddleware} = require("../auth-middlewares/userMiddleware")
const bcrypt = require("bcrypt")
const {purchaseModel} = require("../db")
const jwt = require("jsonwebtoken")
const {JWT_USER_SECRET} = require("../config")







userRouter.post("/signup", async (req,res)=>{
    const {email,password,name} = req.body
    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        await userModel.create({
            email,
            password: hashedPassword,
            name
        }) 

         res.json({
        msg:"User signup succeeded"
    })
    } catch (error) {
        res.status(400).json({
            msg:`Cant Signup, error: ${error}`
        })
    } 
})


userRouter.post("/signin", async (req,res)=>{
    const {email, password} = req.body
        try {
            const user = await userModel.findOne({
            email
        })
        const hashCompare = await bcrypt.compare(password, user.password)
    
        if(user && hashCompare){
            const token = jwt.sign({
                id: user._id
            }, JWT_USER_SECRET)
    
    
            res.json({
                token:token,
                msg:"User Signin Succeeded"
            })
        }else{
            res.status(400).json({
                msg:"Invalid Credentials"
            })
        }
        } catch (error) {
            res.json({
                msg:`Something went wrong: ${error}`
            })
        }
})







userRouter.use(userMiddleware)


userRouter.get("/purchases", (req,res)=>{
    res.json({
        msg:"user purchased courses"
    })
})


module.exports={
    userRouter
}