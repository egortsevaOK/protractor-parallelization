const yargs = require('yargs').argv;
exports.config = {   
    directConnect: true,
    framework: 'mocha',
    specs: ['./specs/*.js'],
    capabilities: {
      browserName: yargs.browser || 'chrome',
      shardTestFiles: yargs.instances > 1,
      maxInstances: yargs.instances || 1,      
    },
    SELENIUM_PROMISE_MANAGER: false,
    baseurl: 'localhost',
    mochaOpts: {
    reporter: 'spec', 
    timeout: 70000
  }
  };