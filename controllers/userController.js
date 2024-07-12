const users = require('../models/userModel')

//register
exports.registerController = async(req,res)=>{
    console.log('inside registerController');
    const {username,email,password} = req.body

    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("Account already exists,pls login!")
        }else{
            const newUser = new users({
                username,email,password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }catch(err){
        res.status(401).json(err)
    }
}