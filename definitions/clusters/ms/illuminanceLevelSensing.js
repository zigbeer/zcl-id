var illuminanceLevelSensing = {
    attrId: {
        // Illuminance Level Sensing Information
        'levelStatus':            { id: 0x0000, type: 'ENUM8' , acl: READ },
        'lightSensorType':        { id: 0x0001, type: 'ENUM8' , acl: READ },
        // Illuminance Level Sensing Settings
        'illuminanceTargetLevel': { id: 0x0010, type: 'UINT16', acl: READ | WRITE }
    },
    cmd: null,
    cmdRsp: null
};

module.exports = illuminanceLevelSensing;
