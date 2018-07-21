const expect = require('chai').expect;
const zclId = require('../index');

const clusterDefs = require('../definitions/cluster_defs.json');

const profIdKeys = Object.keys(zclId._common.profileId);
const profIdVals = Object.values(zclId._common.profileId);

const cIdKeys = Object.keys(zclId._common.clusterId);
const cIdVals = Object.values(zclId._common.clusterId);

const foundKeys = Object.keys(zclId._common.foundation);
const foundVals = Object.values(zclId._common.foundation);

const dataTypeKeys = Object.keys(zclId._common.dataType);
const dataTypeVals = Object.values(zclId._common.dataType);

const statusKeys = Object.keys(zclId._common.status);
const statusVals = Object.values(zclId._common.status);

const devIdKeys = {
    HA: Object.keys(zclId._common.haDevId),
};
const devIdVals = {
    HA: Object.values(zclId._common.haDevId),
};

describe('Module Methods Check', () => {
    describe('#.profile', () => {
        it('should get right item by profId string', () => {
            profIdKeys.forEach((pkey) => {
                const hitA = zclId.profile(pkey);
                const hitB = zclId.profileId.get(pkey);

                expect(hitA).not.to.be.undefined;
                expect(hitA.key).to.be.eql(hitB.key);
                expect(hitA.value).to.be.eql(hitB.value);
            });
        });

        it('should get right item by profId number', () => {
            profIdVals.forEach((pval) => {
                const hitA = zclId.profile(pval);
                const hitB = zclId.profileId.get(pval);

                expect(hitA).not.to.be.undefined;
                expect(hitA.key).to.be.eql(hitB.key);
                expect(hitA.value).to.be.eql(hitB.value);
            });
        });

        it('should get undefined if profId not found', () => {
            expect(zclId.profile('xxx')).to.be.undefined;
            expect(zclId.profile(12345)).to.be.undefined;
        });
    });

    describe('#.device', () => {
        it('should get right item by profId string and devId string', () => {
            profIdKeys.forEach((pkey) => {
                if (!devIdKeys[pkey]) return;

                devIdKeys[pkey].forEach((dkey) => {
                    const hitA = zclId.device(pkey, dkey);
                    const hitB = zclId.deviceId[pkey].get(dkey);

                    expect(hitA).not.to.be.undefined;
                    expect(hitA.key).to.be.eql(hitB.key);
                    expect(hitA.value).to.be.eql(hitB.value);
                });
            });
        });

        it('should get right item by profId string and devId number', () => {
            profIdKeys.forEach((pkey) => {
                if (!devIdKeys[pkey]) return;

                devIdVals[pkey].forEach((dval) => {
                    const hitA = zclId.device(pkey, dval);
                    const hitB = zclId.deviceId[pkey].get(dval);

                    expect(hitA).not.to.be.undefined;
                    expect(hitA.key).to.be.eql(hitB.key);
                    expect(hitA.value).to.be.eql(hitB.value);
                });
            });
        });

        it('should get right item by profId number and devId string', () => {
            profIdVals.forEach((pval) => {
                const profId = zclId.profile(pval);

                if (!devIdKeys[profId.key]) return;

                devIdKeys[profId.key].forEach((dkey) => {
                    const hitA = zclId.device(pval, dkey);
                    const hitB = zclId.deviceId[profId.key].get(dkey);

                    expect(hitA).not.to.be.undefined;
                    expect(hitA.key).to.be.eql(hitB.key);
                    expect(hitA.value).to.be.eql(hitB.value);
                });
            });
        });

        it('should get right item by profId number and devId number', () => {
            profIdVals.forEach((pval) => {
                const profId = zclId.profile(pval);

                if (!devIdKeys[profId.key]) return;

                devIdVals[profId.key].forEach((dval) => {
                    const hitA = zclId.device(pval, dval);
                    const hitB = zclId.deviceId[profId.key].get(dval);

                    expect(hitA).not.to.be.undefined;
                    expect(hitA.key).to.be.eql(hitB.key);
                    expect(hitA.value).to.be.eql(hitB.value);
                });
            });
        });

        it('should get undefined if target not found', () => {
            expect(zclId.device('HA', 'dddd')).to.be.undefined;
            expect(zclId.device('HA', 12345)).to.be.undefined;
            expect(zclId.device(3, 'dddd')).to.be.undefined;
            expect(zclId.device(3, 12345)).to.be.undefined;
        });

        it('should get an item if target is found', () => {
            expect(zclId.device('HA', 'doorLock')).not.to.be.undefined;
            expect(zclId.device('HA', 4)).not.to.be.undefined;
            expect(zclId.device(260, 'doorLock')).not.to.be.undefined;
            expect(zclId.device(260, 4)).not.to.be.undefined;
        });
    });

    describe('#.cluster', () => {
        it('should get right item by cId string', () => {
            cIdKeys.forEach((ckey) => {
                const hitA = zclId.cluster(ckey);
                const hitB = zclId.clusterId.get(ckey);

                expect(hitA).not.to.be.undefined;
                expect(hitA.key).to.be.eql(hitB.key);
                expect(hitA.value).to.be.eql(hitB.value);
            });
        });

        it('should get right item by cId number', () => {
            cIdVals.forEach((cval) => {
                const hitA = zclId.cluster(cval);
                const hitB = zclId.clusterId.get(cval);

                expect(hitA).not.to.be.undefined;
                expect(hitA.key).to.be.eql(hitB.key);
                expect(hitA.value).to.be.eql(hitB.value);
            });
        });

        it('should get undefined if cId not found', () => {
            expect(zclId.cluster('xxx')).to.be.undefined;
            expect(zclId.cluster(12345)).to.be.undefined;
        });
    });

    describe('#.foundation', () => {
        it('should get right item by cmdId string', () => {
            foundKeys.forEach((fkey) => {
                const hitA = zclId.foundation(fkey);
                const hitB = zclId.foundationId.get(fkey);

                expect(hitA).not.to.be.undefined;
                expect(hitA.key).to.be.eql(hitB.key);
                expect(hitA.value).to.be.eql(hitB.value);
            });
        });

        it('should get right item by cmdId number', () => {
            foundVals.forEach((fval) => {
                const hitA = zclId.foundation(fval);
                const hitB = zclId.foundationId.get(fval);

                expect(hitA).not.to.be.undefined;
                expect(hitA.key).to.be.eql(hitB.key);
                expect(hitA.value).to.be.eql(hitB.value);
            });
        });

        it('should get undefined if cmdId not found', () => {
            expect(zclId.foundation('xxx')).to.be.undefined;
            expect(zclId.foundation(12345)).to.be.undefined;
        });
    });

    describe('#.functional', () => {
        it('should get right item by cId string and cmdId string', () => {
            cIdKeys.forEach((ckey) => {
                if (!clusterDefs[ckey]) return;

                const cmdIdKeys = Object.keys(clusterDefs[ckey].cmd || {});

                cmdIdKeys.forEach((cmdkey) => {
                    const hitA = zclId.functional(ckey, cmdkey);
                    const hitB = zclId[ckey].cmd.get(cmdkey);

                    expect(hitA).not.to.be.undefined;
                    expect(hitA.key).to.be.eql(hitB.key);
                    expect(hitA.value).to.be.eql(hitB.value);
                });
            });
        });

        it('should get right item by cId string and cmdId number', () => {
            cIdKeys.forEach((ckey) => {
                if (!clusterDefs[ckey]) return;

                const cmdIdVals = Object.keys(clusterDefs[ckey].cmd || {});

                cmdIdVals.forEach((cmdval) => {
                    const hitA = zclId.functional(ckey, cmdval);
                    const hitB = zclId[ckey].cmd.get(cmdval);

                    expect(hitA).not.to.be.undefined;
                    expect(hitA.key).to.be.eql(hitB.key);
                    expect(hitA.value).to.be.eql(hitB.value);
                });
            });
        });

        it('should get right item by cId number and cmdId string', () => {
            cIdVals.forEach((cval) => {
                const cId = zclId.cluster(cval);

                if (!clusterDefs[cId.key]) return;

                const cmdIdKeys = Object.keys(clusterDefs[cId.key].cmd || {});

                cmdIdKeys.forEach((cmdkey) => {
                    const hitA = zclId.functional(cval, cmdkey);
                    const hitB = zclId[cId.key].cmd.get(cmdkey);

                    expect(hitA).not.to.be.undefined;
                    expect(hitA.key).to.be.eql(hitB.key);
                    expect(hitA.value).to.be.eql(hitB.value);
                });
            });
        });

        it('should get right item by cId number and cmdId number', () => {
            cIdVals.forEach((cval) => {
                const cId = zclId.cluster(cval);

                if (!clusterDefs[cId.key]) return;

                const cmdIdVals = Object.values(clusterDefs[cId.key].cmd || {});

                cmdIdVals.forEach((cmdval) => {
                    const hitA = zclId.functional(cval, cmdval);
                    const hitB = zclId[cId.key].cmd.get(cmdval);

                    expect(hitA).not.to.be.undefined;
                    expect(hitA.key).to.be.eql(hitB.key);
                    expect(hitA.value).to.be.eql(hitB.value);
                });
            });
        });

        it('should get undefined if target not found', () => {
            expect(zclId.functional('genOnOff', 'dddd')).to.be.undefined;
            expect(zclId.functional('genOnOff', 12345)).to.be.undefined;
            expect(zclId.functional(3, 'dddd')).to.be.undefined;
            expect(zclId.functional(3, 12345)).to.be.undefined;
        });

        it('should get an item if target is found', () => {
            expect(zclId.functional('genOnOff', 'toggle')).not.to.be.undefined;
            expect(zclId.functional('genOnOff', 2)).not.to.be.undefined;
            expect(zclId.functional(6, 'toggle')).not.to.be.undefined;
            expect(zclId.functional(6, 2)).not.to.be.undefined;
        });
    });

    describe('#.getCmdRsp', () => {
        it('should get right item by cId string and cmdId string', () => {
            cIdKeys.forEach((ckey) => {
                if (!clusterDefs[ckey]) return;

                const cmdIdKeys = Object.keys(clusterDefs[ckey].cmdRsp || {});

                cmdIdKeys.forEach((cmdkey) => {
                    const hitA = zclId.getCmdRsp(ckey, cmdkey);
                    const hitB = zclId[ckey].cmdRsp.get(cmdkey);

                    expect(hitA).not.to.be.undefined;
                    expect(hitA.key).to.be.eql(hitB.key);
                    expect(hitA.value).to.be.eql(hitB.value);
                });
            });
        });

        it('should get right item by cId string and cmdId number', () => {
            cIdKeys.forEach((ckey) => {
                if (!clusterDefs[ckey]) return;

                const cmdIdVals = Object.values(clusterDefs[ckey].cmdRsp || {});

                cmdIdVals.forEach((cmdval) => {
                    const hitA = zclId.getCmdRsp(ckey, cmdval);
                    const hitB = zclId[ckey].cmdRsp.get(cmdval);

                    expect(hitA).not.to.be.undefined;
                    expect(hitA.key).to.be.eql(hitB.key);
                    expect(hitA.value).to.be.eql(hitB.value);
                });
            });
        });

        it('should get right item by cId number and cmdId string', () => {
            cIdVals.forEach((cval) => {
                const cId = zclId.cluster(cval);

                if (!clusterDefs[cId.key]) return;

                const cmdIdKeys = Object.keys(clusterDefs[cId.key].cmdRsp || {});

                cmdIdKeys.forEach((cmdkey) => {
                    const hitA = zclId.getCmdRsp(cval, cmdkey);
                    const hitB = zclId[cId.key].cmdRsp.get(cmdkey);

                    expect(hitA).not.to.be.undefined;
                    expect(hitA.key).to.be.eql(hitB.key);
                    expect(hitA.value).to.be.eql(hitB.value);
                });
            });
        });

        it('should get right item by cId number and cmdId number', () => {
            cIdVals.forEach((cval) => {
                const cId = zclId.cluster(cval);

                if (!clusterDefs[cId.key]) return;

                const cmdIdVals = Object.values(clusterDefs[cId.key].cmdRsp || {});

                cmdIdVals.forEach((cmdval) => {
                    const hitA = zclId.getCmdRsp(cval, cmdval);
                    const hitB = zclId[cId.key].cmdRsp.get(cmdval);

                    expect(hitA).not.to.be.undefined;
                    expect(hitA.key).to.be.eql(hitB.key);
                    expect(hitA.value).to.be.eql(hitB.value);
                });
            });
        });

        it('should get undefined if target not found', () => {
            expect(zclId.getCmdRsp('ssIasZone', 'dddd')).to.be.undefined;
            expect(zclId.getCmdRsp('ssIasZone', 12345)).to.be.undefined;
            expect(zclId.getCmdRsp(1280, 'dddd')).to.be.undefined;
            expect(zclId.getCmdRsp(1280, 12345)).to.be.undefined;
        });

        it('should get an item if target is found', () => {
            expect(zclId.getCmdRsp('ssIasZone', 'enrollReq')).not.to.be.undefined;
            expect(zclId.getCmdRsp('ssIasZone', 1)).not.to.be.undefined;
            expect(zclId.getCmdRsp(1280, 'enrollReq')).not.to.be.undefined;
            expect(zclId.getCmdRsp(1280, 1)).not.to.be.undefined;
        });
    });

    describe('#.attr', () => {
        it('should get right item by cId string and attrId string', () => {
            cIdKeys.forEach((ckey) => {
                if (!clusterDefs[ckey]) return;

                const attrIdKeys = Object.keys(clusterDefs[ckey].attrId || {});

                attrIdKeys.forEach((akey) => {
                    const hitA = zclId.attr(ckey, akey);
                    const hitB = zclId[ckey].attr.get(akey);

                    expect(hitA).not.to.be.undefined;
                    expect(hitA.key).to.be.eql(hitB.key);
                    expect(hitA.value).to.be.eql(hitB.value);
                });
            });
        });

        it('should get right item by cId string and attrId number', () => {
            cIdKeys.forEach((ckey) => {
                if (!clusterDefs[ckey]) return;

                const attrIdVals = Object.values(clusterDefs[ckey].attrId || {})
                    .map((attr) => attr.id);

                attrIdVals.forEach((aval) => {
                    const hitA = zclId.attr(ckey, aval);
                    const hitB = zclId[ckey].attr.get(aval);

                    expect(hitA).not.to.be.undefined;
                    expect(hitA.key).to.be.eql(hitB.key);
                    expect(hitA.value).to.be.eql(hitB.value);
                });
            });
        });

        it('should get right item by cId number and attrId string', () => {
            cIdVals.forEach((cval) => {
                const cId = zclId.cluster(cval);

                if (!clusterDefs[cId.key]) return;

                const attrIdKeys = Object.keys(clusterDefs[cId.key].attrId || {});

                attrIdKeys.forEach((akey) => {
                    const hitA = zclId.attr(cval, akey);
                    const hitB = zclId[cId.key].attr.get(akey);

                    expect(hitA).not.to.be.undefined;
                    expect(hitA.key).to.be.eql(hitB.key);
                    expect(hitA.value).to.be.eql(hitB.value);
                });
            });
        });

        it('should get right item by cId number and attrId number', () => {
            cIdVals.forEach((cval) => {
                const cId = zclId.cluster(cval);

                if (!clusterDefs[cId.key]) return;

                const attrIdVals = Object.values(clusterDefs[cId.key].attrId || {})
                    .map((attr) => attr.id);

                attrIdVals.forEach((aval) => {
                    const hitA = zclId.attr(cval, aval);
                    const hitB = zclId[cId.key].attr.get(aval);

                    expect(hitA).not.to.be.undefined;
                    expect(hitA.key).to.be.eql(hitB.key);
                    expect(hitA.value).to.be.eql(hitB.value);
                });
            });
        });

        it('should get undefined if target not found', () => {
            expect(zclId.attr('genBasic', 'dddd')).to.be.undefined;
            expect(zclId.attr('genBasic', 12345)).to.be.undefined;
            expect(zclId.attr(3, 'dddd')).to.be.undefined;
            expect(zclId.attr(3, 12345)).to.be.undefined;
        });

        it('should get an item if target is found', () => {
            expect(zclId.attr('genBasic', 'zclVersion')).not.to.be.undefined;
            expect(zclId.attr('genBasic', 0)).not.to.be.undefined;
            expect(zclId.attr(0, 'zclVersion')).not.to.be.undefined;
            expect(zclId.attr(0, 0)).not.to.be.undefined;
        });
    });

    describe('#.attrType', () => {
        it('should get right item by cId string and attrId string', () => {
            cIdKeys.forEach((ckey) => {
                if (!clusterDefs[ckey]) return;

                const attrIdKeys = Object.keys(clusterDefs[ckey].attrId || {});

                attrIdKeys.forEach((akey) => {
                    const dataType = zclId[ckey].attrType.get(akey);
                    const hitA = zclId.attrType(ckey, akey);
                    const hitB = zclId.dataType(dataType.value);

                    expect(hitA).not.to.be.undefined;
                    expect(hitA.key).to.be.eql(hitB.key);
                    expect(hitA.value).to.be.eql(hitB.value);
                });
            });
        });

        it('should get right item by cId string and attrId number', () => {
            cIdKeys.forEach((ckey) => {
                if (!clusterDefs[ckey]) return;

                const attrIdVals = Object.values(clusterDefs[ckey].attrId || {})
                    .map((attr) => attr.id);

                attrIdVals.forEach((aval) => {
                    const attrId = zclId.attr(ckey, aval);
                    const dataType = zclId[ckey].attrType.get(attrId.key);
                    const hitA = zclId.attrType(ckey, aval);
                    const hitB = zclId.dataType(dataType.value);

                    expect(hitA).not.to.be.undefined;
                    expect(hitA.key).to.be.eql(hitB.key);
                    expect(hitA.value).to.be.eql(hitB.value);
                });
            });
        });

        it('should get right item by cId number and attrId string', () => {
            cIdVals.forEach((cval) => {
                const cId = zclId.cluster(cval);

                if (!clusterDefs[cId.key]) return;

                const attrIdKeys = Object.keys(clusterDefs[cId.key].attrId | {});

                attrIdKeys.forEach((akey) => {
                    const dataType = zclId[cId.key].attrType.get(akey);
                    const hitA = zclId.attrType(cval, akey);
                    const hitB = zclId.dataType(dataType.value);

                    expect(hitA).not.to.be.undefined;
                    expect(hitA.key).to.be.eql(hitB.key);
                    expect(hitA.value).to.be.eql(hitB.value);
                });
            });
        });

        it('should get right item by cId number and attrId number', () => {
            cIdVals.forEach((cval) => {
                const cId = zclId.cluster(cval);

                if (!clusterDefs[cId.key]) return;

                const attrIdVals = Object.values(clusterDefs[cId.key].attrId)
                    .map((attr) => attr.id);

                attrIdVals.forEach((aval) => {
                    const attrId = zclId.attr(cval, aval);
                    const dataType = zclId[cId.key].attrType.get(attrId.key);
                    const hitA = zclId.attrType(cval, aval);
                    const hitB = zclId.dataType(dataType.value);

                    expect(hitA).not.to.be.undefined;
                    expect(hitA.key).to.be.eql(hitB.key);
                    expect(hitA.value).to.be.eql(hitB.value);
                });
            });
        });

        it('should get undefined if target not found', () => {
            expect(zclId.attrType('genBasic', 'dddd')).to.be.undefined;
            expect(zclId.attrType('genBasic', 12345)).to.be.undefined;
            expect(zclId.attrType(3, 'dddd')).to.be.undefined;
            expect(zclId.attrType(3, 12345)).to.be.undefined;
        });

        it('should get an item if target is found', () => {
            expect(zclId.attr('genBasic', 'zclVersion')).not.to.be.undefined;
            expect(zclId.attr('genBasic', 0)).not.to.be.undefined;
            expect(zclId.attr(0, 'zclVersion')).not.to.be.undefined;
            expect(zclId.attr(0, 0)).not.to.be.undefined;
        });
    });

    describe('#.dataType', () => {
        it('should get right item by type string', () => {
            dataTypeKeys.forEach((dkey) => {
                const hitA = zclId.dataType(dkey);
                const hitB = zclId.dataTypeId.get(dkey);

                expect(hitA).not.to.be.undefined;
                expect(hitA.key).to.be.eql(hitB.key);
                expect(hitA.value).to.be.eql(hitB.value);
            });
        });

        it('should get right item by type number', () => {
            dataTypeVals.forEach((dval) => {
                const hitA = zclId.dataType(dval);
                const hitB = zclId.dataTypeId.get(dval);

                expect(hitA).not.to.be.undefined;
                expect(hitA.key).to.be.eql(hitB.key);
                expect(hitA.value).to.be.eql(hitB.value);
            });
        });

        it('should get undefined if type not found', () => {
            expect(zclId.dataType('xxx')).to.be.undefined;
            expect(zclId.dataType(12345)).to.be.undefined;
        });
    });

    describe('#.status', () => {
        it('should get right item by type string', () => {
            statusKeys.forEach((dkey) => {
                const hitA = zclId.status(dkey);
                const hitB = zclId.statusId.get(dkey);

                expect(hitA).not.to.be.undefined;
                expect(hitA.key).to.be.eql(hitB.key);
                expect(hitA.value).to.be.eql(hitB.value);
            });
        });

        it('should get right item by type number', () => {
            statusVals.forEach((dval) => {
                const hitA = zclId.status(dval);
                const hitB = zclId.statusId.get(dval);

                expect(hitA).not.to.be.undefined;
                expect(hitA.key).to.be.eql(hitB.key);
                expect(hitA.value).to.be.eql(hitB.value);
            });
        });

        it('should get undefined if type not found', () => {
            expect(zclId.status('xxx')).to.be.undefined;
            expect(zclId.status(12345)).to.be.undefined;
        });
    });

    describe('#.attrList', () => {
        it('should get right list by cluster string id', () => {
            expect(zclId.attrList('genDeviceTempCfg')).to.be.deep.equal([
                {
                    attrId: 0,
                    dataType: 41,
                },
                {
                    attrId: 1,
                    dataType: 41,
                },
                {
                    attrId: 2,
                    dataType: 41,
                },
                {
                    attrId: 3,
                    dataType: 33,
                },
                {
                    attrId: 16,
                    dataType: 24,
                },
                {
                    attrId: 17,
                    dataType: 41,
                },
                {
                    attrId: 18,
                    dataType: 41,
                },
                {
                    attrId: 19,
                    dataType: 34,
                },
                {
                    attrId: 20,
                    dataType: 34,
                },
            ]);
        });

        it('should get right list by cluster numeric id', () => {
            expect(zclId.attrList(2)).to.be.deep.equal([
                {
                    attrId: 0,
                    dataType: 41,
                },
                {
                    attrId: 1,
                    dataType: 41,
                },
                {
                    attrId: 2,
                    dataType: 41,
                },
                {
                    attrId: 3,
                    dataType: 33,
                },
                {
                    attrId: 16,
                    dataType: 24,
                },
                {
                    attrId: 17,
                    dataType: 41,
                },
                {
                    attrId: 18,
                    dataType: 41,
                },
                {
                    attrId: 19,
                    dataType: 34,
                },
                {
                    attrId: 20,
                    dataType: 34,
                },
            ]);
        });


        it('should be undefined if cluster not found', () => {
            expect(zclId.attrList('genDeviceTempCfgxx')).to.be.undefined;
        });
    });
});