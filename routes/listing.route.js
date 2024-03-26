const express = require('express')
const verifyToken = require('../utils/verifyUser')
const deleteListing = require('../controllers/deleteListing')
const updateListing = require('../controllers/updateListing')
const getListing = require('../controllers/getListing')
const getListings = require('../controllers/getListings')

const router = express.Router()

router.post('/create', verifyToken, require('../controllers/createListing'))
router.delete('/delete/:id', verifyToken, deleteListing)
router.post('/update/:id', verifyToken, updateListing)
router.get('/get/:id', getListing)
router.get('/get', getListings)
module.exports = router
