const express = require('express')

const {
    ping,
    signout
} = require('../../controllers/auth/common')

const router = express.Router()

router.get('/ping', ping)
router.get('/signout', signout)

module.exports = router