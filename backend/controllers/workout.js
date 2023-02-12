const mongoose = require('mongoose');
const user = require('../models/user');
const workoutModel = require('../models/workouts')

const getAllWorkouts = async (req, res) => {
    const { userId } = req
    try {
        const workouts = await workoutModel.find({ userId }).sort({ createdAt: -1 });
        res.status(200).json(workouts)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const getWorkoutById = async (req, res) => {
    const { _id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(400).json({ error: 'id is not valid.' })
    try {
        const workout = await workoutModel.findById(_id)
        res.status(200).json(workout)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

const createNewWorkout = async (req, res) => {
    const { userId } = req
    const { title, reps, load } = req.body
    try {
        const workout = await workoutModel.create({ title, reps, load, userId })
        res.status(201).json(workout)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

const updateWorkoutById = async (req, res) => {
    const { userId } = req
    const { _id } = req.params
    const { title, reps, load } = req.body
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(400).json({ error: 'id is not valid' })
    try {
        const workout = await workoutModel.findOneAndUpdate({userId,_id}, { title, reps, load }, { new: true, runValidators: true })
        res.status(200).json(workout)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

const deleteWorkoutById = async (req, res) => {
    const { userId } = req
    const { _id } = req.params
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(400).json({ error: 'id is not valid' })
    try {
        const workout = await workoutModel.findOneAndDelete({userId, _id})
        res.status(200).json(workout)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createNewWorkout,
    updateWorkoutById,
    deleteWorkoutById
}