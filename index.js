var clusterId,
    clusterAttrs;

var zcl = {};

zcl.clusterId = function (cId) {
    var item = clusterId.get(cId);
};

zcl.attrId = function (cId, attrId) {
    var clusterAttr = clusterAttrs[cId];

    if (clusterAttr)
        return clusterAttr.get(attrId);
};

zcl.dataType = function (type) {
    return dataType.get(type);
};

zcl.profId = function (prof) {
    return profId.get(prof);
};

zcl.foundationCmd = function (cmd) {
    return fcmd.get(cmd);
};

zcl.deviceId = function (prof, devId) {
    var profIdStr = zcl.profId(prof),
        dId;

    if (profIdStr)
        profIdStr = profIdStr.key;
     
    dId = deviceId[prof];

    if (dId)
        return dId.get(devId);
};

zcl.direction = function (dir) {
    return direction.get(dir);
};

zcl.acl = function (acl) {
    return acl.get(acl);
};

zcl.cmd = function (cId, cmdId) {

};

zcl.cmdRsp = function (cId, rspId) {

};

zcl.commands = function (cId) {
    
};

module.exports = zcl;
