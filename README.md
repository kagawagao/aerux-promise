# aerux-promise

[![node](https://img.shields.io/node/v/aerux-promise.svg)](https://www.npmjs.com/package/aerux-promise)
[![npm](https://img.shields.io/npm/v/aerux-promise.svg)](https://www.npmjs.com/package/aerux-promise)
[![license](https://img.shields.io/npm/l/aerux-promise.svg)](https://github.com/kagawagao/aerux-promise/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/kagawagao/aerux-promise.svg?branch=master)](https://travis-ci.org/kagawagao/aerux-promise)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)
[![Coverage Status](https://coveralls.io/repos/github/kagawagao/aerux-promise/badge.svg?branch=master)](https://coveralls.io/github/kagawagao/aerux-promise?branch=master)
[![codecov](https://codecov.io/gh/kagawagao/aerux-promise/branch/master/graph/badge.svg)](https://codecov.io/gh/kagawagao/aerux-promise)
[![Known Vulnerabilities](https://snyk.io/test/github/kagawagao/aerux-promise/badge.svg?targetFile=package.json)](https://snyk.io/test/github/kagawagao/aerux-promise?targetFile=package.json)

Promise middleware for aerux

## Install

```bash
npm i aerux-promise
```

## Use

```js
import promiseMiddleware from 'aerux-promise'
import { createStore } from 'aerux'

createStore({
  middlewares: [promiseMiddleware]
})
```
