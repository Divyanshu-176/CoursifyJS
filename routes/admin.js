const {Router}=require("express");
const {adminModel} = require("../db")
const {adminMiddleware} = require("../auth-middlewares/adminMiddleware")
const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken")
const {JWT_ADMIN_SECRET} = require("../config")

const {courseModel} = require("../db")


const adminRouter = Router()



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





adminRouter.use(adminMiddleware)

adminRouter.post("/course", async(req,res)=>{
    const adminId = req.userId

    const {title,description,price,imageUrl} = req.body
    
    const course = await courseModel.create({
        title,description,price,imageUrl,creatorId: adminId
    })
    res.json({
        msg:"Admin Course Created",
        courseId : course._id
    })
})


adminRouter.put("/course", async(req,res)=>{
    const {courseId, title, description, price, imageUrl} = req.body;

    const adminId = req.userId;

    const course = await courseModel.findOne({
        courseId:courseId
    })

    if(course && course.creatorId === adminId){
        // await courseModel.findOne
    }



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