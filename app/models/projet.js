let db = require('../helpers/database.js');

// Create new projet in firebase
exports.createProject = function(projectName, code) {

  var pRef = db.getFirebase().database().ref('projects/');
  pRef.push ({
    code: code,
    name: projectName
  });

}

// Get projects
exports.getProjects = function() {
  var pRef = db.getFirebase().database().ref('projects/');
  // Attach an asynchronous callback to read the data at our posts reference
  pRef.on("value", function(snapshot) {
    console.log(snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
}

// Get project by id
exports.getProjectById = function(id) {
  var pRef = db.getFirebase().database().ref('projects/' + id);
  // Attach an asynchronous callback to read the data at our posts reference
  pRef.on("value", function(snapshot) {
    console.log(snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
}
