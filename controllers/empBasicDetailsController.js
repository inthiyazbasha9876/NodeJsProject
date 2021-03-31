const LoginDetails = require("./loginSignUpController");
const empDetails = require('../modals/employeeDetails')

class EmpBasicDetails extends LoginDetails {
    constructor() {
        super()
    }

    /* creating new employee */
    static createNewEmployee = async (req, res) => {
        try {
            const empObj = new empDetails(req.body)
            const empRes = await empObj.save()

            /* creating login credentials to employee */
            if (empRes) {
                const response = await this.register(empRes)
                if(response.status)
                res.status(200).send(response)
                else{
                    const removeres = await this.removeEmp(empRes._id)
                    if(!removeres)
                    return res.status(500).send(response)
                }
            }
        } catch (err) {
            return res.status(500).send({ status: false, message: err.message })
        }
    }

    /* removing employee from user */
    static removeEmp = async (req, res) => {
        try {
            await empDetails.findByIdAndRemove(req, res,(err) => {
                if (err)
                    return res.status(500).send({ status: false, message: err.message })
            })
        } catch (err) {
            return res.status(500).send({ status: false, message: err.message })
        }
    }
}
module.exports = EmpBasicDetails