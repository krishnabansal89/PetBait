const express = require('express')
const router = express.Router()
const User = require('../../DB/Models/User')
const {body ,validationResult , isEmpty } = require('express-validator')

router.post('' ,[
    body('email' , 'Email should not be empty').isLength({min:1}),
    body('password' , 'password kha he').isLength({min:1})
], async (req,res)=>{
    const err = validationResult(req)
    if(err.isEmpty){
        const email = req.body.email
        const item = await User.find({"email":email})
        console.log(item.isEmpty)
        if (!item.length>0){
            res.status(404).json("No user found")
        }
        else{
            const pass = req.body.password
            if(item[0]["password"]==pass){
                res.status(200).json({"Name":item[0]["name"]})
            }
            else{
                res.status(404).json("Invalid credentials")
            }
        }
    }
})
module.exports = router