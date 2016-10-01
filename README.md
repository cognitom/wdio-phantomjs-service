# WDIO PhantomJS Service

[![Build Status][travis-image]][travis-url]

This service helps you to run PhantomJS seamlessly when running tests with the [WDIO testrunner](http://webdriver.io/guide/testrunner/gettingstarted.html). It uses [phantomjs-prebuilt](https://www.npmjs.com/package/phantomjs-prebuilt) NPM package.

## Installation

From npm:

```bash
npm install --save-dev wdio-phantomjs-service
```

Instructions on how to install `WebdriverIO` can be found [here.](http://webdriver.io/guide/getstarted/install.html)

## Configuration

In order to use the service you need to add `phantomjs` to your service array:

```js
// wdio.conf.js
export.config = {
  // ...
  services: ['phantomjs'],
  // ...
};
```

## Options

### seleniumArgs
Array of arguments for the PhantomJs, passed directly to `phantomjs.run()`.

Type: `Array`

Default: `[]`

```js
// wdio.conf.js
export.config = {
  // ...
  services: ['phantomjs'],
  phantomjsArgs: [
    '--webdriver-logfile=phantomjs.log',
    '----ignore-ssl-errors=true'
  ]
  // ...
};
```
----

For more information on WebdriverIO see the [homepage](http://webdriver.io).

[travis-image]:https://img.shields.io/travis/cognitom/wdio-phantomjs-service.svg?style=flat-square
[travis-url]:https://travis-ci.org/cognitom/wdio-phantomjs-service
