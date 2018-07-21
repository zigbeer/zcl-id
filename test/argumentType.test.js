const expect = require('chai').expect;
const zclId = require('../index');

describe('APIs Arguments Check for Throwing Error', () => {
    describe('#._getCluster', function() {
        it('should be a function', function() {
            expect(zclId._getCluster).to.be.a('function');
        });
    });

    describe('#.profile', () => {
        it('should be a function', () => {
            expect(zclId.profile).to.be.a('function');
        });

        it('should throw TypeError if input profId is not a number and not a string', () => {
            expect(() => zclId.profile()).to.throw(TypeError);
            expect(() => zclId.profile(undefined)).to.throw(TypeError);
            expect(() => zclId.profile(null)).to.throw(TypeError);
            expect(() => zclId.profile(NaN)).to.throw(TypeError);
            expect(() => zclId.profile([])).to.throw(TypeError);
            expect(() => zclId.profile({})).to.throw(TypeError);
            expect(() => zclId.profile(true)).to.throw(TypeError);
            expect(() => zclId.profile(new Date())).to.throw(TypeError);
            expect(() => zclId.profile(() => {})).to.throw(TypeError);

            expect(() => zclId.profile(260)).not.to.throw(Error);
            expect(() => zclId.profile('260')).not.to.throw(Error);
            expect(() => zclId.profile(0x0104)).not.to.throw(Error);
            expect(() => zclId.profile('0x0104')).not.to.throw(Error);
            expect(() => zclId.profile('HA')).not.to.throw(Error);
        });
    });

    describe('#.device', () => {
        it('should be a function', () => {
            expect(zclId.device).to.be.a('function');
        });

        it('should throw TypeError if input profId is not a number and not a string', () => {
            expect(() => zclId.device()).to.throw(TypeError);
            expect(() => zclId.device(undefined, 5)).to.throw(TypeError);
            expect(() => zclId.device(null, 5)).to.throw(TypeError);
            expect(() => zclId.device(NaN, 5)).to.throw(TypeError);
            expect(() => zclId.device([], 5)).to.throw(TypeError);
            expect(() => zclId.device({}, 5)).to.throw(TypeError);
            expect(() => zclId.device(true, 5)).to.throw(TypeError);
            expect(() => zclId.device(new Date(), 5)).to.throw(TypeError);
            expect(() => zclId.device(() => {}, 5)).to.throw(TypeError);

            expect(() => zclId.device()).to.throw(TypeError);
            expect(() => zclId.device(undefined, '5')).to.throw(TypeError);
            expect(() => zclId.device(null, '5')).to.throw(TypeError);
            expect(() => zclId.device(NaN, '5')).to.throw(TypeError);
            expect(() => zclId.device([], '5')).to.throw(TypeError);
            expect(() => zclId.device({}, '5')).to.throw(TypeError);
            expect(() => zclId.device(true, '5')).to.throw(TypeError);
            expect(() => zclId.device(new Date(), '5')).to.throw(TypeError);
            expect(() => zclId.device(() => {}, '5')).to.throw(TypeError);

            expect(() => zclId.device()).to.throw(TypeError);
            expect(() => zclId.device(undefined, 0x0005)).to.throw(TypeError);
            expect(() => zclId.device(null, 0x0005)).to.throw(TypeError);
            expect(() => zclId.device(NaN, 0x0005)).to.throw(TypeError);
            expect(() => zclId.device([], 0x0005)).to.throw(TypeError);
            expect(() => zclId.device({}, 0x0005)).to.throw(TypeError);
            expect(() => zclId.device(true, 0x0005)).to.throw(TypeError);
            expect(() => zclId.device(new Date(), 0x0005)).to.throw(TypeError);
            expect(() => zclId.device(() => {}, 0x0005)).to.throw(TypeError);

            expect(() => zclId.device()).to.throw(TypeError);
            expect(() => zclId.device(undefined, 'CONFIGURATION_TOOL')).to.throw(TypeError);
            expect(() => zclId.device(null, 'CONFIGURATION_TOOL')).to.throw(TypeError);
            expect(() => zclId.device(NaN, 'CONFIGURATION_TOOL')).to.throw(TypeError);
            expect(() => zclId.device([], 'CONFIGURATION_TOOL')).to.throw(TypeError);
            expect(() => zclId.device({}, 'CONFIGURATION_TOOL')).to.throw(TypeError);
            expect(() => zclId.device(true, 'CONFIGURATION_TOOL')).to.throw(TypeError);
            expect(() => zclId.device(new Date(), 'CONFIGURATION_TOOL')).to.throw(TypeError);
            expect(() => zclId.device(() => {}, 'CONFIGURATION_TOOL')).to.throw(TypeError);

            expect(() => zclId.device(260, 5)).not.to.throw(Error);
            expect(() => zclId.device(260, '5')).not.to.throw(Error);
            expect(() => zclId.device(260, 0x0005)).not.to.throw(Error);
            expect(() => zclId.device(260, 'CONFIGURATION_TOOL')).not.to.throw(Error);
            expect(() => zclId.device('260', 5)).not.to.throw(Error);
            expect(() => zclId.device('260', '5')).not.to.throw(Error);
            expect(() => zclId.device('260', 0x0005)).not.to.throw(Error);
            expect(() => zclId.device('260', 'CONFIGURATION_TOOL')).not.to.throw(Error);
            expect(() => zclId.device(0x104, 5)).not.to.throw(Error);
            expect(() => zclId.device(0x104, '5')).not.to.throw(Error);
            expect(() => zclId.device(0x104, 0x0005)).not.to.throw(Error);
            expect(() => zclId.device(0x104, 'CONFIGURATION_TOOL')).not.to.throw(Error);
            expect(() => zclId.device('HA', 5)).not.to.throw(Error);
            expect(() => zclId.device('HA', '5')).not.to.throw(Error);
            expect(() => zclId.device('HA', 0x0005)).not.to.throw(Error);
            expect(() => zclId.device('HA', 'CONFIGURATION_TOOL')).not.to.throw(Error);
        });

        it('should throw TypeError if input devId is not a number and not a string', () => {
            expect(() => zclId.device()).to.throw(TypeError);
            expect(() => zclId.device(260, undefined)).to.throw(TypeError);
            expect(() => zclId.device(260, null)).to.throw(TypeError);
            expect(() => zclId.device(260, NaN)).to.throw(TypeError);
            expect(() => zclId.device(260, [])).to.throw(TypeError);
            expect(() => zclId.device(260, {})).to.throw(TypeError);
            expect(() => zclId.device(260, true)).to.throw(TypeError);
            expect(() => zclId.device(260, new Date())).to.throw(TypeError);
            expect(() => zclId.device(260, () => {})).to.throw(TypeError);

            expect(() => zclId.device()).to.throw(TypeError);
            expect(() => zclId.device('260', undefined)).to.throw(TypeError);
            expect(() => zclId.device('260', null)).to.throw(TypeError);
            expect(() => zclId.device('260', NaN)).to.throw(TypeError);
            expect(() => zclId.device('260', [])).to.throw(TypeError);
            expect(() => zclId.device('260', {})).to.throw(TypeError);
            expect(() => zclId.device('260', true)).to.throw(TypeError);
            expect(() => zclId.device('260', new Date())).to.throw(TypeError);
            expect(() => zclId.device('260', () => {})).to.throw(TypeError);

            expect(() => zclId.device()).to.throw(TypeError);
            expect(() => zclId.device(0x0104, undefined)).to.throw(TypeError);
            expect(() => zclId.device(0x0104, null)).to.throw(TypeError);
            expect(() => zclId.device(0x0104, NaN)).to.throw(TypeError);
            expect(() => zclId.device(0x0104, [])).to.throw(TypeError);
            expect(() => zclId.device(0x0104, {})).to.throw(TypeError);
            expect(() => zclId.device(0x0104, true)).to.throw(TypeError);
            expect(() => zclId.device(0x0104, new Date())).to.throw(TypeError);
            expect(() => zclId.device(0x0104, () => {})).to.throw(TypeError);

            expect(() => zclId.device()).to.throw(TypeError);
            expect(() => zclId.device('HA', undefined)).to.throw(TypeError);
            expect(() => zclId.device('HA', null)).to.throw(TypeError);
            expect(() => zclId.device('HA', NaN)).to.throw(TypeError);
            expect(() => zclId.device('HA', [])).to.throw(TypeError);
            expect(() => zclId.device('HA', {})).to.throw(TypeError);
            expect(() => zclId.device('HA', true)).to.throw(TypeError);
            expect(() => zclId.device('HA', new Date())).to.throw(TypeError);
            expect(() => zclId.device('HA', () => {})).to.throw(TypeError);

            expect(() => zclId.device(260, 5)).not.to.throw(Error);
            expect(() => zclId.device(260, '5')).not.to.throw(Error);
            expect(() => zclId.device(260, 0x0005)).not.to.throw(Error);
            expect(() => zclId.device(260, 'CONFIGURATION_TOOL')).not.to.throw(Error);
            expect(() => zclId.device('260', 5)).not.to.throw(Error);
            expect(() => zclId.device('260', '5')).not.to.throw(Error);
            expect(() => zclId.device('260', 0x0005)).not.to.throw(Error);
            expect(() => zclId.device('260', 'CONFIGURATION_TOOL')).not.to.throw(Error);
            expect(() => zclId.device(0x104, 5)).not.to.throw(Error);
            expect(() => zclId.device(0x104, '5')).not.to.throw(Error);
            expect(() => zclId.device(0x104, 0x0005)).not.to.throw(Error);
            expect(() => zclId.device(0x104, 'CONFIGURATION_TOOL')).not.to.throw(Error);
            expect(() => zclId.device('HA', 5)).not.to.throw(Error);
            expect(() => zclId.device('HA', '5')).not.to.throw(Error);
            expect(() => zclId.device('HA', 0x0005)).not.to.throw(Error);
            expect(() => zclId.device('HA', 'CONFIGURATION_TOOL')).not.to.throw(Error);
        });
    });

    describe('#.cluster', function() {
        it('should be a function', () => {
            expect(zclId.cluster).to.be.a('function');
        });

        it('should throw TypeError if input cId is not a number and not a string', () => {
            expect(() => zclId.cluster()).to.throw(TypeError);
            expect(() => zclId.cluster(undefined)).to.throw(TypeError);
            expect(() => zclId.cluster(null)).to.throw(TypeError);
            expect(() => zclId.cluster(NaN)).to.throw(TypeError);
            expect(() => zclId.cluster([])).to.throw(TypeError);
            expect(() => zclId.cluster({})).to.throw(TypeError);
            expect(() => zclId.cluster(true)).to.throw(TypeError);
            expect(() => zclId.cluster(new Date())).to.throw(TypeError);
            expect(() => zclId.cluster(() => {})).to.throw(TypeError);

            expect(() => zclId.cluster(3)).not.to.throw(Error);
            expect(() => zclId.cluster('3')).not.to.throw(Error);
            expect(() => zclId.cluster(0x0003)).not.to.throw(Error);
            expect(() => zclId.cluster('0x0003')).not.to.throw(Error);
            expect(() => zclId.cluster('genIdentify')).not.to.throw(Error);
        });
    });

    describe('#.foundation', function() {
        it('should be a function', () => {
            expect(zclId.foundation).to.be.a('function');
        });

        it('should throw TypeError if input cmdId is not a number and not a string', () => {
            expect(() => zclId.foundation()).to.throw(TypeError);
            expect(() => zclId.foundation(undefined)).to.throw(TypeError);
            expect(() => zclId.foundation(null)).to.throw(TypeError);
            expect(() => zclId.foundation(NaN)).to.throw(TypeError);
            expect(() => zclId.foundation([])).to.throw(TypeError);
            expect(() => zclId.foundation({})).to.throw(TypeError);
            expect(() => zclId.foundation(true)).to.throw(TypeError);
            expect(() => zclId.foundation(new Date())).to.throw(TypeError);
            expect(() => zclId.foundation(() => {})).to.throw(TypeError);

            expect(() => zclId.foundation(3)).not.to.throw(Error);
            expect(() => zclId.foundation('3')).not.to.throw(Error);
            expect(() => zclId.foundation(0x0003)).not.to.throw(Error);
            expect(() => zclId.foundation('0x0003')).not.to.throw(Error);
            expect(() => zclId.foundation('writeUndiv')).not.to.throw(Error);
        });
    });

    describe('#.functional', function() {
        it('should be a function', () => {
            expect(zclId.functional).to.be.a('function');
        });

        it('should throw TypeError if input cId is not a number and not a string', () => {
            expect(() => zclId.functional()).to.throw(TypeError);
            expect(() => zclId.functional(undefined, 5)).to.throw(TypeError);
            expect(() => zclId.functional(null, 5)).to.throw(TypeError);
            expect(() => zclId.functional(NaN, 5)).to.throw(TypeError);
            expect(() => zclId.functional([], 5)).to.throw(TypeError);
            expect(() => zclId.functional({}, 5)).to.throw(TypeError);
            expect(() => zclId.functional(true, 5)).to.throw(TypeError);
            expect(() => zclId.functional(new Date(), 5)).to.throw(TypeError);
            expect(() => zclId.functional(() => {}, 5)).to.throw(TypeError);

            expect(() => zclId.functional()).to.throw(TypeError);
            expect(() => zclId.functional(undefined, '5')).to.throw(TypeError);
            expect(() => zclId.functional(null, '5')).to.throw(TypeError);
            expect(() => zclId.functional(NaN, '5')).to.throw(TypeError);
            expect(() => zclId.functional([], '5')).to.throw(TypeError);
            expect(() => zclId.functional({}, '5')).to.throw(TypeError);
            expect(() => zclId.functional(true, '5')).to.throw(TypeError);
            expect(() => zclId.functional(new Date(), '5')).to.throw(TypeError);
            expect(() => zclId.functional(() => {}, '5')).to.throw(TypeError);

            expect(() => zclId.functional()).to.throw(TypeError);
            expect(() => zclId.functional(undefined, 0x0005)).to.throw(TypeError);
            expect(() => zclId.functional(null, 0x0005)).to.throw(TypeError);
            expect(() => zclId.functional(NaN, 0x0005)).to.throw(TypeError);
            expect(() => zclId.functional([], 0x0005)).to.throw(TypeError);
            expect(() => zclId.functional({}, 0x0005)).to.throw(TypeError);
            expect(() => zclId.functional(true, 0x0005)).to.throw(TypeError);
            expect(() => zclId.functional(new Date(), 0x0005)).to.throw(TypeError);
            expect(() => zclId.functional(() => {}, 0x0005)).to.throw(TypeError);

            expect(() => zclId.functional()).to.throw(TypeError);
            expect(() => zclId.functional(undefined, 'writeNoRsp')).to.throw(TypeError);
            expect(() => zclId.functional(null, 'writeNoRsp')).to.throw(TypeError);
            expect(() => zclId.functional(NaN, 'writeNoRsp')).to.throw(TypeError);
            expect(() => zclId.functional([], 'writeNoRsp')).to.throw(TypeError);
            expect(() => zclId.functional({}, 'writeNoRsp')).to.throw(TypeError);
            expect(() => zclId.functional(true, 'writeNoRsp')).to.throw(TypeError);
            expect(() => zclId.functional(new Date(), 'writeNoRsp')).to.throw(TypeError);
            expect(() => zclId.functional(() => {}, 'writeNoRsp')).to.throw(TypeError);

            expect(() => zclId.functional(5, 5)).not.to.throw(Error);
            expect(() => zclId.functional(5, '5')).not.to.throw(Error);
            expect(() => zclId.functional(5, 0x05)).not.to.throw(Error);
            expect(() => zclId.functional(5, 'recall')).not.to.throw(Error);
            expect(() => zclId.functional('5', 5)).not.to.throw(Error);
            expect(() => zclId.functional('5', '5')).not.to.throw(Error);
            expect(() => zclId.functional('5', 0x05)).not.to.throw(Error);
            expect(() => zclId.functional('5', 'recall')).not.to.throw(Error);
            expect(() => zclId.functional(0x0005, 5)).not.to.throw(Error);
            expect(() => zclId.functional(0x0005, '5')).not.to.throw(Error);
            expect(() => zclId.functional(0x0005, 0x05)).not.to.throw(Error);
            expect(() => zclId.functional(0x0005, 'recall')).not.to.throw(Error);
            expect(() => zclId.functional('genScenes', 5)).not.to.throw(Error);
            expect(() => zclId.functional('genScenes', '5')).not.to.throw(Error);
            expect(() => zclId.functional('genScenes', 0x05)).not.to.throw(Error);
            expect(() => zclId.functional('genScenes', 'recall')).not.to.throw(Error);
        });

        it('should throw TypeError if input cmdId is not a number and not a string', () => {
            expect(() => zclId.functional()).to.throw(TypeError);
            expect(() => zclId.functional(5, undefined)).to.throw(TypeError);
            expect(() => zclId.functional(5, null)).to.throw(TypeError);
            expect(() => zclId.functional(5, NaN)).to.throw(TypeError);
            expect(() => zclId.functional(5, [])).to.throw(TypeError);
            expect(() => zclId.functional(5, {})).to.throw(TypeError);
            expect(() => zclId.functional(5, true)).to.throw(TypeError);
            expect(() => zclId.functional(5, new Date())).to.throw(TypeError);
            expect(() => zclId.functional(5, () => {})).to.throw(TypeError);

            expect(() => zclId.functional()).to.throw(TypeError);
            expect(() => zclId.functional('5', undefined)).to.throw(TypeError);
            expect(() => zclId.functional('5', null)).to.throw(TypeError);
            expect(() => zclId.functional('5', NaN)).to.throw(TypeError);
            expect(() => zclId.functional('5', [])).to.throw(TypeError);
            expect(() => zclId.functional('5', {})).to.throw(TypeError);
            expect(() => zclId.functional('5', true)).to.throw(TypeError);
            expect(() => zclId.functional('5', new Date())).to.throw(TypeError);
            expect(() => zclId.functional('5', () => {})).to.throw(TypeError);

            expect(() => zclId.functional()).to.throw(TypeError);
            expect(() => zclId.functional(0x0005, undefined)).to.throw(TypeError);
            expect(() => zclId.functional(0x0005, null)).to.throw(TypeError);
            expect(() => zclId.functional(0x0005, NaN)).to.throw(TypeError);
            expect(() => zclId.functional(0x0005, [])).to.throw(TypeError);
            expect(() => zclId.functional(0x0005, {})).to.throw(TypeError);
            expect(() => zclId.functional(0x0005, true)).to.throw(TypeError);
            expect(() => zclId.functional(0x0005, new Date())).to.throw(TypeError);
            expect(() => zclId.functional(0x0005, () => {})).to.throw(TypeError);

            expect(() => zclId.functional()).to.throw(TypeError);
            expect(() => zclId.functional('genScenes', undefined)).to.throw(TypeError);
            expect(() => zclId.functional('genScenes', null)).to.throw(TypeError);
            expect(() => zclId.functional('genScenes', NaN)).to.throw(TypeError);
            expect(() => zclId.functional('genScenes', [])).to.throw(TypeError);
            expect(() => zclId.functional('genScenes', {})).to.throw(TypeError);
            expect(() => zclId.functional('genScenes', true)).to.throw(TypeError);
            expect(() => zclId.functional('genScenes', new Date())).to.throw(TypeError);
            expect(() => zclId.functional('genScenes', () => {})).to.throw(TypeError);

            expect(() => zclId.functional(5, 5)).not.to.throw(Error);
            expect(() => zclId.functional(5, '5')).not.to.throw(Error);
            expect(() => zclId.functional(5, 0x05)).not.to.throw(Error);
            expect(() => zclId.functional(5, 'recall')).not.to.throw(Error);
            expect(() => zclId.functional('5', 5)).not.to.throw(Error);
            expect(() => zclId.functional('5', '5')).not.to.throw(Error);
            expect(() => zclId.functional('5', 0x05)).not.to.throw(Error);
            expect(() => zclId.functional('5', 'recall')).not.to.throw(Error);
            expect(() => zclId.functional(0x0005, 5)).not.to.throw(Error);
            expect(() => zclId.functional(0x0005, '5')).not.to.throw(Error);
            expect(() => zclId.functional(0x0005, 0x05)).not.to.throw(Error);
            expect(() => zclId.functional(0x0005, 'recall')).not.to.throw(Error);
            expect(() => zclId.functional('genScenes', 5)).not.to.throw(Error);
            expect(() => zclId.functional('genScenes', '5')).not.to.throw(Error);
            expect(() => zclId.functional('genScenes', 0x05)).not.to.throw(Error);
            expect(() => zclId.functional('genScenes', 'recall')).not.to.throw(Error);
        });
    });

    describe('#.getCmdRsp', function() {
        it('should be a function', () => {
            expect(zclId.getCmdRsp).to.be.a('function');
        });

        it('should throw TypeError if input cId is not a number and not a string', () => {
            expect(() => zclId.getCmdRsp()).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(undefined, 0)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(null, 0)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(NaN, 0)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp([], 0)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp({}, 0)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(true, 0)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(new Date(), 0)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(() => {}, 0)).to.throw(TypeError);

            expect(() => zclId.getCmdRsp()).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(undefined, '0')).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(null, '0')).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(NaN, '0')).to.throw(TypeError);
            expect(() => zclId.getCmdRsp([], '0')).to.throw(TypeError);
            expect(() => zclId.getCmdRsp({}, '0')).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(true, '0')).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(new Date(), '0')).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(() => {}, '0')).to.throw(TypeError);

            expect(() => zclId.getCmdRsp()).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(undefined, 0x00)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(null, 0x00)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(NaN, 0x00)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp([], 0x00)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp({}, 0x00)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(true, 0x00)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(new Date(), 0x00)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(() => {}, 0x00)).to.throw(TypeError);

            expect(() => zclId.getCmdRsp()).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(undefined, 'Rsp')).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(null, 'Rsp')).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(NaN, 'Rsp')).to.throw(TypeError);
            expect(() => zclId.getCmdRsp([], 'Rsp')).to.throw(TypeError);
            expect(() => zclId.getCmdRsp({}, 'Rsp')).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(true, 'Rsp')).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(new Date(), 'Rsp')).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(() => {}, 'Rsp')).to.throw(TypeError);

            expect(() => zclId.getCmdRsp(5, 0)).not.to.throw(Error);
            expect(() => zclId.getCmdRsp(5, '0')).not.to.throw(Error);
            expect(() => zclId.getCmdRsp(5, 0x00)).not.to.throw(Error);
            expect(() => zclId.getCmdRsp(5, 'Rsp')).not.to.throw(Error);
            expect(() => zclId.getCmdRsp('5', 0)).not.to.throw(Error);
            expect(() => zclId.getCmdRsp('5', '0')).not.to.throw(Error);
            expect(() => zclId.getCmdRsp('5', 0x00)).not.to.throw(Error);
            expect(() => zclId.getCmdRsp('5', 'Rsp')).not.to.throw(Error);
            expect(() => zclId.getCmdRsp(0x0005, 0)).not.to.throw(Error);
            expect(() => zclId.getCmdRsp(0x0005, '0')).not.to.throw(Error);
            expect(() => zclId.getCmdRsp(0x0005, 0x00)).not.to.throw(Error);
            expect(() => zclId.getCmdRsp(0x0005, 'Rsp')).not.to.throw(Error);
            expect(() => zclId.getCmdRsp('genScenes', 0)).not.to.throw(Error);
            expect(() => zclId.getCmdRsp('genScenes', '0')).not.to.throw(Error);
            expect(() => zclId.getCmdRsp('genScenes', 0x00)).not.to.throw(Error);
            expect(() => zclId.getCmdRsp('genScenes', 'Rsp')).not.to.throw(Error);
        });

        it('should throw TypeError if input rspId is not a number and not a string', () => {
            expect(() => zclId.getCmdRsp()).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(5, undefined)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(5, null)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(5, NaN)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(5, [])).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(5, {})).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(5, true)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(5, new Date())).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(5, () => {})).to.throw(TypeError);

            expect(() => zclId.getCmdRsp()).to.throw(TypeError);
            expect(() => zclId.getCmdRsp('5', undefined)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp('5', null)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp('5', NaN)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp('5', [])).to.throw(TypeError);
            expect(() => zclId.getCmdRsp('5', {})).to.throw(TypeError);
            expect(() => zclId.getCmdRsp('5', true)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp('5', new Date())).to.throw(TypeError);
            expect(() => zclId.getCmdRsp('5', () => {})).to.throw(TypeError);

            expect(() => zclId.getCmdRsp()).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(0x0005, undefined)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(0x0005, null)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(0x0005, NaN)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(0x0005, [])).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(0x0005, {})).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(0x0005, true)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(0x0005, new Date())).to.throw(TypeError);
            expect(() => zclId.getCmdRsp(0x0005, () => {})).to.throw(TypeError);

            expect(() => zclId.getCmdRsp()).to.throw(TypeError);
            expect(() => zclId.getCmdRsp('genScenes', undefined)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp('genScenes', null)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp('genScenes', NaN)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp('genScenes', [])).to.throw(TypeError);
            expect(() => zclId.getCmdRsp('genScenes', {})).to.throw(TypeError);
            expect(() => zclId.getCmdRsp('genScenes', true)).to.throw(TypeError);
            expect(() => zclId.getCmdRsp('genScenes', new Date())).to.throw(TypeError);
            expect(() => zclId.getCmdRsp('genScenes', () => {})).to.throw(TypeError);

            expect(() => zclId.getCmdRsp(5, 0)).not.to.throw(Error);
            expect(() => zclId.getCmdRsp(5, '0')).not.to.throw(Error);
            expect(() => zclId.getCmdRsp(5, 0x00)).not.to.throw(Error);
            expect(() => zclId.getCmdRsp(5, 'Rsp')).not.to.throw(Error);
            expect(() => zclId.getCmdRsp('5', 0)).not.to.throw(Error);
            expect(() => zclId.getCmdRsp('5', '0')).not.to.throw(Error);
            expect(() => zclId.getCmdRsp('5', 0x00)).not.to.throw(Error);
            expect(() => zclId.getCmdRsp('5', 'Rsp')).not.to.throw(Error);
            expect(() => zclId.getCmdRsp(0x0005, 0)).not.to.throw(Error);
            expect(() => zclId.getCmdRsp(0x0005, '0')).not.to.throw(Error);
            expect(() => zclId.getCmdRsp(0x0005, 0x00)).not.to.throw(Error);
            expect(() => zclId.getCmdRsp(0x0005, 'Rsp')).not.to.throw(Error);
            expect(() => zclId.getCmdRsp('genScenes', 0)).not.to.throw(Error);
            expect(() => zclId.getCmdRsp('genScenes', '0')).not.to.throw(Error);
            expect(() => zclId.getCmdRsp('genScenes', 0x00)).not.to.throw(Error);
            expect(() => zclId.getCmdRsp('genScenes', 'Rsp')).not.to.throw(Error);
        });
    });

    describe('#.attrList', function() {
        it('should be a function', () => {
            expect(zclId.attrList).to.be.a('function');
        });

        it('should throw TypeError if input cId is not a number and not a string', () => {
            expect(() => zclId.attrList()).to.throw(TypeError);
            expect(() => zclId.attrList(undefined)).to.throw(TypeError);
            expect(() => zclId.attrList(null)).to.throw(TypeError);
            expect(() => zclId.attrList(NaN)).to.throw(TypeError);
            expect(() => zclId.attrList([])).to.throw(TypeError);
            expect(() => zclId.attrList({})).to.throw(TypeError);
            expect(() => zclId.attrList(true)).to.throw(TypeError);
            expect(() => zclId.attrList(new Date())).to.throw(TypeError);
            expect(() => zclId.attrList(() => {})).to.throw(TypeError);

            expect(() => zclId.attrList(3)).not.to.throw(Error);
            expect(() => zclId.attrList('3')).not.to.throw(Error);
            expect(() => zclId.attrList(0x0003)).not.to.throw(Error);
            expect(() => zclId.attrList('0x0003')).not.to.throw(Error);
            expect(() => zclId.attrList('genIdentify')).not.to.throw(Error);
        });
    });

    describe('#.attr', function() {
        it('should be a function', () => {
            expect(zclId.attr).to.be.a('function');
        });

        it('should throw TypeError if input cId is not a number and not a string', () => {
            expect(() => zclId.attr()).to.throw(TypeError);
            expect(() => zclId.attr(undefined, 2)).to.throw(TypeError);
            expect(() => zclId.attr(null, 2)).to.throw(TypeError);
            expect(() => zclId.attr(NaN, 2)).to.throw(TypeError);
            expect(() => zclId.attr([], 2)).to.throw(TypeError);
            expect(() => zclId.attr({}, 2)).to.throw(TypeError);
            expect(() => zclId.attr(true, 2)).to.throw(TypeError);
            expect(() => zclId.attr(new Date(), 2)).to.throw(TypeError);
            expect(() => zclId.attr(() => {}, 2)).to.throw(TypeError);

            expect(() => zclId.attr()).to.throw(TypeError);
            expect(() => zclId.attr(undefined, '2')).to.throw(TypeError);
            expect(() => zclId.attr(null, '2')).to.throw(TypeError);
            expect(() => zclId.attr(NaN, '2')).to.throw(TypeError);
            expect(() => zclId.attr([], '2')).to.throw(TypeError);
            expect(() => zclId.attr({}, '2')).to.throw(TypeError);
            expect(() => zclId.attr(true, '2')).to.throw(TypeError);
            expect(() => zclId.attr(new Date(), '2')).to.throw(TypeError);
            expect(() => zclId.attr(() => {}, '2')).to.throw(TypeError);

            expect(() => zclId.attr()).to.throw(TypeError);
            expect(() => zclId.attr(undefined, 0x0002)).to.throw(TypeError);
            expect(() => zclId.attr(null, 0x0002)).to.throw(TypeError);
            expect(() => zclId.attr(NaN, 0x0002)).to.throw(TypeError);
            expect(() => zclId.attr([], 0x0002)).to.throw(TypeError);
            expect(() => zclId.attr({}, 0x0002)).to.throw(TypeError);
            expect(() => zclId.attr(true, 0x0002)).to.throw(TypeError);
            expect(() => zclId.attr(new Date(), 0x0002)).to.throw(TypeError);
            expect(() => zclId.attr(() => {}, 0x0002)).to.throw(TypeError);

            expect(() => zclId.attr()).to.throw(TypeError);
            expect(() => zclId.attr(undefined, 'currentGroup')).to.throw(TypeError);
            expect(() => zclId.attr(null, 'currentGroup')).to.throw(TypeError);
            expect(() => zclId.attr(NaN, 'currentGroup')).to.throw(TypeError);
            expect(() => zclId.attr([], 'currentGroup')).to.throw(TypeError);
            expect(() => zclId.attr({}, 'currentGroup')).to.throw(TypeError);
            expect(() => zclId.attr(true, 'currentGroup')).to.throw(TypeError);
            expect(() => zclId.attr(new Date(), 'currentGroup')).to.throw(TypeError);
            expect(() => zclId.attr(() => {}, 'currentGroup')).to.throw(TypeError);

            expect(() => zclId.attr(5, 2)).not.to.throw(Error);
            expect(() => zclId.attr(5, '2')).not.to.throw(Error);
            expect(() => zclId.attr(5, 0x0002)).not.to.throw(Error);
            expect(() => zclId.attr(5, 'currentGroup')).not.to.throw(Error);
            expect(() => zclId.attr('5', 2)).not.to.throw(Error);
            expect(() => zclId.attr('5', '2')).not.to.throw(Error);
            expect(() => zclId.attr('5', 0x0002)).not.to.throw(Error);
            expect(() => zclId.attr('5', 'currentGroup')).not.to.throw(Error);
            expect(() => zclId.attr(0x0005, 2)).not.to.throw(Error);
            expect(() => zclId.attr(0x0005, '2')).not.to.throw(Error);
            expect(() => zclId.attr(0x0005, 0x0002)).not.to.throw(Error);
            expect(() => zclId.attr(0x0005, 'currentGroup')).not.to.throw(Error);
            expect(() => zclId.attr('genScenes', 2)).not.to.throw(Error);
            expect(() => zclId.attr('genScenes', '2')).not.to.throw(Error);
            expect(() => zclId.attr('genScenes', 0x0002)).not.to.throw(Error);
            expect(() => zclId.attr('genScenes', 'currentGroup')).not.to.throw(Error);
        });

        it('should throw TypeError if input attrId is not a number and not a string', () => {
            expect(() => zclId.attr()).to.throw(TypeError);
            expect(() => zclId.attr(5, undefined)).to.throw(TypeError);
            expect(() => zclId.attr(5, null)).to.throw(TypeError);
            expect(() => zclId.attr(5, NaN)).to.throw(TypeError);
            expect(() => zclId.attr(5, [])).to.throw(TypeError);
            expect(() => zclId.attr(5, {})).to.throw(TypeError);
            expect(() => zclId.attr(5, true)).to.throw(TypeError);
            expect(() => zclId.attr(5, new Date())).to.throw(TypeError);
            expect(() => zclId.attr(5, () => {})).to.throw(TypeError);

            expect(() => zclId.attr()).to.throw(TypeError);
            expect(() => zclId.attr('5', undefined)).to.throw(TypeError);
            expect(() => zclId.attr('5', null)).to.throw(TypeError);
            expect(() => zclId.attr('5', NaN)).to.throw(TypeError);
            expect(() => zclId.attr('5', [])).to.throw(TypeError);
            expect(() => zclId.attr('5', {})).to.throw(TypeError);
            expect(() => zclId.attr('5', true)).to.throw(TypeError);
            expect(() => zclId.attr('5', new Date())).to.throw(TypeError);
            expect(() => zclId.attr('5', () => {})).to.throw(TypeError);

            expect(() => zclId.attr()).to.throw(TypeError);
            expect(() => zclId.attr(0x0005, undefined)).to.throw(TypeError);
            expect(() => zclId.attr(0x0005, null)).to.throw(TypeError);
            expect(() => zclId.attr(0x0005, NaN)).to.throw(TypeError);
            expect(() => zclId.attr(0x0005, [])).to.throw(TypeError);
            expect(() => zclId.attr(0x0005, {})).to.throw(TypeError);
            expect(() => zclId.attr(0x0005, true)).to.throw(TypeError);
            expect(() => zclId.attr(0x0005, new Date())).to.throw(TypeError);
            expect(() => zclId.attr(0x0005, () => {})).to.throw(TypeError);

            expect(() => zclId.attr()).to.throw(TypeError);
            expect(() => zclId.attr('genScenes', undefined)).to.throw(TypeError);
            expect(() => zclId.attr('genScenes', null)).to.throw(TypeError);
            expect(() => zclId.attr('genScenes', NaN)).to.throw(TypeError);
            expect(() => zclId.attr('genScenes', [])).to.throw(TypeError);
            expect(() => zclId.attr('genScenes', {})).to.throw(TypeError);
            expect(() => zclId.attr('genScenes', true)).to.throw(TypeError);
            expect(() => zclId.attr('genScenes', new Date())).to.throw(TypeError);
            expect(() => zclId.attr('genScenes', () => {})).to.throw(TypeError);

            expect(() => zclId.attr(5, 2)).not.to.throw(Error);
            expect(() => zclId.attr(5, '2')).not.to.throw(Error);
            expect(() => zclId.attr(5, 0x0002)).not.to.throw(Error);
            expect(() => zclId.attr(5, 'currentGroup')).not.to.throw(Error);
            expect(() => zclId.attr('5', 2)).not.to.throw(Error);
            expect(() => zclId.attr('5', '2')).not.to.throw(Error);
            expect(() => zclId.attr('5', 0x0002)).not.to.throw(Error);
            expect(() => zclId.attr('5', 'currentGroup')).not.to.throw(Error);
            expect(() => zclId.attr(0x0005, 2)).not.to.throw(Error);
            expect(() => zclId.attr(0x0005, '2')).not.to.throw(Error);
            expect(() => zclId.attr(0x0005, 0x0002)).not.to.throw(Error);
            expect(() => zclId.attr(0x0005, 'currentGroup')).not.to.throw(Error);
            expect(() => zclId.attr('genScenes', 2)).not.to.throw(Error);
            expect(() => zclId.attr('genScenes', '2')).not.to.throw(Error);
            expect(() => zclId.attr('genScenes', 0x0002)).not.to.throw(Error);
            expect(() => zclId.attr('genScenes', 'currentGroup')).not.to.throw(Error);
        });
    });

    describe('#.attrType', function() {
        it('should be a function', () => {
            expect(zclId.attrType).to.be.a('function');
        });

        it('should throw TypeError if input cId is not a number and not a string', () => {
            expect(() => zclId.attrType()).to.throw(TypeError);
            expect(() => zclId.attrType(undefined, 2)).to.throw(TypeError);
            expect(() => zclId.attrType(null, 2)).to.throw(TypeError);
            expect(() => zclId.attrType(NaN, 2)).to.throw(TypeError);
            expect(() => zclId.attrType([], 2)).to.throw(TypeError);
            expect(() => zclId.attrType({}, 2)).to.throw(TypeError);
            expect(() => zclId.attrType(true, 2)).to.throw(TypeError);
            expect(() => zclId.attrType(new Date(), 2)).to.throw(TypeError);
            expect(() => zclId.attrType(() => {}, 2)).to.throw(TypeError);

            expect(() => zclId.attrType()).to.throw(TypeError);
            expect(() => zclId.attrType(undefined, '2')).to.throw(TypeError);
            expect(() => zclId.attrType(null, '2')).to.throw(TypeError);
            expect(() => zclId.attrType(NaN, '2')).to.throw(TypeError);
            expect(() => zclId.attrType([], '2')).to.throw(TypeError);
            expect(() => zclId.attrType({}, '2')).to.throw(TypeError);
            expect(() => zclId.attrType(true, '2')).to.throw(TypeError);
            expect(() => zclId.attrType(new Date(), '2')).to.throw(TypeError);
            expect(() => zclId.attrType(() => {}, '2')).to.throw(TypeError);

            expect(() => zclId.attrType()).to.throw(TypeError);
            expect(() => zclId.attrType(undefined, 0x0002)).to.throw(TypeError);
            expect(() => zclId.attrType(null, 0x0002)).to.throw(TypeError);
            expect(() => zclId.attrType(NaN, 0x0002)).to.throw(TypeError);
            expect(() => zclId.attrType([], 0x0002)).to.throw(TypeError);
            expect(() => zclId.attrType({}, 0x0002)).to.throw(TypeError);
            expect(() => zclId.attrType(true, 0x0002)).to.throw(TypeError);
            expect(() => zclId.attrType(new Date(), 0x0002)).to.throw(TypeError);
            expect(() => zclId.attrType(() => {}, 0x0002)).to.throw(TypeError);

            expect(() => zclId.attrType()).to.throw(TypeError);
            expect(() => zclId.attrType(undefined, 'currentGroup')).to.throw(TypeError);
            expect(() => zclId.attrType(null, 'currentGroup')).to.throw(TypeError);
            expect(() => zclId.attrType(NaN, 'currentGroup')).to.throw(TypeError);
            expect(() => zclId.attrType([], 'currentGroup')).to.throw(TypeError);
            expect(() => zclId.attrType({}, 'currentGroup')).to.throw(TypeError);
            expect(() => zclId.attrType(true, 'currentGroup')).to.throw(TypeError);
            expect(() => zclId.attrType(new Date(), 'currentGroup')).to.throw(TypeError);
            expect(() => zclId.attrType(() => {}, 'currentGroup')).to.throw(TypeError);

            expect(() => zclId.attrType(5, 2)).not.to.throw(Error);
            expect(() => zclId.attrType(5, '2')).not.to.throw(Error);
            expect(() => zclId.attrType(5, 0x0002)).not.to.throw(Error);
            expect(() => zclId.attrType(5, 'currentGroup')).not.to.throw(Error);
            expect(() => zclId.attrType('5', 2)).not.to.throw(Error);
            expect(() => zclId.attrType('5', '2')).not.to.throw(Error);
            expect(() => zclId.attrType('5', 0x0002)).not.to.throw(Error);
            expect(() => zclId.attrType('5', 'currentGroup')).not.to.throw(Error);
            expect(() => zclId.attrType(0x0005, 2)).not.to.throw(Error);
            expect(() => zclId.attrType(0x0005, '2')).not.to.throw(Error);
            expect(() => zclId.attrType(0x0005, 0x0002)).not.to.throw(Error);
            expect(() => zclId.attrType(0x0005, 'currentGroup')).not.to.throw(Error);
            expect(() => zclId.attrType('genScenes', 2)).not.to.throw(Error);
            expect(() => zclId.attrType('genScenes', '2')).not.to.throw(Error);
            expect(() => zclId.attrType('genScenes', 0x0002)).not.to.throw(Error);
            expect(() => zclId.attrType('genScenes', 'currentGroup')).not.to.throw(Error);
        });

        it('should throw TypeError if input attrId is not a number and not a string', () => {
            expect(() => zclId.attrType()).to.throw(TypeError);
            expect(() => zclId.attrType(5, undefined)).to.throw(TypeError);
            expect(() => zclId.attrType(5, null)).to.throw(TypeError);
            expect(() => zclId.attrType(5, NaN)).to.throw(TypeError);
            expect(() => zclId.attrType(5, [])).to.throw(TypeError);
            expect(() => zclId.attrType(5, {})).to.throw(TypeError);
            expect(() => zclId.attrType(5, true)).to.throw(TypeError);
            expect(() => zclId.attrType(5, new Date())).to.throw(TypeError);
            expect(() => zclId.attrType(5, () => {})).to.throw(TypeError);

            expect(() => zclId.attrType()).to.throw(TypeError);
            expect(() => zclId.attrType('5', undefined)).to.throw(TypeError);
            expect(() => zclId.attrType('5', null)).to.throw(TypeError);
            expect(() => zclId.attrType('5', NaN)).to.throw(TypeError);
            expect(() => zclId.attrType('5', [])).to.throw(TypeError);
            expect(() => zclId.attrType('5', {})).to.throw(TypeError);
            expect(() => zclId.attrType('5', true)).to.throw(TypeError);
            expect(() => zclId.attrType('5', new Date())).to.throw(TypeError);
            expect(() => zclId.attrType('5', () => {})).to.throw(TypeError);

            expect(() => zclId.attrType()).to.throw(TypeError);
            expect(() => zclId.attrType(0x0005, undefined)).to.throw(TypeError);
            expect(() => zclId.attrType(0x0005, null)).to.throw(TypeError);
            expect(() => zclId.attrType(0x0005, NaN)).to.throw(TypeError);
            expect(() => zclId.attrType(0x0005, [])).to.throw(TypeError);
            expect(() => zclId.attrType(0x0005, {})).to.throw(TypeError);
            expect(() => zclId.attrType(0x0005, true)).to.throw(TypeError);
            expect(() => zclId.attrType(0x0005, new Date())).to.throw(TypeError);
            expect(() => zclId.attrType(0x0005, () => {})).to.throw(TypeError);

            expect(() => zclId.attrType()).to.throw(TypeError);
            expect(() => zclId.attrType('genScenes', undefined)).to.throw(TypeError);
            expect(() => zclId.attrType('genScenes', null)).to.throw(TypeError);
            expect(() => zclId.attrType('genScenes', NaN)).to.throw(TypeError);
            expect(() => zclId.attrType('genScenes', [])).to.throw(TypeError);
            expect(() => zclId.attrType('genScenes', {})).to.throw(TypeError);
            expect(() => zclId.attrType('genScenes', true)).to.throw(TypeError);
            expect(() => zclId.attrType('genScenes', new Date())).to.throw(TypeError);
            expect(() => zclId.attrType('genScenes', () => {})).to.throw(TypeError);

            expect(() => zclId.attrType(5, 2)).not.to.throw(Error);
            expect(() => zclId.attrType(5, '2')).not.to.throw(Error);
            expect(() => zclId.attrType(5, 0x0002)).not.to.throw(Error);
            expect(() => zclId.attrType(5, 'currentGroup')).not.to.throw(Error);
            expect(() => zclId.attrType('5', 2)).not.to.throw(Error);
            expect(() => zclId.attrType('5', '2')).not.to.throw(Error);
            expect(() => zclId.attrType('5', 0x0002)).not.to.throw(Error);
            expect(() => zclId.attrType('5', 'currentGroup')).not.to.throw(Error);
            expect(() => zclId.attrType(0x0005, 2)).not.to.throw(Error);
            expect(() => zclId.attrType(0x0005, '2')).not.to.throw(Error);
            expect(() => zclId.attrType(0x0005, 0x0002)).not.to.throw(Error);
            expect(() => zclId.attrType(0x0005, 'currentGroup')).not.to.throw(Error);
            expect(() => zclId.attrType('genScenes', 2)).not.to.throw(Error);
            expect(() => zclId.attrType('genScenes', '2')).not.to.throw(Error);
            expect(() => zclId.attrType('genScenes', 0x0002)).not.to.throw(Error);
            expect(() => zclId.attrType('genScenes', 'currentGroup')).not.to.throw(Error);
        });
    });

    describe('#.dataType', function() {
        it('should be a function', () => {
            expect(zclId.dataType).to.be.a('function');
        });

        it('should throw TypeError if input type is not a number and not a string', () => {
            expect(() => zclId.dataType()).to.throw(TypeError);
            expect(() => zclId.dataType(undefined)).to.throw(TypeError);
            expect(() => zclId.dataType(null)).to.throw(TypeError);
            expect(() => zclId.dataType(NaN)).to.throw(TypeError);
            expect(() => zclId.dataType([])).to.throw(TypeError);
            expect(() => zclId.dataType({})).to.throw(TypeError);
            expect(() => zclId.dataType(true)).to.throw(TypeError);
            expect(() => zclId.dataType(new Date())).to.throw(TypeError);
            expect(() => zclId.dataType(() => {})).to.throw(TypeError);

            expect(() => zclId.dataType(11)).not.to.throw(Error);
            expect(() => zclId.dataType('11')).not.to.throw(Error);
            expect(() => zclId.dataType(0x0b)).not.to.throw(Error);
            expect(() => zclId.dataType('0x0b')).not.to.throw(Error);
            expect(() => zclId.dataType('DATA32')).not.to.throw(Error);
        });
    });
});