const express = require('express');
const router = express.Router();
const firebase = require('firebase');
const logger = require('morgan');
let dbUtils = require('../models/projet.js');



/* GET home page. */
router.get('/liste', async function(req, res, next) {
  let projectList = await dbUtils.getProjects();
  res.render('listeProjets', { title: 'Project List', projects:projectList });
});

router.get('/creer', function(req, res, next) {
  res.render('creerProjet', { title: 'Create Project' });
});

router.post('/creer', function(req, res, next) {
  let projectName = req.body.name;
  let projectDescr = req.body.description;
  let projectSprintDur = req.body.sprintDur;
  let uid = dbUtils.createProject(projectName, projectDescr, projectSprintDur);
});

module.exports = router;
