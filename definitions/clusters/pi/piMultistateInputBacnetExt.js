var piMultistateInputBacnetExt = {
    attrId: {
        'ackedTransitions':  { id: 0x0000, type: 'BITMAP8' },
        'alarmValue':        { id: 0x0006, type: 'UINT16' },
        'notificationClass': { id: 0x0011, type: 'UINT16'  },
        'eventEnable':       { id: 0x0023, type: 'BITMAP8' },
        'eventState':        { id: 0x0024, type: 'ENUM8'   },
        'faultValues':       { id: 0x0025, type: 'UINT16'  },
        'notifyType':        { id: 0x0048, type: 'ENUM8'   },
        'timeDelay':         { id: 0x0071, type: 'UINT8'   },
        'eventTimeStamps':   { id: 0x0082, type: 'ARRAY'   }
    },
    cmd: null,
    cmdRsp: null
};

module.exports = piMultistateInputBacnetExt;
