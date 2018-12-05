var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  global.ssn = req.session;
  res.render('index', { title: 'Project Manager', user: global.ssn.email });
});

module.exports = router;
