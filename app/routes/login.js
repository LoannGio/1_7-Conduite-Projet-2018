const express = require('express');
const router = express.Router();
const logger = require('morgan');
const dbUtils = require('../models/login.js');
const root = require('../app.js')

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login Page' });
});

router.post('/', function(req, res) {
  let user = {
    email: req.body.email,
    password:  req.body.password,
  };
  var res = dbUtils.canConnectUser(user);
  if (res) {
    root.session = req.session;
    root.email = req.body.email;
    res.redirect('/');
  }
  else {
    console.log('Connexion impossible pour, ' + user.email + '\nUtilisateur ou mot de passe incorrect');
  }
});

/* GET login page. */
router.get('/create', function(req, res, next) {
  res.render('createAccount', { title: 'Create Account' });
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
