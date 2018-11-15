const express = require('express');
const router = express.Router();
const logger = require('morgan');
const dbUtils = require('../models/user.js');

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('authentication/login', { title: 'Login Page' });
});

router.post('/verification', function(req, res, next) {
  let user = {
    email: req.body.email,
    password:  req.body.password,
  };
  if (!dbUtils.existUser(user)) {
    console.log('Connexion impossible pour, ' + email + '\nUtilisateur ou mot de passe incorrect');
    res.send('Connexion impossible pour, ' + email + '\nUtilisateur ou mot de passe incorrect');
  }
  console.log('Welcome ' + email );
  res.send('Welcome ' + email );
});

/* GET login page. */
router.get('/creer', function(req, res, next) {
  res.render('authentication/createAccount', { title: 'Create Account' });
});

router.post('/creer', function(req, res, next) {
  let user = {
    email: req.body.email,
  };
  if (!dbUtils.existUser(user)) {
    res.send("L'email: " + email + " est déjà associé à un utilisateur" );
  }
  res.send('Welcome ' + email );
});

module.exports = router;
