const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('projet', { title: 'Project List' });
});

router.get('/creer', function(req, res, next) {
  res.render('creerProjet', { title: 'Create Project' });
});

router.post('/creer', function(req, res, next) {
  //Comment check si on arrive bien ici ? avec les bonnes données ?
});

module.exports = router;
