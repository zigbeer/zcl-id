var illuminanceLevelSensing = {
    attrId: {
        // Illuminance Level Sensing Information
        'levelStatus':            { id: 0x0000, type: 'ENUM8' },
        'lightSensorType':        { id: 0x0001, type: 'ENUM8' },
        // Illuminance Level Sensing Settings
        'illuminanceTargetLevel': { id: 0x0010, type: 'UINT16' }
    },
    cmd: null,
    cmdRsp: null
};

module.exports = illuminanceLevelSensing;
