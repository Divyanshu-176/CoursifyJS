const mongoose = require("mongoose")
const Schema = mongoose.Schema




const userSchema = new Schema({
    email:{type:String,unique:true},
    password:String,
    name:String
})


const adminSchema = new Schema({
    email:String,
    password:String,
    name:String
})


const courseSchema = new Schema({
    title:String,
    description:String,
    price:Number,
    imageURL:String,
    creatorId:Schema.Types.ObjectId
    
})


const purchaseSchema = new Schema({
    courseId: Schema.Types.ObjectId,
    userId:Schema.Types.ObjectId
})







const userModel = mongoose.model("User",userSchema)
const adminModel = mongoose.model("Admin",adminSchema)
const courseModel = mongoose.model("Course",courseSchema)
const purchaseModel = mongoose.model("Purchase",purchaseSchema)


module.exports ={
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}