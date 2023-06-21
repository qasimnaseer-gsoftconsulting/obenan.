import { desktopLoginPageObjects } from "../../../../support/pageObjects";

describe('[TC1003]', () => {

  let tc1003Data; // tc1003Data variable outside the hooks

  beforeEach(() => {
    // Runs before each test in the describe block
    cy.fixture('desktop/login_page/login_page.json').then((data) => {
      tc1003Data = data.smoke[0].desktop[0].loginPage[0].TC1003[0];
    });
  });

  it('Title : Login to Obenan with correct credentials', () => {

    desktopLoginPageObjects.setViewPortForDesktop();

    //Step 1: Visit login page
    desktopLoginPageObjects.visitLoginPage();

    //Step 2 : Type username 
    desktopLoginPageObjects.setEmailAddress();

    //Step 3 : Type password
    desktopLoginPageObjects.setPasswrod();

    //Step 4 : Click on remember me checkbox
    desktopLoginPageObjects.rememberMeCheckbox().check('remember');

    //Step 5 : Cick on Sign in button
    desktopLoginPageObjects.signInButton().click();
    desktopLoginPageObjects.verifyDashboard(tc1003Data.dashboardCheck);//Assertion

  });
});