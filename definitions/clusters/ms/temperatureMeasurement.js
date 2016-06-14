var temperatureMeasurement = {
    attrId: {
        // Temperature Measurement Information
        'measuredValue':     { id: 0x0000, type: 'INT16' , acl: READ },
        'minMeasuredValue':  { id: 0x0001, type: 'INT16' , acl: READ },
        'maxMeasuredValue':  { id: 0x0002, type: 'INT16' , acl: READ },
        'tolerance':         { id: 0x0003, type: 'UINT16', acl: READ },
        // Temperature Measurement Settings
        'minPercentChange':  { id: 0x0010, type: 'TODO'  , acl: READ | WRITE },
        'minAbsoluteChange': { id: 0x0011, type: 'TODO'  , acl: READ | WRITE }
    },
    cmd: null,
    cmdRsp: null
};

module.exports = temperatureMeasurement;
