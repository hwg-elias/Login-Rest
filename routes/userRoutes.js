const express = require('express')
const router = express.Router()
const auth = require('../controllers/auth')
const logged = require('../controllers/logged')
const userController = require('../controllers/userController')

// GET ROUTES
router.get('/', auth, userController.homePage)
router.get('/login', userController.loginPage)
router.get('/register', userController.registerPage)
router.get('/error', userController.errorPage)


// POST ROUTES
router.post('/register', express.urlencoded({ extended: true }), userController.addUser)
router.post('/login', express.urlencoded({ extended: true }), userController.login) 


module.exports = router