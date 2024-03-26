const User = require("../models/user.model")
const erroraHandler = require("../utils/error")


const deleteUser=async(req,res,next)=>{
    if(req.user.id !==req.params.id) {
        return next(erroraHandler(401,'You can only delete your own account'))
        
    }
    try {
       await User.findByIdAndDelete(req.params.id)
       res.clearCookie('access_token');
       res.status(200).json('User has been deleted')
    } catch (error) {
        next(error)
    }
}
module.exports=deleteUser