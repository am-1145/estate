const mongoose=require('mongoose')


const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        
    },
    avatar:{
        type:String,
        default:"E:\mern estate\a-Haze-imaging-model-b-Constant-albedo-model-used-in-Fattals-work-10_W640.jpg"
    },

},{timestamps:true})

const User=mongoose.model('User',userSchema)

module.exports=User