// mongoose
const mongoose = require ("mongoose");

// connect db

const connectDB= async() =>{
    try {
         mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }) 
    console.log('database connected')
} catch (error) {
        console.error('connection db fieled ')
    }
   
   
}


module.exports = connectDB