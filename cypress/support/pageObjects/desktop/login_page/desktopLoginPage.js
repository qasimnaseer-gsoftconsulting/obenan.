/// <reference types="Cypress" />

//env credentials
const baseURL = Cypress.env('baseURL');
const email = Cypress.env('email');
const password = Cypress.env('password');

//Selectors
const emailField = '//input[@name="email"]';
const passwordField = '//input[@name="password"]';
const signInBtn = '//button[normalize-space()="Sign in"]';
const logoLoginPage = "//img[@alt='logo']";
const defaultLang = 'img[alt="English"]';
const pageHeading = "//h1[normalize-space()='Welcome back !']";
const pageSubHeading = "//h2[normalize-space()='Sign in to your account to continue']";
const nameOfEmailField = "#mui-2-label";
const nameOfPasswordField = "#mui-3-label";
const emailFieldHelperText = '#mui-2-helper-text';
const passwordFieldHelperText = '#mui-3-helper-text';
const rmemberCheckbox = "[type='checkbox']";
const rememberCheckboxText = "//span[contains(text(),'Remember me')]";
const forgetPswrdLink = "//a[normalize-space()='Forgot password']";
const forgetPswrdLinkRoute = "[href='/auth/reset-password']";
const signUpLink = '[href="/auth/sign-up"]';
const queryButton = '.videoask-embed__button--SgLKO';
const IncorrectPasswordToast = "//div[@role='alert']//div[contains(text(),'Incorrect password')]";
const IncorrectEmailToast = "//div[@role='alert']//div[contains(text(),'No active user with this email')]";
const IncorrectCredentialToast = "//div[@role='alert']//div[contains(text(),'No active user with this email')]";
const dashboardCheck = "//p[normalize-space()='View Listings']";
const accountIconDefault = "//button[@aria-label='Account']"; //logout(), 
const signoutLink = "//li[normalize-space()='Sign out']"; //logout(), 
const signoutPopupConfirm = "//button[normalize-space()='Confirm']"; //logout(), 
const accountIconGerman = "//button[@aria-label='Konto']"; //logoutInChangedLanguage()
const signoutLinkGerman = "//li[normalize-space()='Abmelden']"; //logoutInChangedLanguage()
const signoutPopupConfirmGerman = "//button[normalize-space()='Bestätigen Sie']"; //logoutInChangedLanguage()
//const changeLanguage = "//li[normalize-space()='"+lang+"']"; //changeLanguage()
//const germanLangImg = "//img[@alt='"+lang+"']"; //changLanguage() , clickLanguageButton()

class desktopLoginPageObject {

    //visit login page
    visitLoginPage() {
        cy.visit(baseURL);
        cy.url().should('contains', baseURL + 'auth/sign-in');
    }

    //set desktop viewport
    setViewPortForDesktop() {
        cy.viewport(1550, 960, 'landscape');
    }

    //Verify email filed
    verifyEmailField() {
        return cy.xpath(emailField).should('be.visible');
    }

    //Verify password field
    verifyPasswordField() {
        return cy.xpath(passwordField).should('be.visible');
    }

    //Verify page heading
    verifyPageHeading(heading) {
        cy.xpath(pageHeading).should('contain', heading);
    }

    //verify page sub heading
    verifyPageSubHeading(heading) {
        cy.xpath(pageSubHeading).should('contain', heading);
    }

    //verify name of email field
    verifyNameOfEmailField(name) {
        cy.get(nameOfEmailField).should('contain', name);
    }

    //Verify name of password field
    verifyNameOfPasswordField(name) {
        cy.get(nameOfPasswordField).should('contain', name);
    }

    //verify email field helper text
    verifyEmailHelperText(text) {
        return cy.get(emailFieldHelperText).should('contain', text);
    }

    //verify password field helper text
    verifyPasswordHelperText(text) {
        return cy.get(passwordFieldHelperText).should('contain', text);
    }

    //checkbox checked
    rememberMeCheckbox() {
        return cy.get(rmemberCheckbox);
    }

    //verify remember me checkbox name
    verifyRememberMeCheckboxText(text) {
        cy.xpath(rememberCheckboxText).should('contain', text);
    }

    //Verify sign in button
    verifySignInButton(name) {
        return cy.xpath(signInBtn).should('contain', name);
    }

    //Verify forget password link
    verifyForgetPasswordLink(link) {
        function forgetPasswordLink() {
            cy.xpath(forgetPswrdLink).should('contain', link);
            cy.get(forgetPswrdLinkRoute).should('contain', link);
        }
        return forgetPasswordLink();
    }

    //Verify sign up link
    verifySignUpLink(link) {
        return cy.get(signUpLink).should('contain', link);
    }

    //Verify availability of query button
    verifyQueryButton() {
        return cy.get(queryButton).should('be.visible');
    }

    //Verify incorrect password toast message
    verifyIncorrectPasswordToastMsg(message) {
        cy.xpath(IncorrectPasswordToast).should('be.visible').should('contain', message);
    }

    //Verify incorrect email toast message
    verifyIncorrectEmailToastMsg(message) {
        cy.xpath(IncorrectEmailToast).should('be.visible').should('contain', message);
    }

    //verify incorrect email and password toast
    verifyIncorrectCredentialsToastMsg(message) {
        cy.xpath(IncorrectCredentialToast).should('be.visible').should('contain', message);
    }

    //type in email field
    setEmailAddress() {
        cy.xpath(emailField).type(email);
    }

    //type wrong email
    setWrongEmailAddress(wrongEmail) {
        cy.xpath(emailField).type(wrongEmail);
    }

    //type in password field
    setPasswrod() {
        cy.xpath(passwordField).type(password);
    }

    //type wrong password
    setWrongPassword(wrongPassword) {
        cy.xpath(passwordField).type(wrongPassword);
    }

    //for sign in button
    signInButton() {
        return cy.xpath(signInBtn);
    }

    //for logo
    verifyLoginPageLogo() {
        cy.xpath(logoLoginPage).should('be.visible');
    }
    //for language button
    defaultLanguage() {
        return cy.get(defaultLang).should('be.visible');
    }

    //verify dashboard by checking landing page heading and page url
    verifyDashboard(text) {
        cy.xpath(dashboardCheck)
            .should('be.visible')
            .contains(text || 'View Listings');
    }

    //logout to obenan
    logout() {
        cy.xpath(accountIconDefault).click();
        cy.xpath(signoutLink).click();
        cy.xpath(signoutPopupConfirm).click();
    }

    //logout after changing language
    logoutInChangedLanguage(lang) {
        cy.xpath(accountIconGerman).click();
        cy.xpath(signoutLinkGerman).click();
        cy.xpath(signoutPopupConfirmGerman).click();
    }

    //for click on language button
    clickLanguageButton(lang){
        if (lang === 'German' || lang === 'English') {
            return cy.xpath("//img[@alt='"+lang+"']").click();
        } else {
            throw new Error('Unsupported language: ' + lang);
        }
    }

    //Change Language to german or english
    changeLanguage(lang){
        if (lang === 'German' || lang === 'English') {
            cy.xpath("//li[normalize-space()='" + lang + "']").click();
            cy.xpath("//img[@alt='" + lang + "']").should('have.attr', 'alt', lang);
          } else {
            throw new Error('Unsupported language: ' + lang);
        }
    }

    //verify page heading in german
    verifyChangedHeadingInGerman(heading){
        cy.contains(heading).should('exist').should('be.visible');
    }
}


export default desktopLoginPageObject;

