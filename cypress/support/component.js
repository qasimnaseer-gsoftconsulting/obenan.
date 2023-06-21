
  // otherFile.js
import { popupButton } from './element';
import { verifyInputField } from './element';
import { clickButton } from './element';


  function verifyDefaultLanuage(lang){
    if(lang === "English"){
      cy.get("[aria-label='Languages']").should('be.visible');
      cy.xpath("//img[@alt='" + lang + "']")
      .should('have.attr', 'alt', lang);
    }
  }

  function verifyChangedLanuage(lang){
    if(lang === "German"){
      cy.get("[aria-label='Sprachen']").should('be.visible');
      cy.xpath("//img[@alt='" + lang + "']")
      .should('have.attr', 'alt', lang);
    }
  }

  function verifyDashboard(text){
    if(text === 'View Listings'){
      cy.url().should('eq', 'https://betaapp.obenan.com/');
      cy.xpath("//p[normalize-space()='"+text+"']")
      .should('be.visible')
      .contains(text);
    }else if(text === "Listings anzeigen"){
      cy.url().should('eq', 'https://betaapp.obenan.com/');
      cy.xpath("//p[normalize-space()='"+text+"']")
      .should('be.visible')
      .contains(text);
    }else{
      throw new Error(`Unknown button name: ${text}`);
    }

  }

  function logoutObenan(value) {
    switch (value) {
      case "Sign out":
        cy.xpath("//button[@aria-label='Account']").click();
        cy.xpath("//li[normalize-space()='Sign out']").click();
        cy.popupButton('Confirm').click();
        break;
      case "logout":
        cy.xpath("//button[@aria-label='Konto']").click();
        cy.xpath("//li[normalize-space()='Abmelden']").click();
        cy.popupButton('Bestätigen Sie').click();
        break;
      default:
        throw new Error(`Unknown button name: ${value}`);
        break;
    }
  }
  

  // Change language
  function changeLanguage(lang){
    switch (lang) {
      case "German":
        cy.xpath("//button[@aria-label='Languages']").click();
        cy.xpath("//li[normalize-space()='"+lang+"']").click();
        cy.xpath("//img[@alt='"+lang+"']").should('have.attr','alt',lang);
        break;
      case "English":
        cy.xpath("//button[@aria-label='Sprachen']").click();
        cy.xpath("//li[normalize-space()='"+lang+"']").click();
        cy.xpath("//img[@alt='"+lang+"']").should('have.attr','alt',lang);
        break;
    
      default:
        break;
    }

  }

  //login to obenan
  function loginObenan(email,password){
      //Step 2 : login to obenan with provided credentails
       cy.verifyInputField('email').type(email);
       cy.verifyInputField('password').type(password);
       
       //Step 3 : Click on sign in button 
       cy.clickButton('Sign in');
  }


  //for file upload image
  function clickUploadImage(images) {
    cy.get('[data-testid="AddAPhotoOutlinedIcon"]').click();
    cy.get("#file").attachFile(images);
  }
  
  //for check image uploaded
  function checkImageUploaded(img) {
    cy.xpath("//p[contains(text(),'"+img+"')]");
  }
  

  //verify image error
  function verifyImageError(expectedCount,msg) {
    cy.xpath('//p[starts-with(normalize-space(), "'+msg+'")]').should('have.length', expectedCount);
  }
  
  
  //Verify image success message  
  function verifyImageSuccess(expectedCount,msg) {
    cy.wait(8000);
    cy.xpath('//p[starts-with(normalize-space(), "'+msg+'")]').should('have.length', expectedCount);
  }


  //for verify popup title
function verifyPopupTitle(title) {
  cy.get('#alert-dialog-slide-title').contains(title).should('be.visible');
}

  //verify location tagsclickUploadImage
  function verifyLocationTags(tags) {
    tags.forEach((tag) => {
      cy.xpath("//span[normalize-space()='" + tag + "']").should('be.visible');
    });
  }
  

  Cypress.Commands.add('openLoginPage', () => {
    cy.visit('https://betaapp.obenan.com');
  });

  module.exports = {
    verifyDefaultLanuage,
    verifyDashboard,
    logoutObenan,
    changeLanguage,
    verifyChangedLanuage,
    loginObenan,
    clickUploadImage,
    checkImageUploaded,
    verifyImageError,
    verifyLocationTags,
    verifyImageSuccess,
    verifyPopupTitle
  }