const User= require("../models/user.model")
 const bcrypt=require('bcrypt');
const erroraHandler = require("../utils/error");
const jwt=require('jsonwebtoken')



const signup=async(req,res,next)=>{
const {username,email,password}=req.body;
const hashedPassword=bcrypt.hashSync(password,10);
const newUser=new User({username,email,password:hashedPassword
})
try{
await newUser.save()
res.status(201).json("User Created Successfully")
}catch(error){
   next(error);
}
}

// const signin=async(req,res,next)=>{
//    const {email,password}=req.body;
//    try {
//       const validUser=await User.findOne({email});
//       if(!validUser){
//          return next(erroraHandler(404,"User not find!"));
//       }
//       const validPassword=bcrypt.compareSync(password,validUser.password);
//       if(!validPassword) return next(erroraHandler(401,'Wrong credential!'));
//       const token=jwt.sign({id:validUser._id},process.env.JWT_SECRET)
//       res.cookie('access_token',token,{httpOnly:true}).status(200).json(validUser)

//    } catch (error) {
//       next(error);
//    }
// }

module.exports=signup
