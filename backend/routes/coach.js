const express = require('express')

const {
    traineeSignup,
    getAllTraineesByCoachId,
    getTraineeById,
    addWorkout,
    updateWorkout,
    deleteWorkout
} = require('../controllers/coach')

const router = express.Router()

router.post('/trainee-signup', traineeSignup)
router.get('/all-trainees', getAllTraineesByCoachId)
router.get('/trainee/:traineeId', getTraineeById)
router.post('/add-workout/:traineeId', addWorkout)
router.patch('/update-workout/:traineeId', updateWorkout)
router.delete('/delete-workout/:traineeId', deleteWorkout)

module.exports = router