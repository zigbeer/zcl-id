var fs = require('fs'),
    _ = require('busyman');

var clusterDefs = JSON.parse(fs.readFileSync(__dirname + '/cluster_defs.json')),
    clusterWithNewFormat = require('./definitions/clusterWithNewFormat');

var zclId = {};

var zclDefs = {
    common: require('./definitions/common.js')
};

function isValidArgType(param) {
    var isValid = true;

    if (typeof param !== 'number' && typeof param !== 'string') {
        isValid = false;
    } else if (typeof param === 'number') {
        isValid = !isNaN(param);
    }

    return isValid;
}

zclId._getCluster = function (cluster) {
    if (!zclDefs[cluster]) {
        zclDefs[cluster] = clusterWithNewFormat(clusterDefs[cluster]);
        clusterDefs[cluster] = null;
    }

    return zclDefs[cluster];
};

zclId.profile = function (profId) {
    // profId: String | Number
    if (!isValidArgType(profId))
        throw new TypeError('profId should be a number or a string.');

    var profNumber = parseInt(profId),
        profItem;

    if (!isNaN(profNumber))
        profId = profNumber;

    profItem = zclDefs.common.profileId.get(profId);

    return { key: profItem.key, value: profItem.value };    // { key: 'HA', value: 260 }
};

zclId.device = function (profId, devId) {
    // profId: String | Number, devId: String | Number
    if (!isValidArgType(profId))
        throw new TypeError('profId should be a number or a string.');
    if (!isValidArgType(devId))
        throw new TypeError('devId should be a number or a string.');

    var profNumber = parseInt(profId),
        devNumber = parseInt(devId),
        profItem,
        devItem;

    if (!isNaN(profNumber))
        profId = profNumber;
    if (!isNaN(devNumber))
        devId = devNumber;

    devItem = zclDefs.common.deviceId.get(devId);

    return { key: devItem.key, value: devItem.value };      // { key: 'ON_OFF_SWITCH', value: 0 }
};

zclId.cluster = function (cId) {
    // cId: String | Number
    if (!isValidArgType(cId))
        throw new TypeError('cId should be a number or a string.');

    var cNumber = parseInt(cId),
        cItem;

    if (!isNaN(cNumber))
        cId = cNumber;

    cItem = zclDefs.common.clusterId.get(cId);

    return { key: cItem.key, value: cItem.value };          // { key: 'genBasic', value: 0 }
};

zclId.foundation = function (cmd) {
    // cmd: String | Number
    if (!isValidArgType(cmd))
        throw new TypeError('cmd should be a number or a string.');

    var cmdNumber = parseInt(cmd),
        cmdItem;

    if (!isNaN(cmdNumber))
        cmd = cmdNumber;

    cmdItem = zclDefs.common.foundation.get(cmd);

    return { key: cmdItem.key, value: cmdItem.value };      // { key: 'read', value: 0 }
};

zclId.functional = function (cId, cmdId) {
    // cId: String | Number, cmdId: String | Number
    if (!isValidArgType(cId))
        throw new TypeError('cId should be a number or a string.');
    if (!isValidArgType(cmdId))
        throw new TypeError('cmdId should be a number or a string.');

    var cNumber = parseInt(cId),
        cmdNumber = parseInt(cmdId),
        cItem,
        cmdItem;

    if (!isNaN(cNumber))
        cId = cNumber;
    if (!isNaN(cmdNumber))
        cmdId = cmdNumber;

    cItem = zclDefs.common.clusterId.get(cId);
    cInfo = this._getCluster(cItem.key);

    cmdItem = cInfo.cmd.get(cmdId);

    return { key: cmdItem.key, value: cmdItem.value };      // { key: 'view', value: 1 }
};

zclId.getCmdRsp = function (cId, rspId) {    // TODO
    // cId: String | Number, rspId: String | Number
    if (!isValidArgType(cId))
        throw new TypeError('cId should be a number or a string.');
    if (!isValidArgType(rspId))
        throw new TypeError('rspId should be a number or a string.');

    var cNumber = parseInt(cId),
        cmdNumber = parseInt(rspId),
        cItem,
        cmdItem,
        cInfo;

    if (!isNaN(cNumber))
        cId = cNumber;
    if (!isNaN(cmdNumber))
        rspId = cmdNumber;

    cItem = zclDefs.common.clusterId.get(cId);
    cInfo = this._getCluster(cItem.key);

    cmdItem = cInfo.cmdRsp.get(rspId);

    return { key: cmdItem.key, value: cmdItem.value };      // { key: 'viewRsp', value: 1 }
};

zclId.attr = function (cId, attrId) {
    // cId: String | Number, attrId: String | Number
    if (!isValidArgType(cId))
        throw new TypeError('cId should be a number or a string.');
    if (!isValidArgType(attrId))
        throw new TypeError('attrId should be a number or a string.');

    var cNumber = parseInt(cId),
        attrNumber = parseInt(attrId),
        cItem,
        attrItem,
        cInfo;

    if (!isNaN(cNumber))
        cId = cNumber;
    if (!isNaN(attrNumber))
        attrId = attrNumber;

    cItem = zclDefs.common.clusterId.get(cId);
    cInfo = this._getCluster(cItem.key);

    attrItem = cInfo.attr.get(attrId);

    return { key: attrItem.key, value: attrItem.value };    // { key: 'modelId', value: 5 }
};

zclId.attrType = function (cId, attrId) {
    // cId: String | Number, attrId: String | Number
    if (!isValidArgType(cId))
        throw new TypeError('cId should be a number or a string.');
    if (!isValidArgType(attrId))
        throw new TypeError('attrId should be a number or a string.');

    var cNumber = parseInt(cId),
        attrNumber = parseInt(attrId),
        cItem,
        attrItem,
        cInfo;

    if (!isNaN(cNumber))
        cId = cNumber;
    if (!isNaN(attrNumber))
        attrId = attrNumber;

    var attrName = zclId.attr(cId, attrId).key;

    cItem = zclDefs.common.clusterId.get(cId);
    cInfo = this._getCluster(cItem.key);

    attrItem = cInfo.attrType.get(attrName);

    return { key: attrItem.key, value: attrItem.value };    // { key: 'CHAR_STR', value: 66 }
};

zclId.dataType = function (type) {
    // type: String | Number
    if (!isValidArgType(type))
        throw new TypeError('dataType should be a number or a string.');

    var typeNumber = parseInt(type),
        typeItem;

    if (!isNaN(typeNumber))
        type = typeNumber;

    typeItem = zclDefs.common.dataType.get(type);

    return { key: typeItem.key, value: typeItem.value };    // { key: 'DATA8', value: 8 }
};

module.exports = zclId;
