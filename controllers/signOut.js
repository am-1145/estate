const signOut=(req,res,next)=>{
try {
    res.clearCookie('access_token');
    res.status(200).json('User has been Logged Out')
} catch (error) {
    next(error)
}
}
module.exports=signOut