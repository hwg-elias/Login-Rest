const express = require('express')
const router = express.Router()
const auth = require('../controllers/auth')
const userController = require('../controllers/userController')

// GET ROUTES
router.get('/', userController.homePage)
router.get('/app', auth, userController.app)
router.get('/register', userController.registerPage)


// POST ROUTES
router.post('/register', express.urlencoded({ extended: true }), userController.addUser)
router.post('/login', express.urlencoded({ extended: true }), userController.login) 


module.exports = router