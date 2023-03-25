const coachSchema = require('../../models/coach')
const { createJWT } = require('../../jwt/jwt-utils')

//signup coach
const signup = async (req, res) => {
    const { email, password } = req.body
    try {
        const coach = await coachSchema.signup(email, password)
        res.status(201).json(coach)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//signin coach
const signin = async (req, res) => {
    const { email, password } = req.body
    try {
        const coach = await coachSchema.signin(email, password)
        const token = createJWT(coach._id)
        res.cookie('token', token, { httpOnly: true, maxAge: 1000 * 1000 * 6000 })
        res.status(200).json(coach)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



module.exports = { signup, signin }