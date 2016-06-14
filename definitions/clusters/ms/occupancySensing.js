var occupancySensing = {
    attrId: {
        // Occupancy Sensor Information
        'occupancy':               { id: 0x0000, type: 'BITMAP8', acl: READ },
        'occupancySensorType':     { id: 0x0001, type: 'ENUM8'  , acl: READ },
        // PIR Configuration
        'pirOToUDelay':            { id: 0x0010, type: 'UINT16' , acl: READ | WRITE },
        'pirUToODelay':            { id: 0x0011, type: 'UINT16' , acl: READ | WRITE },
        'pirUToOThreshold':        { id: 0x0012, type: 'UINT8'  , acl: READ | WRITE },
        // Ultrasonic Configuration
        'ultrasonicOToUDelay':     { id: 0x0020, type: 'UINT16' , acl: READ | WRITE },
        'ultrasonicUToODelay':     { id: 0x0021, type: 'UINT16' , acl: READ | WRITE },
        'ultrasonicUToOThreshold': { id: 0x0022, type: 'UINT8'  , acl: READ | WRITE }
    },
    cmd: null,
    cmdRsp: null
};

module.exports = occupancySensing;
