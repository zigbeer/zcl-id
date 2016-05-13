/***********************************/
/*** Identify Cluster            ***/
/***********************************/
var GenIdentify = {
    attrId: {
        'IdentifyTime': 0x0000,
        'IdentifyCommissionState': 0x0001 //TODO
    },
    type: {
        IdentifyTime: 'UINT16'
    },
    cmd: {
        'Identify': 0x00,
        'IdentifyQuery': 0x01,
        'EzmodeInvoke': 0x02,
        'UpdateCommissionState': 0x03,
        'TriggerEffect': 0x40
    },
    cmdRsp: {
        'IdentifyQueryRsp': 0x00    
    }
};

