let db = require('../helpers/database.js');
const logger = require('morgan');

async function nextId(){
  let ref = db.getFirebase().database().ref('UID_MAX_PROJECT/');
  let nextid = -1;
  await ref.transaction(function(id){
    return id+1;
  }, function(error, committed, child) {
     if(error) {
        console.log('error: ', error);
     }
     nextid = child.node_.value_;
   });
   return nextid
}

// Create new projet in firebase
exports.createProject = async function(projectName, descr, sprintDur) {
  let pRef = db.getFirebase().database().ref('projects/');
  let id = await nextId();
  console.log('\n' + id + '\n');
  pRef.push ({
    name: projectName,
    description:descr,
    sprintDuration:sprintDur,
    uid:id
  });
  return id;
}



// Get projects
exports.getProjects = function() {
  let pRef = db.getFirebase().database().ref('projects/');
  // Attach an asynchronous callback to read the data at our posts reference
  pRef.on("value", function(snapshot) {
    return snapshot.val();
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
}

// Get project by id
exports.getProjectById = function(id) {
  let pRef = db.getFirebase().database().ref('projects/');
  // Attach an asynchronous callback to read the data at our posts reference
  pRef.orderByChild("uid").equalTo(id).on("value", function(snapshot) {
    return snapshot.val()[0];
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
}


// Delete project by id
exports.deleteProjectById = function(id) {
  db.getFirebase().database().ref('projects/' + id).remove();
}
