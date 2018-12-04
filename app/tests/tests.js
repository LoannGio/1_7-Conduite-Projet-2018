import { Selector } from 'testcafe';
import { Role } from 'testcafe';

const appUser1= Role('localhost:3000/login', async t => {
    await t
      .typeText('#inputEmail', 'toto@gmail.com')
      .typeText('#inputPassword', 'toto123456')
      .click('#submitLogin')
}, { preserveUrl:true } );

const appUser2 = Role('localhost:3000/login', async t => {
    await t
      .typeText('#inputEmail', 'toto@gmail.com')
      .typeText('#inputPassword', 'toto123456')
      .click('#submitLogin')
});


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

fixture `Test Create Project`
    .page `localhost:3000/`;

test('Test Create Project', async t => {
  await t
      .useRole(appUser2)
      .click(Selector("a.btn.btn-primary"))
      .typeText('#projectName', 'Create project test')
      .typeText('#projectDescr', 'Project description')
      .typeText('#projectSprintDur', '6')
      .click(Selector("button.btn.btn-primary"))
      .expect(Selector('h1.mt-5').innerText).eql('Project List')
});


fixture `Test Show Project List`
    .page `localhost:3000/`;

    test('Test show project list', async t => {
      await t
          .useRole(appUser1)
          .navigateTo('localhost:3000/projects')
          .expect(Selector('h1.mt-5').innerText).eql('Project List')
    });
