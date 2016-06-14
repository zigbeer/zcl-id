var iasZone = {
    attrId: {
        // Zone Information
        'ZoneState':                         { id: 0x0000, type: 'ENUM8'     },
        'ZoneType':                          { id: 0x0001, type: 'ENUM16'    },
        'ZoneStatus':                        { id: 0x0002, type: 'BITMAP16'  },
        // Zone Settings
        'IasCieAddr':                        { id: 0x0010, type: 'IEEE_ADDR' },
        'ZoneId':                            { id: 0x0011, type: 'UINT8'     },
        'NumZoneSensitivityLevelsSupported': { id: 0x0012, type: 'UINT8'     },
        'CurrentZoneSensitivityLevel':       { id: 0x0013, type: 'UINT8'     }
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
