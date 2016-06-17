var expect = require('chai').expect,
    zclId = require('../index');

describe('APIs Arguments Check for Throwing Error', function() {
    describe('#._getCluster', function() {
        it('should be a function', function () {
            expect(zclId._getCluster).to.be.a('function');
        });
    });

    describe('#.profile', function() {
        it('should be a function', function () {
            expect(zclId.profile).to.be.a('function');
        });

        it('should throw TypeError if input profId is not a number and not a string', function () {
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

        it('should throw TypeError if input profId is not a number and not a string', function () {
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

        it('should throw TypeError if input devId is not a number and not a string', function () {
        });
    });

    describe('#.cluster', function() {
        it('should be a function', function () {
            expect(zclId.cluster).to.be.a('function');
        });

        it('should throw TypeError if input cId is not a number and not a string', function () {
        });
    });

    describe('#.foundation', function() {
        it('should be a function', function () {
            expect(zclId.foundation).to.be.a('function');
        });

        it('should throw TypeError if input cmdId is not a number and not a string', function () {
        });
    });

    describe('#.functional', function() {
        it('should be a function', function () {
            expect(zclId.functional).to.be.a('function');
        });

        it('should throw TypeError if input cId is not a number and not a string', function () {
        });

        it('should throw TypeError if input cmdId is not a number and not a string', function () {
        });
    });

    describe('#.getCmdRsp', function() {
        it('should be a function', function () {
            expect(zclId.getCmdRsp).to.be.a('function');
        });

        it('should throw TypeError if input cId is not a number and not a string', function () {
        });

        it('should throw TypeError if input rspId is not a number and not a string', function () {
        });
    });

    describe('#.attr', function() {
        it('should be a function', function () {
            expect(zclId.attr).to.be.a('function');
        });

        it('should throw TypeError if input cId is not a number and not a string', function () {
        });

        it('should throw TypeError if input attrId is not a number and not a string', function () {
        });
    });

    describe('#.attrType', function() {
        it('should be a function', function () {
            expect(zclId.attrType).to.be.a('function');
        });

        it('should throw TypeError if input cId is not a number and not a string', function () {
        });

        it('should throw TypeError if input attrId is not a number and not a string', function () {
        });
    });

    describe('#.dataType', function() {
        it('should be a function', function () {
            expect(zclId.dataType).to.be.a('function');
        });

        it('should throw TypeError if input type is not a number and not a string', function () {
        });
    });
});
