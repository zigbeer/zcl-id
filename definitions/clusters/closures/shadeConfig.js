var shadeConfig = {
    attrId: {
        // Shade information Attributes set
        'PhysicalClosedLimit':      { id: 0x0000, type: 'UINT16' },
        'MotorStepSize':            { id: 0x0001, type: 'UINT8' },
        'Status':                   { id: 0x0002, type: 'BITMAP8' },
          // Shade settings Attributes set
        'LosedLimit':               { id: 0x0010, type: 'UINT16' },
        'Mode':                     { id: 0x0012, type: 'ENUM8' }

    },
    cmd: null,
    cmdRsp: null
};

module.exports = shadeConfig;
