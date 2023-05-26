const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fixturesFolder: false,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:1234',
    env: {
      codeCoverage: {
        exclude: ['cypress/**/*.*']
      }
    },
    chromeWebSecurity: false
  }
})
