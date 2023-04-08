const express = require('express')
const router = express.Router()
const blog = require('../../DB/Models/Blogs.js')

router.post('' , async (req,res)=>{
    const term = req.body.term 
    console.log(term)
    // blog.createIndexes({"meta":1})
    const data = await blog.find({"meta.tags.":term})
    // const data = await blog.find({"meta.tags":["","tech news ","emerging technologies ","blockchain technology ","IoT ","virtual reality"]})
    console.log("data" , data)
    // var result = []
    // for(items in data){
    //     // console.log('items' , data[items])
    //     var title = data[items]['title']
    //     var date = data[items]['Date']
    //     var icon = data[items]['icon']
    //     var x = [title,date,icon]
    //     result.push(x)
    // }
    const final =  [data , term]
    res.json(final)
    
})

module.exports = router