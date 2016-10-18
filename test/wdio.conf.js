'use strict'
exports.config = {
  specs: [
    './test/*.spec.js'
  ],
  capabilities: [
    { browserName: 'phantomjs' }
  ],
  sync: true,
  logLevel: 'error',
  coloredLogs: true,
  baseUrl: 'http://webdriver.io',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 30000
  },
  services: [
    require('../launcher')
  ],
  phantomjsOpts: {
    webdriverLogfile: 'phantomjs.log'
  }
}
