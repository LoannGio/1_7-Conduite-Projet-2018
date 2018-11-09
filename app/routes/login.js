var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('authentication/login', { title: 'Login Page' });
});

/* GET login page. */
router.get('/create', function(req, res, next) {
  res.render('authentication/createAccount', { title: 'Create Account' });
});

module.exports = router;
