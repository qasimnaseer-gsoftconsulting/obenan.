const { defineConfig } = require("cypress");



module.exports = defineConfig({
  // "pluginsFile": "path/to/utils/file" ,
  // reporter: 'cypress-mochawesome-reporter',

  // reporterOptions: {
  //   charts: true,
  //   reportPageTitle: 'custom-title',
  //   embeddedScreenshots: true,
  //   inlineAssets: true,
  //   saveAllAttempts: false,
  // },

  env: {
      apiURL : 'https://betaapi.obenan.com/api/v1/',
      baseURL: 'https://betaapp.obenan.com/',
      email: 'automation@obenan.com',
      password: '12345'
  },
  e2e: {
    specPattern: "**/*.cy.js",
    reporter: "cypress-multi-reporters",
    screenshotOnRunFailure: true,
    video: false,
    projectId: 'xy9pnf',//128076ed-9868-4e98-9cef-98dd8b705d75

    setupNodeEvents(on, config) {
      // implement node event listeners here
      // require('cypress-mochawesome-reporter/plugin')(on);
    }
  },

});
