var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('authentification/login', { title: 'Login Page' });
});

/* GET login page. */
router.get('/create', function(req, res, next) {
  res.render('authentification/createLogin', { title: 'Create Account' });
});

module.exports = router;
