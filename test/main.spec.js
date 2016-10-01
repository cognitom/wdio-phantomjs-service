'use strict'
const assert = require('assert')
const fs = require('fs')
const path = require('path')

describe('webdriverio', function () {
  it('should run a test', function () {
    const title = browser.url('/').getTitle()
    assert.equal(title, 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs')
  })
  it('should have created a log file "phantomjs.log"', function(){
    const filePath = path.join(process.cwd(), 'phantomjs.log')
    const file = fs.statSync(filePath)
    assert(file.size > 0)
  })
})
