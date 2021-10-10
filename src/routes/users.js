const express = require('express');
const router = express.Router();
const {userController} = require('../controller')

/* GET users listing. */
router.post('/',userController.createUser);

module.exports = router;
