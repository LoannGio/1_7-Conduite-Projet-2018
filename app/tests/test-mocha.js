const DBinfos = require('../helpers/database.js');
const loginModule = require('../models/login.js');
var assert = require('assert');

describe('models/login.js', function() {

  describe('#createUser()', function() {
    it('Should create a user: test.user@test.user', async function() {
      let user = {
        name: "testUser",
        email: "test.user@test.user",
        password: "testUser123456",
      }
      assert.equal(await loginModule.createUser(user), true);
    });
    it('Should fail to create a existing user: test.user@test.user', async function() {
      let user = {
        name: "testUser",
        email: "test.user@test.user",
        password: "testUser123456",
      }
      assert.equal(await loginModule.createUser(user), false);
    });
  });

  describe('#existUser()', function() {
    it('Should find a user: test.user@test.user', async function() {
      let user = {
        email: "test.user@test.user",
      }
      assert.equal(await loginModule.existUser(user), true);
    });
    it('Should not find a user: test.user@test.user with the wrong password', async function() {
      let user = {
        name: "testUser",
        email: "test.user@test.user",
        password: "testUser12345",
      }
      assert.equal(await loginModule.existUser(user), false);
    });
    it('Should find a user: test.user@test.user with the right password', async function() {
      let user = {
        email: "test.user@test.user",
      }
      assert.equal(await loginModule.existUser(user), true);
    });
    it('Should not find a user: test.user@test.user', async function() {
      let user = {
        email: "test.user@test.user",
      }
      let client = await DBinfos.MongoClient.connect(DBinfos.DBurl, {
          useNewUrlParser: true
      });
      let db = client.db(DBinfos.DBname);
      await db.collection(DBinfos.usersCol).remove(user);
      client.close();
      assert.equal(await loginModule.existUser(user), false);
    });
  });

});
