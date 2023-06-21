//import module from support/pageObjects
import desktopLoginPageObject  from "./desktop/login_page/desktopLoginPage";
import autoGooglePost from "./desktop/post-management/googleAutoPost";

//initialize from imports
const desktopLoginPageObjects = new desktopLoginPageObject();
const autoGooglePosts = new autoGooglePost();

//exporting from initialize
export {
    desktopLoginPageObjects,
    autoGooglePosts
}