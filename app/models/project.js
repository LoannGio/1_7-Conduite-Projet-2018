let DBinfos = require('../helpers/database.js');
const logger = require('morgan');

// Update project by id
exports.updateProject = async function(project){
  const client = await DBinfos.MongoClient.connect(DBinfos.DBurl, {
      useNewUrlParser: true
  });
  const db = client.db(DBinfos.BDname);
  const filter = { uid: parseInt(project.uid)};
  db.collection(DBinfos.projectsCol)
  .updateOne(filter, {$set: {name: project.name, description: project.description, sprintDur: project.sprintDur} });
  client.close();
}

// Get projects
exports.getProject = async function(id) {
  const client = await DBinfos.MongoClient.connect(DBinfos.DBurl, {
      useNewUrlParser: true
  });
  const db = client.db(DBinfos.BDname);
  const filter = { uid: parseInt(id)};
  const project = await db.collection(DBinfos.projectsCol).findOne({ uid: parseInt(id) });
  client.close();
  console.log(project);
  return project;
}

// Delete project by id
exports.deleteProject = async function(id) {
  const client = await DBinfos.MongoClient.connect(DBinfos.DBurl, {
      useNewUrlParser: true
  });
  const db = client.db(DBinfos.BDname);
  db.collection(DBinfos.projectsCol).deleteOne({ uid: parseInt(id) });
  client.close();
}
