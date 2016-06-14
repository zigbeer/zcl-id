var piMultistateInputBacnetReg = {
    attrId: {
        'deviceType':     { id: 0x001F, type: 'CHAR_STR'    },
        'objectId':       { id: 0x004B, type: 'BAC_OID'     },
        'objectName':     { id: 0x004D, type: 'CHAR_STR'    },
        'objectType':     { id: 0x004F, type: 'ENUM16'      },
        'profileName':    { id: 0x00A8, type: 'CHAR_STR'    }
    },
    cmd: null,
    cmdRsp: null
};

module.exports = piMultistateInputBacnetReg;
