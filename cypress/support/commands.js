/// <refrence types="cypress"/>
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

//for cypress xpath plugin
import 'cypress-xpath';
//for file upload
import 'cypress-file-upload';

// //Home page of pedlar store
// const { visitHomePage } = require('../support/utils');
// Cypress.Commands.add('visitHomePage', visitHomePage);

// // For verify title and products on Products page 
// const { verifyProductsPage } = require('../support/utils');
// Cypress.Commands.add('verifyProductsPage', verifyProductsPage);

/*======================  Elements ===========================*/
// Landing page popup button
// const {landingPopupButton} = require('../support/element');
// Cypress.Commands.add('landingPopupButton', landingPopupButton);

// // homepage popup button we can access by passing cy.homePageButton(name)
// const {clickButton} = require('../support/element');
// Cypress.Commands.add('clickButton', clickButton);

// // this is for navbar dropdown button 
// const {navbarDropdown} = require('../support/element');
// Cypress.Commands.add('navbarDropdown', navbarDropdown);

// // this is for navbar dropdown item
// const {navbarDropdownItem} = require('../support/element');
// Cypress.Commands.add('navbarDropdownItem', navbarDropdownItem);

// // this is for filter brands product
// const {filterClick} = require('../support/element');
// Cypress.Commands.add('filterClick', filterClick);


const elementMethods = require('./element');
const utilsMethods = require('./component');

// Add all element methods as Cypress commands we can access these commands in any file which is
// present in e2e or any other sub folder
for (const methodName in elementMethods) {
  Cypress.Commands.add(methodName, elementMethods[methodName]);
}

for (const methodName in utilsMethods) {
    Cypress.Commands.add(methodName, utilsMethods[methodName]);
}









