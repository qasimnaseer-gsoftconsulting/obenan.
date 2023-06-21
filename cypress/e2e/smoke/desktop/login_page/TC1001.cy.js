
import { desktopLoginPageObjects } from "../../../../support/pageObjects";

describe('[TC1001]', () => {
    let tc1001Data; // tc1001Data variable outside the hooks
  
    beforeEach(() => {
      // Runs before each test in the describe block
      cy.fixture('desktop/login_page/login_page.json').then((data) => {
        tc1001Data = data.smoke[0].desktop[0].loginPage[0].TC1001[0];
      });
    });
  
    it('Title : Verify availability of login page functionalities', () => {
  
      desktopLoginPageObjects.setViewPortForDesktop();

      //Step 1: Visit login page
      desktopLoginPageObjects.visitLoginPage();
      
      //Step 2: Verify logo of obenan
      desktopLoginPageObjects.verifyLoginPageLogo();
  
      //Step 3 : Verify Input fileds 
      desktopLoginPageObjects.verifyEmailField().click();
      desktopLoginPageObjects.verifyPasswordField().click();
  
      // Step 4 : Verify page headings 
      desktopLoginPageObjects.verifyPageHeading(tc1001Data.pageHeading);
  
      //Step 5 : Verify Sub-heading
      desktopLoginPageObjects.verifyPageSubHeading(tc1001Data.pageSubHeading);
  
      //Step 6 : Verify name of input fields
      desktopLoginPageObjects.verifyNameOfEmailField(tc1001Data.firstField);
      desktopLoginPageObjects.verifyNameOfPasswordField(tc1001Data.secondField);
  
      //Step 7 : Verify form helper text
      desktopLoginPageObjects.verifyEmailHelperText(tc1001Data.firstHelperText).click();
      desktopLoginPageObjects.verifyPasswordHelperText(tc1001Data.secondHelperText);
  
      //Step 8 : Verify checkbox and checkbox text
      desktopLoginPageObjects.rememberMeCheckbox().check('remember');
      desktopLoginPageObjects.verifyRememberMeCheckboxText(tc1001Data.checkBoxName);
       
      //Step 9 : Verify SignIn  button
      desktopLoginPageObjects.verifySignInButton(tc1001Data.buttonName).click();
     
      //Step 10 : Verify forget password link
      desktopLoginPageObjects.verifyForgetPasswordLink(tc1001Data.forgetLinkName);
       
      //Step 11 : Verify Sign up link
      desktopLoginPageObjects.verifySignUpLink(tc1001Data.signUpLinkName);
      
      //Step 12 : Verify availbility of query button
      desktopLoginPageObjects.verifyQueryButton();
  
      //Step 13 : Verify avilabilty of lanuage button
      desktopLoginPageObjects.defaultLanguage().should('exist').and('be.visible');
  
    });
  
  
  });