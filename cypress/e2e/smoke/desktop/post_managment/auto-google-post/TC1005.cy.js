import { autoGooglePosts } from "../../../../../support/pageObjects";

describe('[TC1005]', () => {

    let tc1005Data; // tc1005Data variable outside the hooks

    beforeEach(() => {
      // Runs before each test in the describe block
      cy.fixture('desktop/post-managment/auto_google_post.json').then((data) => {
        tc1005Data = data.smoke[0].desktop[0].TC1005[0];
      });
    });

    it('Title : Post Creation(Create a post according to sample data )', () => {
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

        //Step 9 : Verify dialog box title
        autoGooglePosts.postCreationVerifyPopupTitle(tc1005Data.popupTitle);

        //Step 10 : upload image according to sample data
        autoGooglePosts.postCreationUploadImage(ImagesPath + tc1005Data.accurateSpecsImage);
        autoGooglePosts.checkImageUploadedNameOnPopup(tc1005Data.accurateSpecsImage);
        autoGooglePosts.verifyImageDisplayingOnPopup(tc1005Data.accurateSpecsImage);//Assertion
        autoGooglePosts.postCreationPopupUploadBtn().should('be.visible').should('exist');//Assertion
        
        //Step 11 : click on upload button
        autoGooglePosts.postCreationPopupUploadBtn().click();
        autoGooglePosts.imageUploadeSuccessMsg().should('exist').should('have.length',1);//Assertion
        autoGooglePosts.verifyImageDisplayingOnPopup(tc1005Data.accurateSpecsImage);//Assertion
       
   
        //Step 12 : Click on submit button
        autoGooglePosts.popupSubmitButton().click();
        autoGooglePosts.imageAvailableInForm().should('exist').should('be.visible').should('have.length',1);
       
        //Step 13 : select location according to sample data
        autoGooglePosts.postCreationFormLocationField().type(tc1005Data.locationExactMatch);
        autoGooglePosts.locationOption().should('be.visible',tc1005Data.locationExactMatch).click();
        autoGooglePosts.postCreationFormLocationField().click();

        //Step 14 : select crunnent date time
        autoGooglePosts.currentDateTimeBtn().click();
        autoGooglePosts.googleBusinessPostCheckBoxText().click();
        autoGooglePosts.currentDateTimePlusFiveMint(); //Need for instant Post
        
        //Step 15 : write discription in discription field 
        autoGooglePosts.postCreationFormDiscriptionFieldType();
 
        //Ste 16 : Click on publish button
        autoGooglePosts.publishPostButton().click();
        autoGooglePosts.postPublishSuccessToast().should('be.visible');
        cy.wait(3000);
        autoGooglePosts.postCreationCronJobNetworkCall();
        
          
        //Step 17 : verify image in created post
        autoGooglePosts.postContainerImage().should('exist').should('be.visible');
        autoGooglePosts.postContainerPostStatus().should('exist').should('be.visible');
        autoGooglePosts.postContainerImage().should('exist').should('be.visible');
     
        // ================================ Post Condition =========================== 
        //Step 18 : Click on more button
        autoGooglePosts.postContainerMoreButton().should('be.visible').click();

        //Step 19 : Click on delete button
        autoGooglePosts.postContainerDeleteButton().should('be.visible').click();

        //Step 20 : Click on confirm button
        autoGooglePosts.postContainerPopupConfirmBtn().should('be.visible').click();
      
    });


});