const express = require('express');
const router = express.Router();
const logger = require('morgan');
const dbUtils = require('../models/login.js');
const root = require('../app.js')

/* GET login page. */
router.get('/', function(req, res, next) {
  root.ssn = req.session;
  res.render('login', { title: 'Login Page', user: root.ssn.email });
});

router.post('/', async function(req, res) {
  let user = {
    email: req.body.email,
    password:  req.body.password,
  };
  if (await dbUtils.existUser(user)) {
    root.ssn = req.session;
    root.ssn.email  = req.body.email;
    res.redirect('/');
  }
  else {
    console.log('Connexion impossible pour, ' + user.email + '\nUtilisateur ou mot de passe incorrect');
  }
});

router.get('/logout', function(req,res){
  req.session.destroy(function(err) {
    if(err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
});

/* GET login page. */
router.get('/create', function(req, res, next) {
  root.ssn = req.session;
  res.render('createAccount', { title: 'Create Account', user: root.ssn.email });
});

router.post('/create', async function(req, res) {
  let user = {
    email: req.body.email,
    password:  req.body.password,
    name: req.body.name,
  };
  if (await dbUtils.createUser(user)) {
    res.redirect('/');
  }
  else {
    console.log("L'email: " + user.email + " est déjà associé à un utilisateur" );
  }
});

module.exports = router;
