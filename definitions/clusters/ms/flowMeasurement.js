var flowMeasurement = {
    attrId: {
        'measuredValue':    { id: 0x0000, type: 'UINT16', acl: READ },
        'minMeasuredValue': { id: 0x0001, type: 'UINT16', acl: READ },
        'maxMeasuredValue': { id: 0x0002, type: 'UINT16', acl: READ },
        'tolerance':        { id: 0x0003, type: 'UINT16', acl: READ }
    },
    cmd: null,
    cmdRsp: null
};

module.exports = flowMeasurement;
