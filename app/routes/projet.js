const express = require('express');
const router = express.Router();
const firebase = require('firebase');
const logger = require('morgan');
let db = require('../helpers/database.js');
let dbUtils = require('../models/projet.js');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('projet', { title: 'Project List' });
});

router.get('/creer', function(req, res, next) {
  res.render('creerProjet', { title: 'Create Project' });
});

router.post('/creer', function(req, res, next) {
  let projectName = req.body.name;
  let projectDescr = req.body.description;
  let projectSprintDur = req.body.sprintDur;
  let uid = dbUtils.createProject(projectName, projectDescr, projectSprintDur);
  res.render('index', {title:'Index'});
});

module.exports = router;
