////
//// Some unit testing for package bbop-rest-response.
////

var chai = require('chai');
chai.config.includeStack = true;
var assert = chai.assert;
var response = require('..');

// Correct environment, ready testing.
var bbop = require('bbop-core');

///
/// Start unit testing.
///

describe('small things', function(){

    it('bbop-rest-response', function(){

	var robj1 = 'foo';
	var r1 = new response(robj1);
	
	var robj2 = null;
	var r2 = new response(robj2);
	
	assert.isTrue(r1.okay(), 'looks like okay');
	assert.isFalse(r2.okay(), 'looks like false');
	
	assert.equal(r1.raw(), 'foo', 'looks like a "foo"');
	assert.equal(r2.raw(), null, 'looks like null');
	
    });
});
