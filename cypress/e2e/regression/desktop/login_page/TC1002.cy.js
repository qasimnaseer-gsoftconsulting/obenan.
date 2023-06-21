
import { desktopLoginPageObjects } from "../../../../support/pageObjects";

describe('[TC1002]',()=>{
  let tc1002Data; // tc1002Data variable outside the hooks
  
  beforeEach(() => {
    // Runs before each test in the describe block
    cy.fixture('desktop/login_page/login_page.json').then((data) => {
      tc1002Data = data.regression[0].desktop[0].loginPage[0].TC1002[0];
    });
  });

    
    it('Title :  Login to Obenan by typing login credentials wrong and correct ',()=>{
    
      desktopLoginPageObjects.setViewPortForDesktop();
    
      //Step 1: Visit login page
      desktopLoginPageObjects.visitLoginPage();

      //Step 2 : Type username 
      desktopLoginPageObjects.setEmailAddress();
      
      //Step 3 : Type password
      desktopLoginPageObjects.setWrongPassword(tc1002Data.wrongPassword);

      //Step 4 : Cick on Sign in button
      desktopLoginPageObjects.signInButton().click();
      desktopLoginPageObjects.verifyIncorrectPasswordToastMsg(tc1002Data.passwordAlert);

      //Step 5 : Type username 
      desktopLoginPageObjects.verifyEmailField().clear();
      desktopLoginPageObjects.setWrongEmailAddress(tc1002Data.wrongUsername);
      
      //Step 6 : Type password
      desktopLoginPageObjects.verifyPasswordField().clear();
      desktopLoginPageObjects.setPasswrod();
      
      //Step 7 : Cick on Sign in button
      desktopLoginPageObjects.signInButton().click();
      desktopLoginPageObjects.verifyIncorrectEmailToastMsg(tc1002Data.usernameAlert);

      //Step 8 : Type username 
      desktopLoginPageObjects.verifyEmailField().clear();
      desktopLoginPageObjects.setWrongEmailAddress(tc1002Data.wrongUsername);
      
      //Step 9 : Type password
      desktopLoginPageObjects.verifyPasswordField().clear();
      desktopLoginPageObjects.setWrongPassword(tc1002Data.wrongPassword);
      
      //Step 10 : Cick on Sign in button
      desktopLoginPageObjects.signInButton().click();
      desktopLoginPageObjects.verifyIncorrectCredentialsToastMsg(tc1002Data.wrongCredentialAlert);

      //Step 11 : Type username 
      desktopLoginPageObjects.verifyEmailField().clear();
      desktopLoginPageObjects.setEmailAddress();
      
      //Step 12 : Type password
      desktopLoginPageObjects.verifyPasswordField().clear();
      desktopLoginPageObjects.setPasswrod();
      
      //Step 13 : Cick on Sign in button
      desktopLoginPageObjects.signInButton().click();
      desktopLoginPageObjects.verifyDashboard(tc1002Data.dashboardCheck);

    });
});