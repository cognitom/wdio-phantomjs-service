'use strict'
const assert = require('assert')

describe('webdriverio', function () {
  it('should run a test', function () {
    const title = browser.url('/').getTitle()
    assert.equal(title, 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs')
  })
})
