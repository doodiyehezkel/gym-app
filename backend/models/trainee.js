const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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
    }
}, { timestamps: true })


const traineeSchema = new mongoose.Schema({
    coachId: {
        type: String,
        required: true
    },
    coachEmail: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [3, 'min length for email is 3'],
        validate: [
            {
                validator: (value) => { return value.includes('@') },
                message: 'email must contains @ symbol'
            }
        ]
    },
    password: {
        type: String,
        required: true,
    },
    workouts: [
        {
            type: workoutSchema
        }
    ],
    role: {
        type: String,
        default: 'trainee'
    }
}, { timestamps: true })

traineeSchema.statics.signup = async function (coachId, coachEmail, email, password) {

    const exists = await this.findOne({ email })

    if (exists) throw Error(`user with the email ${email} already exists`)

    if (!password || password.length < 5) throw Error(`password length must be more than 5`)

    const salt = await bcrypt.genSalt(10)

    const hash = await bcrypt.hash(password, salt)

    return await this.create({ coachId, coachEmail, email, password: hash })
}


traineeSchema.statics.signin = async function (email, password) {

    const exists = await this.findOne({ email })

    if (!exists) throw Error(`user with the email ${email} is not exists`)

    const match = await bcrypt.compare(password, exists.password)

    if (!match) throw Error(`incorrect password`)

    return exists
}

module.exports = mongoose.model('Trainee', traineeSchema)