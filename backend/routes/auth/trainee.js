const express = require('express')
const router = express.Router()

const {
    signin
} = require('../../controllers/auth/trainee')

router.post('/signin', signin)

module.exports = router