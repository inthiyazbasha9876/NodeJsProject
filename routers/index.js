const router = require('express').Router()
const verifyToken = require('../utils/jwtVerification')
const authController = require('../controllers/authController')
const LoginSignUp = require('../controllers/loginSignUpController')
const EmpBasicDetails = require('../controllers/empBasicDetailsController')

//auth routers
router.get('/auth/getAuth',authController.getToken)

//login and register
      .post('/employee/register',verifyToken,LoginSignUp.register)
      .post('/employee/login',LoginSignUp.login)

//employee creation
      .post('/employee/createEmp',verifyToken,EmpBasicDetails.createNewEmployee)

module.exports = router;