const userSchema = require('../models/user')
const jwt = require('jsonwebtoken')


const createJWT = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

const verifyJWT = (token) => {
    try {
        return jwt.verify(token, process.env.SECRET)
    } catch (error) {
        return error
    }
}

//signup user
const signup = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await userSchema.signup(email, password)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//signin user
const signin = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await userSchema.signin(email, password)
        const token = createJWT(user._id)
        res.cookie('token', token, { httpOnly: true, maxAge: 1000 * 1000 * 6000 })
        res.status(201).json({ user, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const signout = async (req, res) => {
    res.clearCookie('token')
    res.status(200).json()
}

const ping = (req, res) => {
    const token = req.cookies.token
    if (token && verifyJWT(token)) {
        res.status(200).json()
    }
    else {
        res.status(401).json()
    }
}

const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token
    const { _id } = verifyJWT(token)
    if (token && _id) {
        req.userId = _id
        next()
        return
    }
    res.status(401).json({ error: 'you are not logged in' })
}

module.exports = { signup, signin, signout, ping, authMiddleware }