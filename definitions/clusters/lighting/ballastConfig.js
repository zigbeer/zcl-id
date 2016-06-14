var ballastConfig = {
    attrId: {
        // Ballast Information Attribute set
        'PhysicalMinLevel':             { id: 0x0000, type: 'UINT8' },
        'PhysicalMaxLevel':             { id: 0x0001, type: 'UINT8' },
        'BallastStatus':                { id: 0x0002, type: 'BITMAP8' },
        // Ballast Settings Attributes set
        'MinLevel':                     { id: 0x0010, type: 'UINT8' },
        'MaxLevel':                     { id: 0x0011, type: 'UINT8' },
        'PowerOnLevel':                 { id: 0x0012, type: 'UINT8' },
        'PowerOnFadeTime':              { id: 0x0013, type: 'UINT16' },
        'IntrinsicBallastFactor':       { id: 0x0014, type: 'UINT8' },
        'BallastFactorAdjustment':      { id: 0x0015, type: 'UINT8' },
        // Lamp Information Attributes set
        'LampQuantity':                 { id: 0x0020, type: 'UINT8' },
        // Lamp Settings Attributes set
        'LampType':                     { id: 0x0030, type: 'CHAR_STR' },
        'LampManufacturer':             { id: 0x0031, type: 'CHAR_STR' },
        'LampRatedHours':               { id: 0x0032, type: 'UINT24' },
        'LampBurnHours':                { id: 0x0033, type: 'UINT24' },
        'LampAlarmMode':                { id: 0x0034, type: 'BITMAP8' },
        'LampBurnHoursTripPoint':       { id: 0x0035, type: 'UINT24' }

    },
    cmd: null,
    cmdRsp: null
};

module.exports = ballastConfig;