
import { autoGooglePosts } from "../../../../../support/pageObjects";

describe('[TC1006]', () => {

    let tc1006Data; // tc1006Data variable outside the hooks

    beforeEach(() => {
      // Runs before each test in the describe block
      cy.fixture('desktop/post-managment/auto_google_post.json').then((data) => {
        tc1006Data = data.regression[0].desktop[0].TC1006[0];
      });
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
        autoGooglePosts.loginForGoogleAutoPost();

        //Step 8 : click on create post button
        autoGooglePosts.clickCreatePostButton();

        //Step 9 : upload image according to sample data
        autoGooglePosts.postCreationUploadImage(ImagesPath+tc1006Data.lessHeightJPG);
        autoGooglePosts.checkImageUploadedNameOnPopup(tc1006Data.lessHeightJPG);
        autoGooglePosts.postCreationPopupUploadBtn().should('have.attr', 'disabled');

        //Step 11 : Verify image error message
        autoGooglePosts.imageUploadErrorMsg().should('be.visible').should('have.length',1);


        //Step 12 : Verify prompt title
        autoGooglePosts.postCreationVerifyPopupTitle(tc1006Data.popupTitle);
        
        //Step 13 : Verify image appear in prompt
        autoGooglePosts.verifyImageDisplayingOnPopup(tc1006Data.lessHeightJPG);
        
        //Step 14 : Click on delete button
        autoGooglePosts.imageDeleteButtonAtUploadPopup(tc1006Data.lessHeightJPG).click();
        autoGooglePosts.postCreationVerifyPopupTitle(tc1006Data.popupTitle);

        //Step 15 : upload image according to sample data
        autoGooglePosts.postCreationUploadImage(ImagesPath+tc1006Data.lessHeightJPG);
        autoGooglePosts.checkImageUploadedNameOnPopup(tc1006Data.lessHeightJPG);

        //Step 16 : Verify image error message
        autoGooglePosts.imageUploadErrorMsg().should('be.visible').should('have.length',1);

        //Step 17 : verify delete button is available
        autoGooglePosts.imageDeleteButtonAtUploadPopup(tc1006Data.lessHeightJPG).should('be.visible');

        //Step 18 : verify upload button is disabled
        autoGooglePosts.postCreationPopupUploadBtn().should('have.attr', 'disabled');

        //Step 19 : click on cancel button
        autoGooglePosts.postCreationPopupCancelButton().click();

        //Step 20 : click on create post button
        autoGooglePosts.clickCreatePostButton();

        //Step 21 : upload image according to sample data
        autoGooglePosts.postCreationUploadImage(ImagesPath+tc1006Data.lessHeightJPG);
        autoGooglePosts.checkImageUploadedNameOnPopup(tc1006Data.lessHeightJPG);

        //Step 22 : Verify image error message
        autoGooglePosts.imageUploadErrorMsg().should('be.visible').should('have.length',1);

        //Step 23 : verify delete button is available
        autoGooglePosts.imageDeleteButtonAtUploadPopup(tc1006Data.lessHeightJPG).should('exist').should('be.visible');
       
        //Step 24 : verify upload button is disabled
        autoGooglePosts.postCreationPopupUploadBtn().should('have.attr','disabled');

        //Step 25 : Click cross icon
        autoGooglePosts.popupCrossIcon().should('be.visible').click();

        //Step 26 : click on create post button
        autoGooglePosts.clickCreatePostButton();

        //Step 27 : upload image according to sample data
        autoGooglePosts.postCreationUploadImage(ImagesPath+tc1006Data.accurateSpecsImage);
        autoGooglePosts.postCreationPopupUploadBtn().click();
        autoGooglePosts.imageUploadeSuccessMsg().should('be.visible').should('have.length',1);
        autoGooglePosts.popupSubmitButton().click();
        autoGooglePosts.imageAvailableInForm().should('exist').should('be.visible');
            
        //Step 28 : select location according to sample data
        autoGooglePosts.postCreationFormLocationField().type(tc1006Data.locationExactMatch)
        autoGooglePosts.locationOption().should('be.visible',tc1006Data.locationExactMatch).click();
        autoGooglePosts.postCreationFormLocationField().click();

        //Step 29 : select date time
        autoGooglePosts.currentDateTimeBtn().click();
        autoGooglePosts.currentDateTimePlusFiveMint();

        //Step 30 : write discription in discription field 
        autoGooglePosts.postCreationFormDiscriptionFieldType();

        //Step 31 : click on publish post
        autoGooglePosts.publishPostButton().click();
        autoGooglePosts.postPublishSuccessToast().should('be.visible');
        cy.wait(3000);
        //pre condition cron job network call
        autoGooglePosts.postCreationCronJobNetworkCall();

        //Step 32 : verify image in created post
        autoGooglePosts.postContainerImage().should('exist').should('be.visible');
        autoGooglePosts.postContainerPostStatus().should('exist').should('be.visible');
        


        /* ================================ Post Condition =========================== */

        //Step 33 : Click on more button
        autoGooglePosts.postContainerMoreButton().click();

        //Step 34 : Click on delete button
        autoGooglePosts.postContainerDeleteButton().click();

        //Step 35 : Click on confirm button
        autoGooglePosts.postContainerPopupConfirmBtn().click();
        autoGooglePosts.postDeletedToastMsg().should('be.visible');
        
    });


});