import { desktopLoginPageObjects } from "../../../../support/pageObjects";

describe('[TC1004]', () => {

  let tc1004Data; // tc1004Data variable outside the hooks

  beforeEach(() => {
    // Runs before each test in the describe block
    cy.fixture('desktop/login_page/login_page.json').then((data) => {
      tc1004Data = data.regression[0].desktop[0].loginPage[0].TC1004[0];
    });
  });

  it('Ttitle : Verify default language and changes after changing language', () => {

    desktopLoginPageObjects.setViewPortForDesktop();

    //Step 1: Visit login page
    desktopLoginPageObjects.visitLoginPage();

    //Step 2 : Check language button
    desktopLoginPageObjects.defaultLanguage();
    desktopLoginPageObjects.verifyPageHeading(tc1004Data.loginPageHeading);

    //Step 3 : Type username 
    desktopLoginPageObjects.setEmailAddress();

    //Step 4 : Type password
    desktopLoginPageObjects.setPasswrod();

    //Step 5 : Click on remember me checkbox
    desktopLoginPageObjects.rememberMeCheckbox().click();

    //Step 6 : Cick on Sign in button
    desktopLoginPageObjects.signInButton().click();
    desktopLoginPageObjects.verifyDashboard(tc1004Data.dashboardCheck);

    //Step 7 : logout to obenan
    desktopLoginPageObjects.logout();
    desktopLoginPageObjects.defaultLanguage();

    //Step 8 : Change language
    desktopLoginPageObjects.clickLanguageButton(tc1004Data.defaultLanguage);
    desktopLoginPageObjects.changeLanguage(tc1004Data.newLanguage);

    //Step 9 : Verify heading text
    desktopLoginPageObjects.verifyChangedHeadingInGerman(tc1004Data.newLoginPageHeading);


    //Step 10 : Type username 
    desktopLoginPageObjects.setEmailAddress();

    //Step 11 : Type password
    desktopLoginPageObjects.setPasswrod();

    //Step 12 : Click on remember me checkbox
    desktopLoginPageObjects.rememberMeCheckbox().check('remember');

    //Step 13 : Cick on Sign in button
    cy.contains(tc1004Data.newButtonName).click();

    //Step 14 : Verify the selected languge
    cy.contains(tc1004Data.newDashboardCheck).should('exist');

    //Step 15 : logout to obenan
    desktopLoginPageObjects.logoutInChangedLanguage();



    //================== Post condition steps ==================
    //Type username 
    desktopLoginPageObjects.setEmailAddress();
    //Type password
    desktopLoginPageObjects.setPasswrod();
    //Cick on Sign in button
    desktopLoginPageObjects.signInButton().click();
    // chang language english
    desktopLoginPageObjects.clickLanguageButton(tc1004Data.newLanguage);
    desktopLoginPageObjects.changeLanguage(tc1004Data.defaultLanguage);
    cy.wait(3000);
    //signout
    desktopLoginPageObjects.logout();

  });
});