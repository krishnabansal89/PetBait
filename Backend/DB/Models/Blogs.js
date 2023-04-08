const mongoose = require ("mongoose");
const  { Schema }  = mongoose

const Blog = new Schema({
    author : String,
    title: String ,
    content: String,
    Date: Date,
    meta: Array,
    icon: String,
})

const Model = mongoose.model("Blog",Blog)
module.exports = Model