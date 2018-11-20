const DBinfos = require('../helpers/database.js');
const logger = require('morgan');

async function existUser(user) {
  let client = await DBinfos.MongoClient.connect(DBinfos.DBurl, {
      useNewUrlParser: true
  });
  let res = false;
  let db = client.db(DBinfos.DBname);
  const doc = await db.collection(DBinfos.usersCol).findOne(user);
  if(doc) {
    res = true;
  }
  client.close();
  return res;
}

exports.canConnectUser = async function(user) {
  let res = await existUser(user);
  return res;
}

exports.createUser = async function(user) {
  let userIdentity = {
    email: user.email,
  };
  var res = await existUser(userIdentity);
  if (res) {
    return false;
  }
  let client = await DBinfos.MongoClient.connect(DBinfos.DBurl, {
      useNewUrlParser: true
  });
  let db = client.db(DBinfos.DBname);
  await db.collection(DBinfos.usersCol).insertOne(user);
  client.close();
  return true;
}
