




function popupButton(name) {
    switch (name) {
      case 'Confirm':
      case 'Bestätigen Sie':
      case 'Upload':
        cy.xpath("//button[normalize-space()='" + name + "']");
        break;
      case 'Cancel':
        cy.xpath("//div[@role='dialog']//button[normalize-space()='"+name+"']");
        break;
      case 'Submit':
        cy.xpath("//button[normalize-space()='" + name + "']");
        break;
      case 'Close':
        cy.xpath("//button[normalize-space()='X']");
        break;
      case 'Confirm':
        cy.xpath("//button[normalize-space()='"+name+"']");
        break;
      default:
        throw new Error(`Unknown button name: ${name}`);
    }
  }
  
  




function verifyDashboard(text){
    cy.url().should('eq', 'https://betaapp.obenan.com/');
    cy.xpath("//p[normalize-space()='"+text+"']")
    .should('be.visible')
    .contains(text);
  }


//for common buttons
// function clickButton(name) {
//     if(name == 'Eintragen') {
//       cy.xpath('//button[normalize-space()="'+name+'"]').click();
//     } else if (name == 'Sign in') {
//       cy.xpath('//button[normalize-space()="'+name+'"]').click();
//     } else if(name == 'Create Post'){
//         cy.xpath("//button[normalize-space()='"+name+"']").click();
//     }else if(name == 'delete image'){
//         cy.get("[aria-label='delete']").click();
//     }
//     else{
//         throw new Error(`Unknown button name: ${name}`);
//     }
//   }

function clickButton(name) {
    switch (name) {
      case 'Eintragen':
      case 'Sign in':
      case 'Create Post':
        cy.xpath('//button[normalize-space()="' + name + '"]').click();
        break;
      case 'delete image':
        cy.get("[aria-label='delete']").click();
        break;
      case 'delete post':
        cy.xpath("//button[@aria-label='delete']//*[name()='svg']");
        break;
      case 'Choose date':
        cy.xpath("//button[@aria-label='"+name+"']").click();
        break;
      case "Switch year":
        cy.xpath("//button[@aria-label='calendar view is open, switch to year view']").click();
        break;
      case "2024" :
      case "2023" : 
        cy.xpath("//button[normalize-space()='"+name+"']").click();
        break;
      case "2022" : 
        cy.xpath("//button[normalize-space()='"+name+"']");
        break;
      case "Next month":
        cy.xpath("//button[@title='Next month']").click();
        break;
      case "current_dateTime":
        cy.xpath("//button[@class='sc-hKwDye hcgaRp MuiButtonBase-root sc-eCImPb dxbdam MuiIconButton-root MuiIconButton-sizeLarge']//*[name()='svg']").click()
      break;
      case "Cancel":
      case "Publish":
        cy.xpath('//button[normalize-space()="'+name+'"]');
        break;
      case "Add Post":
        cy.xpath("//button[normalize-space()='"+name+"']").click();
        break;
      case "button_ai_content":
        cy.xpath("//button[@aria-label='Write post with A.I']").click();
        break;
        default:
        throw new Error(`Unknown button name: ${name}`);
    }
  }

//for verifying post elments and text
function postContainer(discription,element){
    switch (element) {
        case "image":
            cy.xpath("//p[normalize-space()='"+discription+"']/parent::div/parent::div/parent::div/child::div[2]/span/img")
            break;
        case "more":
            cy.xpath("//p[normalize-space()='"+discription+"']/parent::div/parent::div/parent::div/parent::div//button");
            break;
        case "Posted":
            cy.xpath("//p[normalize-space()='"+discription+"']/parent::div/parent::div//span[normalize-space()='"+element+"']"); 
            break;
        case "Location":
            cy.xpath("//p[normalize-space()='"+discription+"']/parent::div/child::div[2]/child::div/child::div/p[contains(text(),'"+element+"')]");
            break;
        case "Single":
            cy.xpath("//p[normalize-space()='"+discription+"']/parent::div/child::div[2]/child::div/child::div/p/span[contains(text(),'"+element+"')]");
            break;
        case "No Repeat":
            cy.xpath("//p[normalize-space()='"+discription+"']/parent::div/child::div[2]/child::div/child::div/span[contains(text(),'"+element+"')]")
            break;
        case "Google My CTA: Call Now":
            cy.xpath("//p[normalize-space()='"+discription+"']/parent::div/child::div[2]/child::div/child::div/p[contains(text(),'"+element+"')]")
            break;
        default:
            break;
    }
}

