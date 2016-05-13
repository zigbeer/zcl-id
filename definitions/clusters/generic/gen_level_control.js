/****************************************/
/*** Level Control Cluster            ***/
/****************************************/
var GenLevelControl = {
    attrId: {
        'CurrentLevel': 0x0000,
        'RemainingTime': 0x0001,
        'OnOffTransitionTime': 0x0010,
        'OnLevel': 0x0011,
        //TODO
        'OnTransitionTime': 0x0012,
        'OffTransitionTime': 0x0013,
        'DefaultMoveRate': 0x0014
    },
    type: {
        CurrentLevel: 'UINT8',
        RemainingTime: 'UINT16',
        OnOffTransitionTime: 'UINT16',
        OnLevel: 'UINT8'
    },
    cmd: {
        'MoveToLevel': 0x00,
        'Move': 0x01,
        'Step': 0x02,
        'Stop': 0x03,
        'MoveToLevelWithOnOff': 0x04,
        'MoveWithOnOff': 0x05,
        'StepWithOnOff': 0x06,
        'StopWithOnOff': 0x07 
    },
    cmdRsp: null
};
