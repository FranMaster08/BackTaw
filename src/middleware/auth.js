const {userRepository:User} = require('../database/model')


const authUser = async (req, res, next)=>{
    const result = await User.findOne({email: req.body.email, password: req.body.password})
    if(result){
        next()
    }else{
        res.status(404).json({error:'no registrado'})
    }
}

module.exports = 
    authUser
