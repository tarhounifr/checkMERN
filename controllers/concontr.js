
//addContact

const addContact = async (req, res) => {
    try {

        const { name, email, phone } = req.body
        const newContact = new Contact({
            name,
            email,
            phone
        })
        await newContact.save()
        res.status(200).send({ msg: 'add success ....', newContact })
    } catch (error) {
        res.status(400).send({ msg: 'error add contact', error })
    }
}
// get all contacts
const getAlls= async(req,res)=>{
    try {
      const listContacts = await Contact.find()
      res.status(200).send({msg:"this is all contact...",listContacts})  
    } catch (error) {
     res.status(400).send({ msg: 'error get all contacts', error })    
    }
}
// get contact via id 
const getOnecontact = async(req,res)=>{
    try {
        const contactToGet = await Contact.findOne({_id:req.params.id})
        res.status(200).send({msg:'I get contact',contactToGet})
    } catch (error) {
      res.status(400).send({ msg: 'error get contact', error })   
    }
}
// delet contact
const deletOne= async(req,res)=>{
    try {
    const contactToDelet = await Contact.findOneAndDelete({_id:req.params._id})
        res.status(200).send({msg:'I delet contact',contactToDelet})     
    } catch (error) {
 res.status(400).send({ msg: 'error delet contact', error })        
    }
}
// Update one contact
const updateOne = async (req,res)=>{
try {
 const contactToUpdate = await Contact.updateOne({_id:req.params._id},{$set: {...req.body}})
        res.status(200).send({msg:'I update contact',contactToDelet})   
} catch (error) {
res.status(400).send({ msg: 'error update contact', error })      
}
}

module.exports=controllers={addContact,getAlls,getOnecontact,deletOne,updateOne}