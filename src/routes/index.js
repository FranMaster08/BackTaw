const express = require('express');
const router = express.Router();
const {userController} = require('../controller')

router.use('/',require('./home'))
router.use('/users',require('./users'))

module.exports = router;
