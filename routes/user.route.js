const express = require('express')
const updateUser = require('../controllers/updateUser.js')
const verifyToken = require('../utils/verifyUser.js')
const deleteUser = require('../controllers/deleteUser.js')
const getUserListings = require('../controllers/getUserListings.js')
const getUser = require('../controllers/getUser.js')

const userRouter = express.Router()

userRouter.get('/test', require('../controllers/user.controller.js'))

userRouter.post('/update/:id', verifyToken, updateUser)

userRouter.delete('/delete/:id', verifyToken, deleteUser)

userRouter.get('/listings/:id', verifyToken, getUserListings)
userRouter.get('/:id', verifyToken, getUser)
// userRouter.post('/sign-out/:id',verifyToken,deleteUser)
module.exports = userRouter
