var dihumidificationControl = {
    attrId: {
        // Dehumidification Information
        'relativeHumidity':     { id: 0x0000, type: 'UINT8' },
        'dehumidCooling':       { id: 0x0001, type: 'UINT8' },
        // Dehumidification Settings
        'rhDehumidSetpoint':    { id: 0x0010, type: 'UINT8' },
        'relativeHumidityMode': { id: 0x0011, type: 'ENUM8' },
        'dehumidLockout':       { id: 0x0012, type: 'ENUM8' },
        'dehumidHysteresis':    { id: 0x0013, type: 'UINT8' },
        'dehumidMaxCool':       { id: 0x0014, type: 'UINT8' },
        'relativeHumidDisplay': { id: 0x0015, type: 'ENUM8' }
    },
    cmd: null,
    cmdRsp: null
};

module.exports = dihumidificationControl;