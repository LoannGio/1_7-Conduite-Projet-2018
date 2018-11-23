const express = require('express');
const router = express.Router();
const logger = require('morgan');
const dbUtils = require('../models/login.js');

/* GET login page. */
router.get('/login', function(req, res, next) {
  global.ssn = req.session;
  res.render('login', { title: 'Login Page', user: global.ssn.email });
});

router.post('/login', async function(req, res) {
  let user = {
    email: req.body.email,
    password:  req.body.password,
  };
  if (await dbUtils.existUser(user)) {
    global.ssn = req.session;
    global.ssn.email  = req.body.email;
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
router.get('/login/create', function(req, res, next) {
  global.ssn = req.session;
  res.render('createAccount', { title: 'Create Account', user: global.ssn.email });
});

router.post('/login/create', async function(req, res) {
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
