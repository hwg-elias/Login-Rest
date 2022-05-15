const jwt = require('jsonwebtoken')

const logged = function (req, res, next) {
    // { insert token to continue }
    const token = req.cookies.token

    const userVerified = jwt.verify(token, JWT_SECRET)
    if (!userVerified) {
        next()
    } else {
        try {
            const userVerified = jwt.verify(token, JWT_SECRET)
            res.redirect({status: 200, body: ''},'/');

        } catch (error) {
            
        }
    }
}

module.exports = logged