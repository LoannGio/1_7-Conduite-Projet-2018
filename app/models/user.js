const DBinfos = require('../helpers/database.js');
const logger = require('morgan');

var currentUser = null;

exports.existUser = async function(user) {
  let client = await DBinfos.MongoClient.connect(DBinfos.DBurl, {
      useNewUrlParser: true
  });
  let res = false;
  let db = client.db(DBinfos.DBname);
  await db.collection(DBinfos.usersCol).findOne(user, function(err,doc){
    if(err) throw err;
    if(doc) {
      res = true;
    }
    else {
      res = false;
    }
  });
  client.close();
}

exports.connectUser = async function(user) {;
  let res = await existUser(user);
  if (res) currentUser = doc;
  return res;
}

exports.createUser = async function(user) {
  let userIdentity = {
    email: user.email,
  };
  let res = await existUser(userIdentity);
  if (res) return res;
  let client = await DBinfos.MongoClient.connect(DBinfos.DBurl, {
      useNewUrlParser: true
  });
  let db = client.db(DBinfos.DBname);
  await db.collection(DBinfos.usersCol).insertOne(user, function(err, doc){
    if (err) throw err;
    res = doc.acknowledged;
  });
  client.close();
  return res;
}
