const Listing = require("../models/listing.model")

const deleteListing=async(req,res,next)=>{
    const listing=await Listing.findById(req.params.id);
    if(!listing){
        return next(404,'Listing not found !');
    }
    if(req.user.id!==listing.userRef){
        return next(401,"You can only delete your own listings!")

    }
    try {
        await Listing.findByIdAndDelete(req.params.id);
        res.status(200).json('Listing has been deleted  ')

    } catch (error) {
        next(error);
    }
}
module.exports=deleteListing