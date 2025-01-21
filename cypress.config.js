const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com',
    specPattern: "cypress/e2e/*.feature",
    supportFile: false,
    setupNodeEvents(on, config) { 
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      }));
      return config;
    },
    env: {
      stepDefinitions: "cypress/e2e/step-definitions/*.js",
    }
  },
  browserLaunchOptions: {
    args: ['--force-device-scale-factor=1'], // Forces zoom to 100%
  },
});
