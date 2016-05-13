/*******************************/
/*** Time Cluster            ***/
/*******************************/
var GenTime = {
    attrId: {
        'Time': 0x0000,
        'TimeStatus': 0x0001,
        'TimeZone': 0x0002,
        'DstStart': 0x0003,
        'DstEnd': 0x0004,
        'DstShift': 0x0005,
        'StandardTime': 0x0006,
        'LocalTime': 0x0007,
        'LastSetTime': 0x0008,
        'ValidUntilTime': 0x0009
    },
    type: {
        Time: 'UTC',
        TimeStatus: 'TimeStatusAttrValue', //BITMAP8
        TimeZone: 'INT32',
        DstStart: 'UINT32',
        DstEnd: 'UINT32',
        DstShift: 'DstShiftAttrValue',
        StandardTime: 'UINT32',
        LocalTime: 'UINT32',
        LastSetTime: 'UTC',
        ValidUntilTime: 'UTC'
    },
    cmd: null,
    cmdRsp: null
};
