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

module.exports = { createJWT, verifyJWT }