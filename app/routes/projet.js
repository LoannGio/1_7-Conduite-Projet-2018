const express = require('express');
const router = express.Router();
const logger = require('morgan');
let dbUtils = require('../models/projet.js');

/* GET home page. */
router.get('/liste', async function(req, res, next) {
  root.ssn = req.session;
  let projectList = await dbUtils.getProjects();
  res.render('listeProjets', { title: 'Project List', projects:projectList, user: root.ssn.email });
});

router.get('/creer', function(req, res, next) {
  root.ssn = req.session;
  res.render('creerProjet', { title: 'Create Project', user: root.ssn.email });
});

router.post('/creer', function(req, res, next) {
  let projectName = req.body.name;
  let projectDescr = req.body.description;
  let projectSprintDur = req.body.sprintDur;
  let uid = dbUtils.createProject(projectName, projectDescr, projectSprintDur);
});

router.get('/edit/:id', async function(req, res, next){
  root.ssn = req.session;
  let uid = req.params.id;
  let project = await dbUtils.getProjectById(parseInt(uid));
  res.render('modifierProjet', {title:'Editer projet : '+project.name, project:project, user: root.ssn.email });
});

router.put('/edit/:id', async function(req, res, next){
  let projectUid = req.params.id;
  let projectName = req.body.name;
  let projectDescr = req.body.description;
  let projectSprintDur = req.body.sprintDur;
  await dbUtils.updateProjectById(projectUid, projectName, projectDescr, projectSprintDur);
});

module.exports = router;
