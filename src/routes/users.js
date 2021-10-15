const express = require('express');
const router = express.Router();
const {userController} = require('../controller')
const {location} = require('../middleware')

/* GET users listing. */
router.post('/',location,userController.createUser);


module.exports = router;
