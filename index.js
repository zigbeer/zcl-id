var zclId = {
    common: require('./definitions/common.js')
};

var zclDefs = {
    common:   require('./definitions/common.js'),
    general:  require('./definitions/clusters/general/general.js'),
    closures: require('./definitions/clusters/closures/closures.js'),
    hvac:     require('./definitions/clusters/hvac/hvac.js'),
    lighting: require('./definitions/clusters/lighting/lighting.js'),
    ms:       require('./definitions/clusters/ms/ms.js'),
    ss:       require('./definitions/clusters/ss/ss.js'),
    pi:       require('./definitions/clusters/pi/pi.js'),
    ha:       require('./definitions/clusters/ha/ha.js'),
    se:       require('./definitions/clusters/se/se.js'),
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
    // { key: 'genBasic', value: 0 }
};
zclId.foundation = function (cmd) {
    // cmd: String | Number
    // { key: 'read', value: 0 }
};
zclId.functional = function (cId, cmdId) {
    // cId: String | Number, cmdId: String | Number
    // { key: 'view', value: 1 }
};
zclId.getCmdRsp = function (cId, rspId) {    // TODO
    // cId: String | Number, rspId: String | Number
    // { key: 'viewRsp', value: 1 }
};

zclId.attr = function (cId, attrId) {
    // cId: String | Number, attrId: String | Number
    // { key: 'modelId', value: 5 }
};

zclId.attrType = function (cId, attrId) {
    // cId: String | Number, attrId: String | Number
    // { key: 'CHAR_STR', value: 66 }
};

zclId.dataType = function (type) {
    // type: String | Number
    // { key: 'DATA8', value: 8 }
};

// zcl.getProfId = function (profId) {
//     var prof = zclDefs.common.profId.get(profId);
//     return prof ? prof : undefined;  // 'HA': 0x0104
//     // { name, id }
// };

// zcl.getDeviceId = function (prof, devId) {
//     var profIdStr = zcl.profId(prof),
//         dId;

//     if (profIdStr)
//         profIdStr = profIdStr.key;
     
//     dId = deviceId[prof];

//     if (dId)
//         return dId.get(devId);  // 'ON_OFF_SWITCH': 0x0000
//     // { name, id }
// };

// zcl.getClusterId = function (cId) {
//     var cluster = zclDefs.common.clusterId.get(cId);
//     return cluster ? cluster : undefined;  // 'genBasic': 0x0000,
//     // { name, id }
// };

// /*zcl.attrId = function (cId, attrId) {
//     var clusterAttr = clusterAttrs[cId];

//     if (clusterAttr)
//         return clusterAttr.get(attrId);
// };*/

// zcl.getDataType = function (type) {
//     // 'DATA8': 0x08, 'DATA16': 0x09, 'DATA24': 0x0a,, ...
//     return dataType.get(type);
//     // { name, id }
// };


// zcl.getFoundationCmd = function (cmd) {
//     // "read": 0, "readRsp": 1, ...
//     return fcmd.get(cmd);
// };

// zcl.getDirection = function (dir) {
//     // "clientToServer": 0, "serverToClient": 1
//     return direction.get(dir);
// };

// zcl.getCmdDirection = function (dir) {
//     // 'SERVER_GENERATED': 0x01, 'CLIENT_GENERATED': 0x02, ...
// };

// /*zcl.getAcl = function (acl) {
//     // aclMask, 'READ': 0x01, 'WRITE': 0x02, ...
//     return acl.get(acl);
// };*/

// /*zcl.commands = function (cId) {
// };*/

// zcl.getCluster = function (cId) {
//     // return: {
//     //     attrId: {
//     //         'ZoneStatus': { id: 0x0002, type: 'BITMAP16'  }, ...
//     //     },
//     //     cmd: {
//     //         'enrollRsp': 0x00, ...
//     //     },
//     //     cmdRsp: {
//     //         'statusChangeNotification': 0x00, ...
//     //     }
//     // }
// };

// zcl.getAttr = function (cId, attrId) {
//     // Attr: { id: 0x0002, type: 'BITMAP16' }

//     //{ name, id, type }
// };

// /*zcl.getAttrId = function (cId, attrId) {
//     var Attr = zcl.getAttr(cId, attrId);
//     return Attr.value.id;      // 0x0002
// };

// zcl.getAttrType = function (cId, attrId) {
//     var Attr = zcl.getAttr(cId, attrId);
//     return Attr.value.type;    // 'BITMAP16'
// };*/

// zcl.getCmd = function (cId, cmdId) {
//     var cmds = zcl.getCluster(cId).cmd;
//     return cmds.get(cmdId);    // 'add': 0x00
//     // { name, id }
// };

// zcl.getCmdRsp = function (cId, rspId) {
//     var cmdRsps = zcl.getCluster(cId).cmdRsp;
//     return cmdRsps.get(cmdId); // 'addRsp': 0x00
//     // { name, id }
// };

module.exports = zclId;
