const jwt = require('jsonwebtoken')

const verifyToken = (req,res,next)=>{
    try{
        const token = req.headers['x-access-token'];
        if(!token){
            return res.status(403).json({auth:false,message:'No token Provided..'})
        }
        jwt.verify(token,process.env.JWT_SECRET_KEY,(err,res)=>{
            if(err)
            return res.status(500).json({auth:false,message:'token expried.. please login again'})
            next()
        })
    }catch(err){
        res.status(500).send('error')
    }
}

module.exports = verifyToken