
import { autoGooglePosts } from "../../../../../support/pageObjects";
describe('[TC1009]',()=>{
    let tc1009Data; // tc1009Data variable outside the hooks

    beforeEach(() => {
      // Runs before each test in the describe block
      cy.fixture('desktop/post-managment/auto_google_post.json').then((data) => {
        tc1009Data = data.regression[0].desktop[0].TC1009[0];
      });
    })
    it('Post Creation(Check svg and gif images upload fail fail message at 3rd popup of uploading images, delete images, images in post form and after creation of post)',()=>{
        
        let ImagesPath = './images/';
        cy.clearAllCookies();
        //Step 1 : Visit login page
        //Step 2 : Type email 
        //Step 3 : Type password
        //Step 4 : click on remeber me checkbox 
        //Step 5 : click on sign in button
        //Step 6 : click on post managment sidebar link
        //Step 7 : click on auto google post dropdown link
        autoGooglePosts.loginForGoogleAutoPost();

        //Step 8 : click on create post button
        autoGooglePosts.clickCreatePostButton();
        //Step 9 : upload 4 images according to sample data
        const images = [
            ImagesPath+tc1009Data.lessWidthGif,
            ImagesPath+tc1009Data.lessHeightGif,
            ImagesPath+tc1009Data.accurateSpecsGif,
            ImagesPath+tc1009Data.lessWidthSvg,
            ImagesPath+tc1009Data.lessHeightSvg,
            ImagesPath+tc1009Data.accurateSpecsSvg,
            ImagesPath+tc1009Data.accurateSpecsJpg,
            ImagesPath+tc1009Data.accurateSpecsPng
        ];
        autoGooglePosts.postCreationUploadImage(images);
        //Step 10 : Verify error message
        autoGooglePosts.imageUploadErrorMsg().should(($element)=>{
            expect($element).to.have.length(4);
            expect($element.filter(':visible')).to.have.length(4);
        })

        //Step 11 : Verify upload button disability
        autoGooglePosts.postCreationPopupUploadBtn().should('have.attr', 'disabled');
       
        //Step 12 : Delete images which related to error
        cy.wait(3000);
        autoGooglePosts.imageDeleteButtonAtUploadPopup(tc1009Data.lessWidthSvg).click();
        autoGooglePosts.imageDeleteButtonAtUploadPopup(tc1009Data.lessHeightSvg).click();
        autoGooglePosts.imageDeleteButtonAtUploadPopup(tc1009Data.lessWidthGif).click();
        autoGooglePosts.imageDeleteButtonAtUploadPopup(tc1009Data.lessHeightGif).click();

        //Step 13 : verify upload button is enabled and click on that
        autoGooglePosts.postCreationPopupUploadBtn().should('not.have.attr', 'disabled');//Assertion
        autoGooglePosts.postCreationPopupUploadBtn().click();

        //Step 14 : verify image upload success message according to sample data
        autoGooglePosts.imageUploadeSuccessMsg().should(($element)=>{
            expect($element).to.have.length(2);
            expect($element.filter(':visible')).to.have.length(2);
        });

        //Step 15 : Verify svg and gif images are failed to upload
        autoGooglePosts.imageUploadFailedErrorMsg().should(($element)=>{
            expect($element).to.have.length(2);
            expect($element.filter(':visible')).to.have.length(2);
        });

        //Step 16 : click on cancel button
        autoGooglePosts.postCreationPopupCancelButton().eq(0).should('exist').and('be.visible').click({force:true});

        //Step 17 : click on create post button
        autoGooglePosts.clickCreatePostButton();

        //Step 18 : upload image according to sample data
        autoGooglePosts.postCreationUploadImage(ImagesPath+tc1009Data.accurateSpecsJpg);
        
        //Step 19 : Click on upload button
        autoGooglePosts.postCreationPopupUploadBtn().click();

        //Step 20 : Click on submit button
        autoGooglePosts.popupSubmitButton().click();
       
        //Step 21 : add location in first form according to sample data 
        autoGooglePosts.postCreationFormLocationField().type(tc1009Data.locationExactMatch);
        autoGooglePosts.locationOption().should('be.visible',tc1009Data.locationExactMatch).click();
        autoGooglePosts.postCreationFormLocationField().click();

        //Step 22 : click on current date and time button
        autoGooglePosts.currentDateTimeBtn().click();
        
        //Step 23 : write discription in discription field 
        autoGooglePosts.postCreationFormDiscriptionFieldType();

        //Step 24 : click on publish post
        autoGooglePosts.publishPostButton().click();

        //Step 25 : verify post creation toast msg
        autoGooglePosts.postPublishSuccessToast().should('be.visible');
        
        //Step 26 : verify image in created post
        autoGooglePosts.postContainerImage().eq(0).should('be.visible');
        autoGooglePosts.postContainerPostStatusHaveNotPosted().eq(0).should('exist').and('be.visible').and('have.text', "Haven't Posted Yet");

       
        // ================================ Post Condition =========================== 

        //Step 27 : Click on more button
        autoGooglePosts.postContainerMoreButton().eq(0).should('exist').and('be.visible').click();
       
        //Step 28 : Click on delete button
        autoGooglePosts.postContainerDeleteButton().should('exist').and('be.visible').click();

        //Step 29 : Click on confirm button
        autoGooglePosts.postContainerPopupConfirmBtn().should('be.visible').click();
        autoGooglePosts.postDeletedToastMsg().should('be.visible');

    })
})