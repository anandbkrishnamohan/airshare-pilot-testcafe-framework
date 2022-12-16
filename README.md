# Test Framework #

This framework is written in TestCafe which is a node.js e2e test automation tool and an open soure project in Github with MIT license.

This framewok is based on the Page Object Model and below are the main folder structure that is used

## Folder structure

 - `page-objects` - this folder contains the selectors and associated functions per page.
 - `support` - this folder contians all the support functions which includes.
  - `config.json` - contains the base url and other config items required for testcafe.
  - `utils.js` - contains the util functions required for tests.
 - `test-data` - contains different test data json files
 - `tests` - this folder contains all the tests

## Getting started

Please make sure you have npm installed in your machine

Checkout the project and run the below command to install the dependencies.

```sh
npm install
```

To execute the tests
```sh
npm test
```