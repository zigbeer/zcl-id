var iasZone = {
    attrId: {
        // Zone Information
        'zoneState':                         { id: 0x0000, type: 'ENUM8'     },
        'zoneType':                          { id: 0x0001, type: 'ENUM16'    },
        'zoneStatus':                        { id: 0x0002, type: 'BITMAP16'  },
        // Zone Settings
        'iasCieAddr':                        { id: 0x0010, type: 'IEEE_ADDR' },
        'zoneId':                            { id: 0x0011, type: 'UINT8'     },
        'numZoneSensitivityLevelsSupported': { id: 0x0012, type: 'UINT8'     },
        'currentZoneSensitivityLevel':       { id: 0x0013, type: 'UINT8'     }
    },
    cmd: {
        'enrollRsp': 0x00,
        'initNormalOpMode': 0x01,
        'initTestMode': 0x02
    },
    cmdRsp: {
        'statusChangeNotification': 0x00,
        'enrollReq': 0x01
    }
};

module.exports = iasZone;
