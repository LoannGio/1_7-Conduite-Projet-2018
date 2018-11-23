const express = require('express');
const router = express.Router();
const logger = require('morgan');
const dbUtils = require('../models/project.js');

router.get('/project/byId/:id', async function(req, res, next){
  global.ssn = req.session;
  if (global.ssn.email) {
    let project = await dbUtils.getProject(req.params.id);
    res.render('project', {title: project.name, project:project, user: global.ssn.email });
  }
  else {
    res.redirect('/login');
  }
});

router.get('/project/byId/:id/modify', async function(req, res, next){
  global.ssn = req.session;
  if (global.ssn.email) {
    let project = await dbUtils.getProject(req.params.id);
    res.render('projectModify', {title:'Edit project : '+ project.name, project:project, user: global.ssn.email });
  }
  else {
    res.redirect('/login');
  }
});

router.put('/project/byId/:id/modify', async function(req, res, next){
  global.ssn = req.session;
  if (global.ssn.email) {
    let project = {
      uid: req.params.id,
      name: project.name,
      description: project.description,
      sprintDur: project.sprintDur,
    }
    await dbUtils.updateProject(project);
  }
  else {
    res.redirect('/login');
  }
});

module.exports = router;
