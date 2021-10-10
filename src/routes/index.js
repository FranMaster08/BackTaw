const express = require('express');
const { userController } = require('../controller')
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sign', function (req, res, next) {
  res.render('login', { title: 'Express' });
});


router.get('/users',userController.getUsers);

module.exports = router;
