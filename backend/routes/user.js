const express = require('express')
const userSchema = require('../models/user')

const {
    signup,
    signin,
    signout,
    ping
} = require('../controllers/user')

const router = express.Router()

router.post('/signup' , signup)
router.post('/signin' , signin)
router.get('/signout' , signout)
router.get('/ping',ping)


module.exports = router