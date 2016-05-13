/*********************************/
/*** On/Off Cluster Attributes ***/
/*********************************/
var GenOnOff = {
    attrId: {
        'OnOff': 0x0000,
        //TODO
        'GlobalSceneCtrl': 0x4000,
        'OnTime': 0x4001,
        'OffWaitTime': 0x4002
    },
    type: {
        OnOff: 'BOOLEAN'
    },
    cmd: {
        'Off': 0x00,
        'On': 0x01,
        'Toggle': 0x02,
        'OffWithEffect': 0x40,
        'OnWithRecallGlobalScene': 0x41,
        'OnWithTimedOff': 0x42
    },
    cmdRsp: null
};
