var mongoose = require('mongoose')

async function app() {
    db = await mongoose.connect('mongodb+srv://krishnabansal890:Extra123@blogs.4y0uw0z.mongodb.net/?retryWrites=true&w=majority');
    if(db){
        console.log('DB is connected')
    }
    else{
        console.log('error occured')
    }
}
module.exports = app  