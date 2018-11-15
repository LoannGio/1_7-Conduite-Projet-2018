const DBinfos = require('../helpers/database.js');
const logger = require('morgan');

var currentUser = null;

exports.existUser = async function(user) {
  let client = await DBinfos.MongoClient.connect(DBinfos.DBurl, {
      useNewUrlParser: true
  });
  let db = client.db(DBinfos.DBname);
  let res = false;
  await db.collection(DBinfos.usersCol).findOne(user, function(err,doc){
    if(err) throw err;
    if(doc) {
      currentUser = doc;
      res = true;
    }
    else {
      res = false;
    }
  });
  client.close();
  return res;
}
