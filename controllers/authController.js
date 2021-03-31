const jwt = require('jsonwebtoken')

class AuthController {
    static  getToken = async (req,res) =>{
        try{
            const jwtToken = jwt.sign({username:'admin'},process.env.JWT_SECRET_KEY,{
                expiresIn: '24h'
            })
            res.status(200).json({token:jwtToken})
        }catch(err){
            res.status(500).send('error getting the token')
        }
       
    }
}

module.exports = AuthController