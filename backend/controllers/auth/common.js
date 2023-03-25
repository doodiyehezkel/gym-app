const { verifyJWT } = require('../../jwt/jwt-utils')

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


module.exports = { signout, ping }