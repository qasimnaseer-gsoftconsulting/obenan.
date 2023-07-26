
import { autoGooglePosts } from "../../support/pageObjects/index";

describe('[TC1009env]', () => {

    beforeEach(() => {
      cy.loginForDesktop();
    });

    it('Post Creation(Check upload button disabllity when image upload with less height specs on 2nd prompt,image error message,delete image button, prompt title and closing 2nd prompt by cross and cancel button)', () => {
        
        let ImagesPath = "./images/";
        //Step 1 : Visit login page
        //Step 2 : Type email 
        //Step 3 : Type password
        //Step 4 : click on remeber me checkbox 
        //Step 5 : Click on sign in button
        //Step 6 : click on post managment sidebar link
        //Step 7 : click on auto google post dropdown link
        cy.visit(Cypress.env('baseURL'));
        autoGooglePosts.sidebarClickPostManagement();
        autoGooglePosts.sidebarClickAutoGooglePost();
        autoGooglePosts.verifyGoogleAutoPostPage();
        //Step 8 : click on create post button
        autoGooglePosts.clickCreatePostButton();
    });


});