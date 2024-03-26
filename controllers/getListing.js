const Listing = require("../models/listing.model");
const erroraHandler = require("../utils/error");

const getListing=async(req,res,next)=>{
    try {
        const listing=await Listing.findById(req.params.id);
        if(!listing){
            return next(erroraHandler(404,'Listing not found'))
        }
        res.status(200).json(listing);
    } catch (error) {
        next(error)
    }
}
module.exports=getListing