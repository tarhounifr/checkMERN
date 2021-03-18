// req express
const express = require('express')
const Contact = require('../models/Contact')


//req controllers
const controllers= require('../controllers/concontr')
// router 
const router = express.Router()


//////////////// route

/**
 * @description:testing 
 * @path : http://localhost:7000/api/contacts/test
 * @method:get
 * @data : no data
 */
////////// test route
router.get('/test', (req, res) => {
    res.send('hello fraj')
})
/**
 * @description:add 
 * @path : http://localhost:7000/api/contacts/add
 * @method:post
 * @data : req.body
 */
router.post('/', controllers.addContact )
/**
 * @description:get all contacts
 * @path : http://localhost:7000/api/contacts/
 * @method:GET
 * @data : no data 
 */
router.get('/',controllers.getAlls)
/**
 * @description:get  contact par id 
 * @path : http://localhost:7000/api/contacts/:id
 * @method:GET
 * @data : req.params.id
 */
router.get('/:id',controllers.getOnecontact)
/**
 * @description:delet contacts
 * @path : http://localhost:7000/api/contacts/:_id
 * @method:DELET
 * @data : req.params._id
 */
router.delete('/:_id',controllers.deletOne)



/**
 * @description:update contacts
 * @path : http://localhost:7000/api/contacts/
 * @method:put
 * @data : req.params._id & req.body
 */
router.put('/:_id', controllers.updateOne)

module.exports = router