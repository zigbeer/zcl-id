var pressureMeasurement = {
    attrId: {
        // Pressure Measurement Information
        'measuredValue':    { id: 0x0000, type: 'INT16' },
        'minMeasuredValue': { id: 0x0001, type: 'INT16' },
        'maxMeasuredValue': { id: 0x0002, type: 'INT16' },
        'tolerance':        { id: 0x0003, type: 'UINT16' }
    },
    cmd: null,
    cmdRsp: null
};

module.exports = pressureMeasurement;
