/* global describe,beforeEach,it */
'use strict';

var nemoFactory = require('nemo-mocha-factory'),
  plugins = require('./plugins'),
  path = require('path'),
  util = require(path.resolve(__dirname, 'util')),
  assert = require('assert'),
  nemo = {},
  setup = {
    'view': ['simple']
  };

describe('nemo-view @verySimple@', function () {
  nemoFactory({
    'context': nemo,
    'plugins': plugins,
    'setup': setup
  });

  beforeEach(function (done) {
    nemo.driver.get(nemo.props.targetBaseUrl);
    util.waitForJSReady(nemo).then(util.doneSuccess(done), util.doneError(done));
  });
  it('should use the form view to enter values and write to outy div @useView@', function (done) {
    nemo.view.simple.outBox().getTagName().then(function (tn) {
      assert.equal(tn.toLowerCase(), 'div');
      done();
    }, util.doneError(done));
  });
});