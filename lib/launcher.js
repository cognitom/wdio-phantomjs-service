'use strict'
const phantomjs = require('phantomjs-prebuilt')

module.exports = class PhantomJSLauncher {
  onPrepare () {
    return phantomjs.run('--webdriver=4444').then(p => this.process = p)
  }

  onComplete () {
    if (this.process) this.process.kill()
  }
}
