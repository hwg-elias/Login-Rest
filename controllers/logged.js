const jwt = require('jsonwebtoken')

const logged = function (req, res, next) {
    // { insert token to continue }
    const token = req.cookies.token

    if (!token) {
        next();
    } else {
        try {
            const userVerified = jwt.verify(token, JWT_SECRET)
            res.render('register');

        } catch (error) {
            next();
        }
    }
}

module.exports = logged