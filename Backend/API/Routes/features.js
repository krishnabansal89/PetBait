const express = require('express')
const router = express.Router()
const blog = require('../../DB/Models/Blogs.js')


router.get('/recent' , async(req,res)=>{
    // console.log('hi')
    const data1 =  await blog.find().limit(10).sort({ $natural: -1 })
    data = data1.slice(1)
    console.log('data' , data)
    res.status(200).json(data)
})
router.get('/head' , async(req,res)=>{
    const data = await blog.find().limit(5).sort({$natural: -1})
    res.status(200).json(data)
})
module.exports = router