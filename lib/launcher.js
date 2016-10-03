'use strict'
const phantomjs = require('phantomjs-prebuilt')

module.exports = class PhantomJSLauncher {
  onPrepare (config) {
    let args = ['--webdriver=4444']
    args = args.concat(config.phantomjsArgs || [])
    return phantomjs.run.apply(phantomjs,args).then(p => this.process = p)
  }

  onComplete () {
    if (this.process) this.process.kill()
  }
}
