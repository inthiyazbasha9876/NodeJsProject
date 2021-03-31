const router = require('express').Router()
const verifyToken = require('../utils/jwtVerification')
const authController = require('../controllers/authController')
const LoginSignUp = require('../controllers/loginSignUpController')

//auth routers
router.get('/auth/getAuth',authController.getToken)

//login and register
router.post('/employee/register',verifyToken,LoginSignUp.register)
      .post('/employee/login',LoginSignUp.login)


module.exports = router;