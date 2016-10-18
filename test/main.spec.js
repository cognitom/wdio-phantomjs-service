'use strict'
const assert = require('assert')
const fs = require('fs')
const path = require('path')

const logPath = path.join(process.cwd(), 'phantomjs.log')

describe('webdriverio', function () {
  it('should run a test', function () {
    const title = browser.url('/').getTitle()
    assert.equal(title, 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs')
  })
  it('should have created a log file "phantomjs.log"', function () {
    const file = fs.statSync(logPath)
    assert(file.size > 0)
  })
  after(function () {
    fs.unlinkSync(logPath)
  })
})
