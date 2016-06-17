var expect = require('chai').expect,
    zclId = require('../index');

var profIdKeys = [],
    profIdVals = [],
    devIdKeys = [],
    devIdVals = [],
    cIdKeys = [],
    cIdVals = [],
    Keys = [],
    Vals = [],
    Keys = [],
    Vals = [],
    k;

describe('Module Methods Check', function() {
    describe('#.profile', function() {
        it('should get right item by profId string', function () {

        });

        it('should get right item by profId number', function () {
        });

        it('should get undefined if profId not found', function () {
        });
    });

    describe('#.device', function() {
        it('should get right item by profId string and devId string', function () {
        });

        it('should get right item by profId string and devId number', function () {
        });

        it('should get right item by profId number and devId string', function () {
        });

        it('should get right item by profId number and devId number', function () {
        });

        it('should get undefined if target not found', function () {
        });

        it('should get an item if target is found', function () {
        });
    });

    describe('#.cluster', function() {
        it('should get right item by cId string', function () {
        });

        it('should get right item by cId number', function () {
        });

        it('should get undefined if cId not found', function () {
        });
    });

    describe('#.foundation', function() {
        it('should get right item by cmdId string', function () {
        });

        it('should get right item by cmdId number', function () {
        });

        it('should get undefined if cmdId not found', function () {
        });
    });

    describe('#.functional', function() {
        it('should get right item by cId string and cmdId string', function () {
        });

        it('should get right item by cId string and cmdId number', function () {
        });

        it('should get right item by cId number and cmdId string', function () {
        });

        it('should get right item by cId number and cmdId number', function () {
        });

        it('should get undefined if target not found', function () {
        });

        it('should get an item if target is found', function () {
        });
    });

    describe('#.getCmdRsp', function() {
        it('should get right item by cId string and cmdId string', function () {
        });

        it('should get right item by cId string and cmdId number', function () {
        });

        it('should get right item by cId number and cmdId string', function () {
        });

        it('should get right item by cId number and cmdId number', function () {
        });

        it('should get undefined if target not found', function () {
        });

        it('should get an item if target is found', function () {
        });
    });

    describe('#.attr', function() {
        it('should get right item by cId string and attrId string', function () {
        });

        it('should get right item by cId string and attrId number', function () {
        });

        it('should get right item by cId number and attrId string', function () {
        });

        it('should get right item by cId number and attrId number', function () {
        });

        it('should get undefined if target not found', function () {
        });

        it('should get an item if target is found', function () {
        });
    });

    describe('#.attrType', function() {
        it('should get right item by cId string and attrId string', function () {
        });

        it('should get right item by cId string and attrId number', function () {
        });

        it('should get right item by cId number and attrId string', function () {
        });

        it('should get right item by cId number and attrId number', function () {
        });

        it('should get undefined if target not found', function () {
        });

        it('should get an item if target is found', function () {
        });
    });

    describe('#.dataType', function() {
        it('should get right item by type string', function () {
        });

        it('should get right item by type number', function () {
        });

        it('should get undefined if type not found', function () {
        });
    });
});
