# WDIO PhantomJS Service [![Build Status](https://travis-ci.org/cognitom/wdio-phantomjs-service.svg?branch=master)](https://travis-ci.org/cognitom/wdio-phantomjs-service)

This service helps you to run PhantomJS seamlessly when running tests with the [WDIO testrunner](http://webdriver.io/guide/testrunner/gettingstarted.html). It uses [phantom-prebuilt](https://www.npmjs.com/package/phantom-prebuilt) NPM package.

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

----

For more information on WebdriverIO see the [homepage](http://webdriver.io).
