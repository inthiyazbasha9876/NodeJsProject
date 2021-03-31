class MailBodies {

    /* user created mail body */
    static userCreated = (req)=>{
        const html = `
        <p>Hi ${req.name}</p>
        <br>
        <br>
        <p>Your Details has been registered in out DataBase, please find the below credentials to login to our website.</p>
        <p>UserName: ${req.userName}</p>
        <p>Password: ${req.password}</p>
        <br>
        <p style="background-color:yellow">Note: please reset your password after login to out portal...</p>
        `
        return html
    }
}

module.exports = MailBodies