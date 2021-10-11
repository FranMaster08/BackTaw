const express = require('express');
const router = express.Router();


router.use('/',require('./homes'))
router.use('/users',require('./users'))

module.exports = router;
