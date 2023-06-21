import { autoGooglePosts } from "../../../../../support/pageObjects";

describe('[TC1010]',()=>{
    let tc1010Data; // tc1009Data variable outside the hooks

    beforeEach(() => {
      // Runs before each test in the describe block
      cy.fixture('desktop/post-managment/auto_google_post.json').then((data) => {
        tc1010Data = data.regression[0].desktop[0].TC1010[0];
      });
    })

    it('Post Creation(Check we are able to upload and submit images in form after deletion of images from 2nd popup which is for uploading images)',()=>{
        
        const ImagesPath = './images/';

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

        // Step 9: Upload a zip file of images according to sample data
        // Step 10: Upload .tiff image file according to sample data
        const supportedFormats = ['.jpg', '.png', '.bmp'];
        const filePath = [ImagesPath + tc1010Data.zipFile, ImagesPath + tc1010Data.pdfFile];
        
        if (supportedFormats.some((format) => filePath.some(file => file.endsWith(format)))) {
        cy.get('[data-testid="AddAPhotoOutlinedIcon"]').dblclick();
        cy.get('input[type="file"]').attachFile(filePath, { subjectType: 'input' });
        // Perform some assertions
        filePath.forEach(file => {
            supportedFormats.forEach(format => {
            expect(file.endsWith(format)).to.be.true;
            });
        });
        } else {
        // Handle the unsupported file format
        cy.log('Unsupported file format');
        // Perform assertions or further actions for unsupported file format
        // ...
        }

        // Step 11: Upload images according to sample data
        autoGooglePosts.popupCrossIcon().click({force : true});
        autoGooglePosts.clickCreatePostButton();
        const Images = [
            ImagesPath+tc1010Data.less_heightJPG,
            ImagesPath+tc1010Data.less_widthJPG,
            ImagesPath+tc1010Data.less_height_widthJPG,
            ImagesPath+tc1010Data.less_heightPng,
            ImagesPath+tc1010Data.less_widthPng,
            ImagesPath+tc1010Data.less_height_widthPng,

        ];
        
        autoGooglePosts.postCreationUploadImage(Images);

        //Step 12 : verify error messages and disabllity of upload button
        autoGooglePosts.imageUploadErrorMsg().should(($element)=>{
            expect($element).to.have.length(6);
            expect($element.filter(':visible')).to.have.length(6);
        })

        //Step 13 : delete all images 
        autoGooglePosts.deleteAllUploadedImagesFromUploadPopup(Images);
        
        //Step 14 : upload images according to sample data
        const accurateImages = [
            ImagesPath+tc1010Data.accurateSpecsImageJPG,
            ImagesPath+tc1010Data.accurateSpecsImagePNG
        ];
        autoGooglePosts.postCreationUploadImage(accurateImages);

        //Step 15 : click on upload button
        autoGooglePosts.postCreationPopupUploadBtn().click();

        //Step 16 : Verify upload image success message
        autoGooglePosts.imageUploadeSuccessMsg().should(($element)=>{
            expect($element).to.have.length(2);
            expect($element.filter(':visible')).to.have.length(2);
        });

        //Step 17 : click on submit button
        autoGooglePosts.popupSubmitButton().should('exist').and('be.visible').click();

        //Step 18 : verify images are displayed
        autoGooglePosts.imageAvailableInForm().eq(0).should('exist').should('be.visible');//Assertion
        autoGooglePosts.imageAvailableInForm().eq(1).should('exist').should('be.visible');//Assertion

        //Step 19 : add location in forms according to sample data 
        autoGooglePosts.postCreationFormLocationField().eq(0).type(tc1010Data.locationExactMatch);
        autoGooglePosts.locationOption().should('be.visible',tc1010Data.locationExactMatch).click();
        autoGooglePosts.postCreationFormLocationField().eq(0).click();

        autoGooglePosts.postCreationFormLocationField().eq(1).type(tc1010Data.locationExactMatch);
        autoGooglePosts.locationOption().should('be.visible',tc1010Data.locationExactMatch).click();
        autoGooglePosts.postCreationFormLocationField().eq(1).click();

        //Step 20 : click on current date and time button
        autoGooglePosts.postCreationDateTimeField().eq(0).type(autoGooglePosts.postCreationTypeCurrentDateTime());
        autoGooglePosts.postCreationDateTimeField().eq(0).type(autoGooglePosts.postCreationTypeCurrentDateTime());

        //Step 21 : Enter discription
        autoGooglePosts.postCreationPostDiscriptionField().eq(0).type(autoGooglePosts.postCreationFormDiscriptionFieldType());
        autoGooglePosts.postCreationPostDiscriptionField().eq(1).type(autoGooglePosts.postCreationFormDiscriptionFieldType());

        //Step 22 : click on publish post
        autoGooglePosts.publishPostButton().click();
        autoGooglePosts.postPublishSuccessToast().should('be.visible');
        cy.wait(3000);

        //Step 23 : verify image in created posts
        autoGooglePosts.postContainerImage().eq(0).should('exist').and('be.visible');
        autoGooglePosts.postContainerImage().eq(1).should('exist').and('be.visible');
    });
});