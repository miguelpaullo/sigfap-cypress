const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mubu2y',
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://novo-sig.homolog.ledes.net/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
