// const { defineConfig } = require('cypress')

// module.exports = defineConfig({
//   e2e: {
//     // We've imported your old cypress plugins here.
//     // You may want to clean this up later by importing these.
//     setupNodeEvents(on, config) {
//       return require('./cypress/plugins/index.js')(on, config)
//     },
//     baseUrl: 'http://34.171.117.131/',
//   },
// })

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://34.171.117.131/',
  },
  defaultCommandTimeout: 99000,
})