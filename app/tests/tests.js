import { Selector } from 'testcafe';

fixture `Test Login`
    .page `localhost:3000/login`;

test('Test login', async t => {
  await t
      .typeText('#inputEmail', 'toto@gmail.com')
      .typeText('#inputPassword', 'toto123456')
      .click('#submitLogin')
      .expect(Selector('#userWelcome').innerText).eql('Your are connected as toto@gmail.com');
});
