/*********************************/
/*** Alarms Cluster            ***/
/*********************************/
var GenAlarms = {
    attrId: {
        'AlarmCount': 0x0000
    },
    type: {
        AlarmCount: 'UINT16'
    },
    cmd: {
        'Reset': 0x00,
        'ResetAll': 0x01,
        'Get': 0x02,
        'ResetLog': 0x03,
        'PublishEventLog': 0x04 // TODO
    },
    cmdRsp: {
        'Alarm': 0x00,
        'GetRsp': 0x01,
        'GetEventLog': 0x02 // TODO
    }
};
