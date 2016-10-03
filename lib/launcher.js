'use strict'
const phantomjs = require('phantomjs-prebuilt'),
  _ = require('lodash')

const convertOptsToArgs = (val,key)=> `--${_.kebabCase(key)}=${val}`

module.exports = class PhantomJSLauncher {
  onPrepare (config) {
    let opts = _.assign({ webdriver: 4444 }, config.phantomjsOpts),
      args = _.map(opts, convertOptsToArgs)

    return phantomjs.run.apply(phantomjs,args).then(p => this.process = p)
  }

  onComplete () {
    if (this.process) this.process.kill()
  }
}
