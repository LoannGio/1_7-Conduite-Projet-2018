const express = require('express');
const router = express.Router();

const firebase = require('firebase');
const config = {
  apiKey: "AIzaSyC-0azPBpoSpT1AfPI85FTDT-vb0Q3CDlY",
  authDomain: "conduiteprojet2018-ubx.firebaseapp.com",
  databaseURL: "https://conduiteprojet2018-ubx.firebaseio.com",
  projectId: "conduiteprojet2018-ubx",
  storageBucket: "conduiteprojet2018-ubx.appspot.com",
  messagingSenderId: "597745430634"
};
//let db = firebase.initializeApp(config).database(); //sans doute faux

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('projet', { title: 'Project List' });
});

module.exports = router;
