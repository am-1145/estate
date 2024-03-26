const Listing = require("../models/listing.model");
const erroraHandler = require("../utils/error");

const updateListing=async(req,res,next)=>{
    const listing =await Listing.findById(req.params.id);
    if(!listing){
        return next(erroraHandler(404,'Listing not found'))
    }
    if(req.user.id!==listing.userRef){
        return next(erroraHandler(401,"You can only update your own listings!"));

    }
    try {
        const updatedListing=await Listing.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        res.status(200).json(updatedListing);
    } catch (error) {
        next(error)
    }
}
module.exports=updateListing