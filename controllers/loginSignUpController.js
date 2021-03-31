const login = require('../modals/employeeLoginDetails')
const bcrpt = require('bcryptjs')
const MailSender = require('../utils/mailSender')
const jwt = require('jsonwebtoken')
class LoginDetails extends MailSender{
    constructor() {
        super()
        this.register()
    }

    /* register new user in login details */
    static register = async (req, res) => {
        try {
            /* password encryption */
            const encrptpass = bcrpt.hashSync(process.env.DEFAULT_PASS, 8)

            /* login reqObj and save */
            const loginObj = new login({
                userName: req.empId,
                password: encrptpass,
                employee: req._id
            })
            const loginRes = await loginObj.save()

            /* creation of mail body and send mail to user */
            const mailBodyObj =  {
                userName: loginRes.userName,
                password: process.env.DEFAULT_PASS,
                name: req.firstName
            }
            process.env.MAIL_HEADER = 'User Credentials'
            process.env.MAIL_BODY = require('../utils/mailbody').userCreated(mailBodyObj)
            const mailRes = await this.sendMail(req.email)
            if (mailRes.status)
                return {status:true,message:'user created and mail sent'}
            else {
                return {status:true,message:'user created and mail not sent'}
            }
        } catch (err) {
            return { status: false, message: err.message }
        }
    }


    /* user login */
    static login = async (req, res) => {
        try{
            const emp = login.findOne({userName:req.body.userName},(err,success)=>{
                if(err)
                return res.status(500).send({status:false,message:'Server Error'})
                if(!success)
                return res.status(401).send({status:false,message:'User not found'})

                const validatePassword = bcrpt.compareSync(req.body.password, success.password)
                if(!validatePassword)
                return res.status(401).send({status:false,message:'Wrong Password'})

                const token = jwt.sign({ userName: success.userName }, process.env.JWT_SECRET_KEY, {
                    expiresIn: '24h'
                })
                const resObj = {
                    empId: success.userName,
                    token: token
                }
                return res.status(200).send({status:true,data:resObj})
            })
        }catch(err){
            return res.status(500).send({status:false,message:err.message})
        }
    }

    /* user remove from login details */
    static removeLogin = async (req, res) => {
        try {
            await login.findByIdAndRemove(req, res,(err) => {
                if (err)
                    return res.status(500).send({ status: false, message: err.message })
            })
        } catch (err) {
            return res.status(500).send({ status: false, message: err.message })
        }
    }
}
module.exports = LoginDetails;