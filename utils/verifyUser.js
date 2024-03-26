const erroraHandler = require("./error");
const jwt =require('jsonwebtoken')
const verifyToken=(req,res,next)=>{
    const token=req.cookies.access_token;

    if(!token){
        next(erroraHandler(401,'Unauthorized'))
    }

    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err) return next(erroraHandler(403,'Forbidden'))

        req.user=user;
       next(); 
    })
}

module.exports=verifyToken