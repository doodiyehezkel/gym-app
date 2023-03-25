
const mongoose = require('mongoose');
const coachSchema = require('../models/coach')
const traineeSchema = require('../models/trainee')

//trainee signup by coach
const traineeSignup = async (req, res) => {
    const { email, password } = req.body
    try {
        const coach = await coachSchema.findById(req.userId)
        //check if null return 400
        const trainee = await traineeSchema.signup(coach.id, coach.email, email, password)
        res.status(200).json(trainee)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

//get all trainee by coach id
const getAllTraineesByCoachId = async (req, res) => {
    const coachId = req.userId
    try {
        const trainees = await traineeSchema.find({ coachId })
        res.status(200).json(trainees)
    } catch (error) {
        res.status(500).json({ error })
    }
}

//get single trainee by id
const getTraineeById = async (req, res) => {
    const coachId = req.userId
    const { traineeId } = req.params
    if (!mongoose.isValidObjectId(traineeId)) {
        res.status(400).json({ error: `trainee id - ${traineeId} is not a valid id` })
        return
    }
    try {
        const trainee = await traineeSchema.findOne({ coachId, _id: traineeId })
        res.status(200).json(trainee)
    } catch (error) {
        res.status(500).json({ error })
    }
}

//addWorkout
const addWorkout = async (req, res) => {
    const coachId = req.userId
    const { traineeId } = req.params
    const { title, reps, load } = req.body
    if (!mongoose.isValidObjectId(traineeId)) {
        res.status(400).json({ error: `trainee id - ${traineeId} is not a valid id` })
        return
    }
    try {
        const workoutCard = await traineeSchema.findOneAndUpdate({ coachId, _id: traineeId }, { $push: { workouts: { title, reps, load } } }, { new: true ,runValidators :true })
        res.status(200).json(workoutCard)
    } catch (error) {
        res.status(500).json({ error })
    }
}

//updateworkout
const updateWorkout = async (req, res) => {
    const coachId = req.userId
    const { traineeId } = req.params
    const { workoutId, title, reps, load } = req.body
    if (!mongoose.isValidObjectId(traineeId)) {
        res.status(400).json({ error: `trainee id - ${traineeId} is not a valid id` })
        return
    }
    if (!mongoose.isValidObjectId(workoutId)) {
        res.status(400).json({ error: `workout id - ${workoutId} is not a valid id` })
        return
    }
    try {
        const workoutCard = await traineeSchema.findOneAndUpdate({ coachId, _id: traineeId, 'workouts._id': workoutId }, {
            $set: {
                "workouts.$.title": title,
                "workouts.$.reps": reps,
                "workouts.$.load": load
            }
        },
        { new: true ,runValidators :true })
        res.status(200).json(workoutCard)
    } catch (error) {
        res.status(500).json({ error })
    }
}

//deleteworkout
const deleteWorkout = async (req, res) => {
    const coachId = req.userId
    const { traineeId } = req.params
    const { workoutId } = req.body
    if (!mongoose.isValidObjectId(traineeId)) {
        res.status(400).json({ error: `trainee id - ${traineeId} is not a valid id` })
        return
    }
    if (!mongoose.isValidObjectId(workoutId)) {
        res.status(400).json({ error: `workout id - ${workoutId} is not a valid id` })
        return
    }
    try {
        const workoutCard = await traineeSchema.findOneAndUpdate({ coachId, _id: traineeId }, { $pull: { workouts: { _id: workoutId } } }, { new: true })
        res.status(200).json(workoutCard)
    } catch (error) {
        res.status(500).json({ error })
    }
}


module.exports = {
    traineeSignup,
    getAllTraineesByCoachId,
    getTraineeById,
    addWorkout,
    updateWorkout,
    deleteWorkout
}