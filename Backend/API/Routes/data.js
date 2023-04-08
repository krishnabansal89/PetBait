const express = require('express')
const router = express.Router()
const {body ,validationResult } = require('express-validator')
const blog = require('../../DB/Models/Blogs.js')

router.post('/post',[
    body('title',"should not be empty").isLength({min:1}),
    body('author',"should not be exmpty").isLength({min:1}),
    body('content',"should not be exmpty").isLength({min:1}),
    body('Date',"should not be exmpty").isLength({min:1}),
    body('meta',"should not be exmpty").isLength({min:1}),
    body('icon',"should not be exmpty").isLength({min:1}),
] , async(req,res)=>{
    err = validationResult(req)
    if(err.isEmpty()){
        const data = blog(req.body)
        data.save((err)=>{
            if(err){
                res.status(400).json(err)
            }
            else{
                res.status(200).json('DONE')
            }
        })
    }   
    else{
        res.status(404).json(err.errors)
    }
})

router.post('/get' , [
    body('Obj_id','Id should not be empty').isLength({min:1})
] , async (req, res)=>{
    err = validationResult(req)
    if(err.isEmpty()){
        const data = await blog.findById(req.body.Obj_id)
        if(data){
            console.log('hh' , data)
            res.status(200).json(data)
        }
        else{
            res.status(404).json('No data found')
        }
    }
})



module.exports = router