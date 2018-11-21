let DBinfos = require('../helpers/database.js');
const logger = require('morgan');

async function nextId(){
  const client = await DBinfos.MongoClient.connect(DBinfos.DBurl, {
      useNewUrlParser: true
  });
  const db = client.db(DBinfos.DBname);
  let idMax = -1;
  let filter = { name:'idMaxProjects'};
  let dbResp = await db.collection(DBinfos.IDsCol).findOne(filter);
  idMax = dbResp.value;
  let nextId = parseInt(idMax) + 1;
  db.collection(DBinfos.IDsCol).updateOne(filter, {$set: {value:nextId}}, function(err, re){
    if (err) throw err;
    client.close();
  });
  return nextId;
}

// Create new projet in firebase
exports.createProject = async function(project) {
  const client = await DBinfos.MongoClient.connect(DBinfos.DBurl, {
      useNewUrlParser: true
  });
  const db = client.db(DBinfos.DBname);
  project.uid = await nextId();
  db.collection(DBinfos.projectsCol).insertOne(project);
  client.close();
  return project.uid;
}

// Get projects
exports.getProjectsUser = async function(userId) {
  const client = await DBinfos.MongoClient.connect(DBinfos.DBurl, {
      useNewUrlParser: true
  });
  const db = client.db(DBinfos.BDname);
  const projects = await db.collection(DBinfos.projectsCol).find({users: { $in : [userId] } }).toArray();
  client.close();
  return projects;
}

// Get project by id
exports.getProjectById = async function(id) {
  const client = await DBinfos.MongoClient.connect(DBinfos.DBurl, {
      useNewUrlParser: true
  });
  const db = client.db(DBinfos.BDname);
  const filter = { uid: id};
  const project = await db.collection(DBinfos.projectsCol).findOne(filter);
  client.close();
  return project;
}

// Delete project by id
exports.deleteProjectById = async function(id) {
  const client = await DBinfos.MongoClient.connect(DBinfos.DBurl, {
      useNewUrlParser: true
  });
  const db = client.db(DBinfos.BDname);
  const filter = { uid: id};
  db.collection(DBinfos.projectsCol).deleteOne(filter);
  client.close();
}
