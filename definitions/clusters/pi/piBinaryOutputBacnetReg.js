var piBinaryOutputBacnetReg = {
    attrId: {
        'changeOfStateCount': { id: 0x000F, type: 'UINT32'   },
        'changeOfStateTime':  { id: 0x0010, type: 'STRUCT'   },
        'deviceType':         { id: 0x001F, type: 'CHAR_STR' },
        'elapsedActiveTime':  { id: 0x0021, type: 'UINT32'   },
        'feedBackValue':      { id: 0x0028, type: 'ENUM8'    },
        'objectIdentifier':   { id: 0x004B, type: 'BAC_OID'  },
        'objectName':         { id: 0x004D, type: 'CHAR_STR' },
        'objectType':         { id: 0x004F, type: 'ENUM16'   },
        'timeOfATReset':      { id: 0x0072, type: 'STRUCT'   },
        'timeOfSCReset':      { id: 0x0073, type: 'STRUCT'   },
        'profileName':        { id: 0x00A8, type: 'CHAR_STR' }
    },
    cmd: null,
    cmdRsp: null
};

module.exports = piBinaryOutputBacnetReg;
