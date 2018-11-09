const config = {
  apiKey: "AIzaSyC-0azPBpoSpT1AfPI85FTDT-vb0Q3CDlY",
  authDomain: "conduiteprojet2018-ubx.firebaseapp.com",
  databaseURL: "https://conduiteprojet2018-ubx.firebaseio.com",
  projectId: "conduiteprojet2018-ubx",
  storageBucket: "conduiteprojet2018-ubx.appspot.com",
  messagingSenderId: "597745430634"
};
firebase.initializeApp(config);

function createAccount (email, password, username) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
      window.location.href = '/';
    })
    .catch(function(error) {
      console.error(error);
    });
}

function loginUser (email, password, username){
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
      window.location.href = "/";
    }
    , function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(error);
    });

  }
