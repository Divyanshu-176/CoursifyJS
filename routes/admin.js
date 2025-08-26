const {Router}=require("express");
const adminRouter = Router()
const {adminModel} = require("../db")
const {adminAuth} = require("../auth-middlewares/adminMiddleware")
const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken")
const JWT_ADMIN_SECRET ="ADMIN_SECRET"







adminRouter.post("/signup", async (req,res)=>{
    const {email,password,name} = req.body
    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        await adminModel.create({
            email,
            password: hashedPassword,
            name
        }) 

         res.json({
        msg:"Admin signup succeeded"
    })
    } catch (error) {
        res.status(400).json({
            msg:`Cant Signup, error: ${error}`
        })
    }   
})




adminRouter.post("/signin", async (req,res)=>{
    const {email, password} = req.body
    try {
        const admin = await adminModel.findOne({
        email
    })
    const hashCompare = await bcrypt.compare(password, admin.password)

    if(admin && hashCompare){
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_SECRET)


        res.json({
            token:token,
            msg:"Admin Signin Succeeded"
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