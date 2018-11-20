const express = require('express');
const router = express.Router();
const logger = require('morgan');
const dbUtils = require('../models/user.js');

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('authentication/login', { title: 'Login Page' });
});

router.post('/', async function(req, res) {
  let user = {
    email: req.body.email,
    password:  req.body.password,
  };
  var isConnected = await dbUtils.connectUser(user);
  if (isConnected) {
    console.log('Welcome ' + user.email );
    res.redirect(req.baseUrl + '/');
  }
  else {
    console.log('Connexion impossible pour, ' + user.email + '\nUtilisateur ou mot de passe incorrect');
  }
});

/* GET login page. */
router.get('/creer', function(req, res, next) {
  res.render('authentication/createAccount', { title: 'Create Account' });
});

router.post('/creer', async function(req, res) {
  let user = {
    email: req.body.email,
    password:  req.body.password,
    name: req.body.name,
  };
  let isCreated = await dbUtils.createUser(user);
  if (isCreated) {
    console.log('Welcome ' + user.email );
  }
  else {
    console.log("L'email: " + user.email + " est déjà associé à un utilisateur" );
  }
});

module.exports = router;
