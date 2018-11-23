import { Selector } from 'testcafe';

fixture `Test Login`
    .page `localhost:3000/login`;

test('Test login success', async t => {
  await t
      .typeText('#inputEmail', 'toto@gmail.com')
      .typeText('#inputPassword', 'toto123456')
      .click('#submitLogin')
      .expect(Selector('#loggedAs').innerText).eql('Logged as toto@gmail.com');
});

test('Test login failure', async t => {
  await t
      .typeText('#inputEmail', 'toto@gmail.com')
      .typeText('#inputPassword', 'wrongpassword')
      .click('#submitLogin')
      .expect(Selector('#errorMsg').innerText).eql('Login failed');
});

fixture `Test Sign Up`
    .page `localhost:3000/login/create`;

test('Test sign up failure', async t => {
  await t
      .typeText('#inputUsername', "toto2")
      .typeText('#inputEmail', 'toto@gmail.com')
      .typeText('#inputPassword', 'toto123456')
      .click('#submitSignUp')
      .expect(Selector('#errorMsg').innerText).eql('Email toto@gmail.com already exists');
});
