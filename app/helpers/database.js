let firebase = require('firebase');

exports.getFirebase = function() {

  if (!firebase.apps.length) {
    const config = {
      apiKey: "AIzaSyC-0azPBpoSpT1AfPI85FTDT-vb0Q3CDlY",
      authDomain: "conduiteprojet2018-ubx.firebaseapp.com",
      databaseURL: "https://conduiteprojet2018-ubx.firebaseio.com",
      projectId: "conduiteprojet2018-ubx",
      storageBucket: "conduiteprojet2018-ubx.appspot.com",
      messagingSenderId: "597745430634"
    };

    firebase.initializeApp(config);
    return firebase;
  }
  return firebase;
}
