var occupancySensing = {
    attrId: {
        // Occupancy Sensor Information
        'occupancy':               { id: 0x0000, type: 'BITMAP8' },
        'occupancySensorType':     { id: 0x0001, type: 'ENUM8' },
        // PIR Configuration
        'pirOToUDelay':            { id: 0x0010, type: 'UINT16' },
        'pirUToODelay':            { id: 0x0011, type: 'UINT16' },
        'pirUToOThreshold':        { id: 0x0012, type: 'UINT8'  },
        // Ultrasonic Configuration
        'ultrasonicOToUDelay':     { id: 0x0020, type: 'UINT16' },
        'ultrasonicUToODelay':     { id: 0x0021, type: 'UINT16' },
        'ultrasonicUToOThreshold': { id: 0x0022, type: 'UINT8' }
    },
    cmd: null,
    cmdRsp: null
};

module.exports = occupancySensing;
