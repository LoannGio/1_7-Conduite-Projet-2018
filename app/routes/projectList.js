const express = require('express');
const router = express.Router();
const logger = require('morgan');
const dbUtils = require('../models/project.js');


/* GET home page. */
router.get('/projects', async function(req, res, next) {
  global.ssn = req.session;
  if (global.ssn.email) {
    let projectList = await dbUtils.getProjectsUser(global.ssn.email);
    res.render('projectList', { title: 'Project List', projects:projectList, user: global.ssn.email });
  }
  else {
    res.redirect('/login');
  }
});

router.get('/project/create', function(req, res, next) {
  global.ssn = req.session;
  if (global.ssn.email) {
    res.render('createProject', { title: 'Create Project', user: global.ssn.email });
  }
  else {
    res.redirect('/login');
  }
});

router.post('/project/create', async function(req, res, next) {
  global.ssn = req.session;
  if (global.ssn.email) {
    let project = {
      name: req.body.name,
      description: req.body.description,
      sprintDur: req.body.sprintDur,
      users: [global.ssn.email]
    }
    await dbUtils.createProject(project);
    res.redirect('/projects');
  }
  else {
    res.redirect('/login');
  }

});

module.exports = router;
