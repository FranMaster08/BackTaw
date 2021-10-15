const express = require('express');
const { userController } = require('../controller')
const router = express.Router();
const {auth} = require('../middleware')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sign', function (req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/sigout', function (req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/register', function (req, res, next) {
  res.render('register');
});
router.post('/login', auth,function (req, res, next) {
  res.redirect('/users');
});


router.get('/users',userController.getUsers);

module.exports = router ;
