const express = require('express');
const router = express.Router();
const logger = require('morgan');
const dbUtils = require('../models/project.js');

router.get('/project/byId/:id', async function(req, res, next){
  global.ssn = req.session;
  if (global.ssn.email) {
    let project = await dbUtils.getProjectById(req.params.id);
    res.render('project', {title: project.name, project:project, user: global.ssn.email });
  }
  else {
    res.redirect('/login');
  }
});

router.get('/project/byId/:id/modify', async function(req, res, next){
  global.ssn = req.session;
  if (global.ssn.email) {
    let project = await dbUtils.getProjectById(req.params.id);
    res.render('projectModify', {title:'Edit project : '+ project.name, project:project, user: global.ssn.email });
  }
  else {
    res.redirect('/login');
  }
});

router.post('/project/byId/:id/modify', async function(req, res, next){
  global.ssn = req.session;
  if (global.ssn.email) {
    let project = {
      uid: req.params.id,
      name: req.body.name,
      description: req.body.description,
      sprintDur: req.body.sprintDur,
    }
    await dbUtils.updateProjectById(project);
    res.redirect('/project/byId/' + project.uid);
  }
  else {
    res.redirect('/login');
  }
});

router.get('/project/byId/:id/delete', async function(req, res, next){
  global.ssn = req.session;
  if (global.ssn.email) {
    await dbUtils.deleteProjectById(req.params.id);
    res.redirect('/projects');
  }
  else {
    res.redirect('/login');
  }
});

module.exports = router;
