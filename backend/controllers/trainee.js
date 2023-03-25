const mongoose = require('mongoose');
const traineeSchema = require('../models/trainee')


const getAllWorkout = async (req, res) => {
    const traineeId = req.userId
    try {
        const trainee = await traineeSchema.findById(traineeId)
        res.status(200).json(trainee)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


module.exports = { getAllWorkout }