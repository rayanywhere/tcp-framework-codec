const assert = require('assert');
const JsonCodec = require('../').json;
const TextCodec = require('../').text;

describe('#json', function() {
	it('should return without error', function() {
		let package = {a:1, b:false, c:'hi'};
		let result = JsonCodec.decode(JsonCodec.encode(package));
		assert(result.a === package.a && result.b === package.b && result.c === package.c, "should be equal");
	});
});
describe('#text', function() {
	it('should return without error', function() {
		let package = 'hello';
		let result = JsonCodec.decode(JsonCodec.encode(package));
		assert(result === package);
	});
});