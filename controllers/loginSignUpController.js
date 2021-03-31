const empDetails = require('../modals/employeeDetails')
const loginDetails = require('../modals/employeeLoginDetails')
class  LoginSignUp {

    /* register new user by admin */
    static  register = async (req,res,next)=>{

       const empDetailsObj = new empDetails({
            empId: req.body.empId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            middleName: req.body.middleName,
            DateOfBirth: req.body.dob,
            email: req.body.email,
            mobileNumber: req.body.mobileNumber,
            role: req.body.role
       })
       try{
        const resObj = await empDetailsObj.save()
       }catch(err){
           next(err.message)
       }
    }

    /* login user */
    static  login = async (req,res)=>{
       
    }
}

module.exports = LoginSignUp