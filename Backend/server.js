const express = require('express')
const app = express()
const db = require('./DB/db.js')
const cors = require('cors')
const PORT = process.env.PORT || 5000
app.use(express.json({limit: '50mb'}))

app.use(cors({
    origin:"http://localhost:3000"
}))

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
}

app.use('',require('./API/Routes/data.js')) 
app.use('/blog', require('./API/Routes/features') )
app.use('/search',require('./API/Routes/search') )
app.use('/admin',require('./API/Routes/login'))

app.listen(PORT, ()=>{
    console.log( PORT , 'port pe jinda he')
})
db()