//for verifying most common button
function verifyButton(name) {
    switch (name) {
        case 'Edit':
            cy.xpath("//ul[@role='menu']//li[normalize-space()='"+name+"']");
            break;
        case "Delete":
            cy.xpath("//ul[@role='menu']//li[normalize-space()='"+name+"']");
            break;
        case "Logs":
            cy.xpath("//ul[@role='menu']//li[normalize-space()='"+name+"']");
            break;
        case "Add Post":
            cy.xpath("//button[normalize-space()='Add Post']");
            break;
        default:
            break;
    }
}

// for verify logo 
function verifyLogo(name){
    switch (name) {
        case 'loginPageLogo':
            return cy.xpath('//img[@alt="logo"]');
            break;
    
        default:
            break;
    }
}

// for verify input fields
function verifyInputField(name){
    switch (name) {
        case 'email':
            cy.xpath('//input[@name="' + name + '"]')
            break;
        case 'password':
            cy.xpath('//input[@name="' + name + '"]')
            break;

        case 'E-Mail':
            cy.xpath('//input[@name="' + name + '"]')
            break;
        case 'Passwort':
            cy.xpath('//input[@name="' + name + '"]')
            break;
        case 'Search Location':
            cy.xpath("//input[@id='combo-box-demo']");
            break;
        case "date_time_input" : 
            cy.xpath("//input[@placeholder='dd/mm/yyyy, hh:mm (a|p)m']");
            break;
        case "no_repeat" : 
            cy.xpath("//div[@id='demo-simple-select-helper'][normalize-space()='No']");
            break;
        case "Call Now":
            cy.xpath("//div[normalize-space()='"+name+"']");
            break;
        case "Enter Description":
            cy.xpath("//textarea[@placeholder='Enter Description']");
            break;
        default:
            break;
    }
}
//veriy input field label
function verifyInputFieldLabel(label) {
    switch (label) {
        case 'Select Location':
            cy.xpath("//label[normalize-space()='"+label+"']").should('be.visible');
            break;
        case 'Keywords':
            cy.xpath("//input/parent::div/parent::div/p[normalize-space()='"+label+"']");
            break;
        case "What would you like me to write?":
            cy.xpath("//textarea/parent::div/parent::div/parent::div/p[normalize-space()='"+label+"']");
        default:
            break;
    }
}

//for fields options like select items from list from input field
function selectOptions(name){
    switch (name) {
        case "No":
            cy.xpath("//li[normalize-space()='"+name+"']");
            break;
        case "Call Now":
            cy.xpath("//li[normalize-space()='"+name+"']");
            break;
        default:
            break;
    }
}


//verify input field name
function verifyInputFieldTitle(title) {
    switch (title) {
        case 'Select Location':
            cy.xpath("//p[normalize-space()='"+title+"']").should('be.visible');
            break;
        case "Select Date & Time" : 
            cy.xpath("//p[normalize-space()='"+title+"']").should('be.visible');
        default:
            break;
    }
}

//Verify toast message
function verifyToastMessage(message){
    switch (message) {
        case "Incorrect password":
            cy.xpath("//div[contains(text(),'" + message + "')]");
            break;
        case "Location not found" :   
            cy.xpath("//div[@role='alert']//div[contains(text(),'" + message + "')]");
            break;
        case "Post Deleted Successfully" : 
            cy.xpath("//div[@role='alert']//div[contains(text(),'" + message + "')]");
            break;
        case "Created successfully" : 
            cy.xpath("//div[@role='alert']//div[contains(text(),'" + message + "')]");
            break;
        default:
            break;
    }
}

