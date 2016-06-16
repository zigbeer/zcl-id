var expect = require('chai').expect,
	zclId = require('../index');

describe('APIs Arguments Check for Throwing Error', function() {

    describe('#.profile', function() {
        it('should be a function', function () {
            expect(zclId.profile).to.be.a('function');
        });

        it('should throw TypeError if input cmdId is not a number and not a string', function () {
            expect(function () { return zclId.profile(); }).to.throw(TypeError);
            expect(function () { return zclId.profile(undefined); }).to.throw(TypeError);
            expect(function () { return zclId.profile(null); }).to.throw(TypeError);
            expect(function () { return zclId.profile(NaN); }).to.throw(TypeError);
            expect(function () { return zclId.profile([]); }).to.throw(TypeError);
            expect(function () { return zclId.profile({}); }).to.throw(TypeError);
            expect(function () { return zclId.profile(true); }).to.throw(TypeError);
            expect(function () { return zclId.profile(new Date()); }).to.throw(TypeError);
            expect(function () { return zclId.profile(function () {}); }).to.throw(TypeError);

            expect(function () { return zclId.profile(260); }).not.to.throw(Error);
            expect(function () { return zclId.profile('260'); }).not.to.throw(Error);
            expect(function () { return zclId.profile(0x0104); }).not.to.throw(Error);
            expect(function () { return zclId.profile('0x0104'); }).not.to.throw(Error);
            expect(function () { return zclId.profile('HA'); }).not.to.throw(Error);
        });
    });

    describe('#.device', function() {
        it('should be a function', function () {
            expect(zclId.device).to.be.a('function');
        });

        it('should throw TypeError if input cmdId is not a number and not a string', function () {
            expect(function () { return zclId.device(); }).to.throw(TypeError);
            expect(function () { return zclId.device(undefined, undefined); }).to.throw(TypeError);
            expect(function () { return zclId.device(null, null); }).to.throw(TypeError);
            expect(function () { return zclId.device(NaN, NaN); }).to.throw(TypeError);
            expect(function () { return zclId.device([], []); }).to.throw(TypeError);
            expect(function () { return zclId.device({}, {}); }).to.throw(TypeError);
            expect(function () { return zclId.device(true, false); }).to.throw(TypeError);
            expect(function () { return zclId.device(new Date(), new Date()); }).to.throw(TypeError);
            expect(function () { return zclId.device(function () {}, function () {}); }).to.throw(TypeError);

            expect(function () { return zclId.device(260, 0x0001); }).not.to.throw(Error);
            expect(function () { return zclId.device('260', 'ON_OFF_OUTPUT'); }).not.to.throw(Error);
            expect(function () { return zclId.device('HA', '0x0003'); }).not.to.throw(Error);
            expect(function () { return zclId.device('0x0104', 'SCENE_SELECTOR'); }).not.to.throw(Error);
            expect(function () { return zclId.device('HA', 5); }).not.to.throw(Error);
            expect(function () { return zclId.device('HA', '5'); }).not.to.throw(Error);
        });
    });
});