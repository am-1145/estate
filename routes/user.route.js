const express=require('express');
const updateUser = require('../controllers/updateUser.js');
const verifyToken = require('../utils/verifyUser.js');


const userRouter=express.Router();

userRouter.get('/test',require('../controllers/user.controller.js'))

userRouter.post('/update/:id',verifyToken,updateUser)

module.exports=userRouter;