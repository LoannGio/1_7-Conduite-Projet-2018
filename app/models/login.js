const DBinfos = require('../helpers/database.js');
const logger = require('morgan');


async function findUser(user) {
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

exports.existUser = async function(user) {
  var res = await findUser(user);
  return res;
};

exports.createUser = async function(user) {
  let userIdentity = {
    email: user.email,
  };
  var res = await findUser(userIdentity);
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
};
