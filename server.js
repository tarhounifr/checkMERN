// require express
const express=require ('express');

// express
const app = express();
// dot env
require ('dotenv').config()

// midelwar body 
app.use(express.json())
// connect db
const connectDB=require('./config/connectDB');
connectDB();



// route

app.use('/api/contacts',require('./routes/contact'))
// port

const PORT=process.env.PORT


// creat server
app.listen(PORT,error=>{
    error? console.error(`failed to connect to server !!!!!!! ${PORT}`)
    :
    console.log(`server connect ${PORT}`)
});
