var piAnalogValueBacnetExt = {
    attrId: {
        'ackedTransitions':  { id: 0x0000, type: 'BITMAP8'      },
        'notificationClass': { id: 0x0011, type: 'UINT16'       },
        'deadband':          { id: 0x0019, type: 'SINGLE_PREC'  },
        'eventEnable':       { id: 0x0023, type: 'BITMAP8'      },
        'eventState':        { id: 0x0024, type: 'ENUM8'        },
        'highLimit':         { id: 0x002D, type: 'SINGLE_PREC'  },
        'limitEnable':       { id: 0x0034, type: 'BITMAP8'      },
        'lowLimit':          { id: 0x003B, type: 'SINGLE_PREC'  },
        'notifyType':        { id: 0x0048, type: 'ENUM8'        },
        'timeDelay':         { id: 0x0071, type: 'UINT8'        },
        'eventTimeStamps':   { id: 0x0082, type: 'ARRAY'        }
    },
    cmd: null,
    cmdRsp: null
};

module.exports = piAnalogValueBacnetExt;
