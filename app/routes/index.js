var express = require('express');
var router = express.Router();
const root = require('../app.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  root.ssn = req.session;
  res.render('index', { title: 'Project Manager', user: root.ssn.email });
});

module.exports = router;
