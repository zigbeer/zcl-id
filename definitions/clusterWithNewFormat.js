const _ = require('busyman');
const Enum = require('enum');

function clusterWithNewFormat(cluster) {
    const cObj = {
        attr: null,
        attrType: null,
        cmd: null,
        cmdRsp: null,
    };

    const attrObj = {};
    const attrTypeObj = {};

    _.forEach(cluster.attrId, function(attrInfo, attr) {
        attrObj[attr] = attrInfo.id;
        attrTypeObj[attr] = attrInfo.type;
    });

    cObj.attr = new Enum(attrObj);
    cObj.attrType = new Enum(attrTypeObj);

    if (cluster.cmd !== null) {
        cObj.cmd = new Enum(cluster.cmd);
    }

    if (cluster.cmdRsp !== null) {
        cObj.cmdRsp = new Enum(cluster.cmdRsp);
    }

    cluster.attrId = null;
    cluster.cmd = null;
    cluster.cmdRsp = null;
    cluster = null;

    return cObj;
}

module.exports = clusterWithNewFormat;