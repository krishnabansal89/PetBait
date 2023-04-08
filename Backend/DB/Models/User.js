const mongoose = require('mongoose')
const {Schema} = mongoose

const User = new Schema({
    email : String,
    password : String,
    role: String , 
    name: String,

})
const model = mongoose.model('User' , User)
module.exports = model