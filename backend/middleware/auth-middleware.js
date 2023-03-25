
const { verifyJWT } = require('../jwt/jwt-utils')

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

module.exports = { authMiddleware }