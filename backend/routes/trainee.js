const express = require('express')
const traineeSchema = require('../models/trainee')

const {
    getAllWorkout
} = require('../controllers/trainee')

const router = express.Router()

router.get('/all-workouts', getAllWorkout)

module.exports = router
