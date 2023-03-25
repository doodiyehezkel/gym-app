const traineeSchema = require('../../models/trainee')
const { createJWT } = require('../../jwt/jwt-utils')

//signin trainee
const signin = async (req, res) => {
    const { email, password } = req.body
    try {
        const trainee = await traineeSchema.signin(email, password)
        const token = createJWT(trainee._id)
        res.cookie('token', token, { httpOnly: true, maxAge: 1000 * 1000 * 6000 })
        res.status(200).json(trainee)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { signin }