const express = require('express')

const {
    getAllWorkouts,
    getWorkoutById,
    createNewWorkout,
    updateWorkoutById,
    deleteWorkoutById
} = require('../controllers/workout')

const router = express.Router()

//get all workouts
router.get('/', getAllWorkouts)

//get specific workout
router.get('/:_id', getWorkoutById)

//create new workout
router.post('/', createNewWorkout)

//update specific workout
router.patch('/:_id', updateWorkoutById)

//delete specific workout
router.delete('/:_id', deleteWorkoutById)

module.exports = router