// for clicking on checkboxes
function clickCheckbox(name){
    switch (name) {
        case 'Remember me':
            cy.get("[type='checkbox']").check('remember');
            break;
        case "Mich erinnern" : 
            cy.get("[type='checkbox']").check('Mich erinnern');
            break;
        case "Also add image to the Photos section of Google My Business?":
            cy.xpath("//span[contains(text(),'"+name+"')]/parent::label/span/input");
            break;
        default:
            break;
    }
}


//for verifying availaibilty of text
function verifyText(text){
    switch (text) {
        case "Welcome back !":
            cy.xpath("//h1[normalize-space()='"+ text +"']")
            .should('contain', text);
            break;
        case "Drag & Drop Image(s) here":
            cy.xpath('//p[normalize-space()="'+text+'"]');
        case "Reach more customers through posts":
            cy.xpath('//p[normalize-space()="'+text+'"]')
        case "Add Posts":
            cy.xpath('//p[normalize-space()="'+text+'"]')
        case "Want to edit all posts at once? Click Here":
            cy.xpath('//p[normalize-space()="'+text+'"]')
            break;
        case "Add more Posts To see":
            cy.xpath("//p[normalize-space()='"+text+"']");
            break;
        case "No More Posts" : 
            cy.xpath("//h3[normalize-space()='"+text+"']");
            break;
        case "AI Writer" : 
            cy.xpath("//p[contains(text(),'AI Writer')]");
            break;
        case "text_below_title_of_ai_writer_popup":
            cy.xpath('//p[normalize-space()="Write the keywords if you want artificial intelligence to generate the content by using the given keywords"]');
            break;
        default:
            break;
    }
}

//for right sidebar links
function sidebarLinkClick(link) {
    switch (link) {
        case 'Post Management':
            cy.xpath("//span[normalize-space()='"+link+"']");
            break;  
        default:
            break;
    }
    
}

//for sidebarlink dropdown links
function sidebarLinkDropdown(link) {
    switch (link) {
        case 'Auto Google Posts':
            cy.xpath("//span[normalize-space()='"+link+"']");
            break;
    
        default:
            break;
    }
}

//Verify post page
function verifyPostPage(text) {
    cy.xpath("//p[normalize-space()='"+text+"']").contains(""+text+"");
    cy.url().should('include', 'https://betaapp.obenan.com/user/allposts');
}

//delete all images
function deleteAllImages(images) {
    for (let i = 0; i < images.length; i++) {
      const imageName = images[i].split('/').pop(); // Extract the image name from the path
      cy.xpath(`//p[contains(text(), '${imageName}')]/parent::div/parent::div//button[@aria-label='delete']`).click();
      // Add any additional confirmation or validation steps if required
    }
}
  

//this is for location search at all posts section 
function locationSearchField(name) {
    switch (name) {
        case 'post_page':
            cy.get('#combo-box-demo');
            break;
        case "post_creation":
            cy.get('#combo-box-demo');
        default:
            break;
    }
}

// verify location not found 
function verifyLocationNotFond(name) {
    switch (name) {
        case 'post_page':
            cy.xpath("//div[contains(text(),'No options')]").should('be.visible','No options');
            break;
    
        default:
            break;
    }
}

function verifyLocationFound(name) {
    switch (name) {
        case 'post_page':
            cy.get('#combo-box-demo-option-0').should('be.visible','obenan testing automation (370 N block, lahore)').click();
            break;
    
        default:
            break;
    }
}

module.exports = {
    popupButton,
    clickButton,
    verifyLogo,
    verifyInputField,
    verifyToastMessage,
    clickCheckbox,
    verifyText,
    sidebarLinkClick,
    sidebarLinkDropdown,
    verifyDashboard,
    verifyPostPage,
    deleteAllImages,
    locationSearchField,
    verifyLocationNotFond,
    verifyLocationFound,
    verifyInputFieldLabel,
    verifyInputFieldTitle,
    selectOptions,
    postContainer,
    verifyButton
}