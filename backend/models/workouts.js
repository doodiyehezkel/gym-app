const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true,
        min: [1, 'min for reps is one']
    },
    load: {
        type: Number,
        required: true,
        min: [1, 'min for reps is one']
    },
    userId:{
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)