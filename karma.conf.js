/* eslint no-var: 0, babel/object-shorthand: 0, vars-on-top: 0, func-names: 0 */
// require('babel/register');

var webpackConfig = require('./webpack.config.js');
var devBrowser = process.env.PHANTOM ? 'PhantomJS' : 'Chrome';

var preprocessors = ['webpack', 'sourcemap'];
var reporters = ['mocha'];

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: [
      'mocha',
      'sinon-chai'
    ],

    files: [
      'test/index.js'
    ],

    preprocessors: {
      'test/index.js': preprocessors
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    },

    reporters: reporters,

    mochaReporter: {
      output: 'autowatch'
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: [ devBrowser ],

    captureTimeout: 60000,
    browserNoActivityTimeout: 45000,
  });
};
