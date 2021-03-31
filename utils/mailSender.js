const nodemailer = require('nodemailer')

class MailSender {
    constructor(){
        this.sendMail()
    }
    static sendMail = async (toMails) => {
        let transporter = await nodemailer.createTransport({
            service: 'gmail.com',
            auth: {
                user: process.env.EMAIL_ID,
                pass: process.env.PASSWORD
            }
        });
       return await transporter.sendMail({
            from: process.env.EMAIL_ID,
            to: toMails,
            subject: process.env.MAIL_HEADER,
            html: process.env.MAIL_BODY
        }).then(info => {
            return {status:true,message:"mail sent"}
        }).catch(err=>{
            return {status:false,message:"mail not sent"}
        })
    }
}

module.exports = MailSender