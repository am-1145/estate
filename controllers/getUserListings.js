const Listing = require("../models/listing.model")
const erroraHandler = require("../utils/error")

const getUserListings=async(req,res,next)=>{
if(req.user.id===req.params.id){
try {
    const listings =await Listing.find({userRef:req.params.id})
    res.status(200).json(listings)
} catch (error) {
    next(error)
}
}else{
    return next(erroraHandler(401,'You can only view your own listings'))
}
}
module.exports=getUserListings