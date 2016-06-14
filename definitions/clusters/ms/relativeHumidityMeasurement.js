var relativeHumidityMeasurement = {
    attrId: {
        'measuredValue':    { id: 0x0000, type: 'UINT16' },
        'minMeasuredValue': { id: 0x0001, type: 'UINT16' },
        'maxMeasuredValue': { id: 0x0002, type: 'UINT16' },
        'tolerance':        { id: 0x0003, type: 'UINT16' }
    },
    cmd: null,
    cmdRsp: null
};

module.exports = relativeHumidityMeasurement;
