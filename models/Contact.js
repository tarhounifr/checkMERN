// require mongoose 
const mongoose=require ('mongoose')

// creat schema
const Schema =mongoose.Schema
const contactSchema = new Schema({
    name: {
        type :String,
        require: true
    },
     email: {
        type :String,
        require: true,
        unique : true
    },
    phone: Number
});

module.exports=Contact = mongoose.model('contact',contactSchema)