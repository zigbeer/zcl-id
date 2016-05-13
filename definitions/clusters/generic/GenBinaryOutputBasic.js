/*************************************/
/*** Binary Output (Basic) Cluster ***/
/*************************************/
var GenBinaryOutputBasic = {
    attrId: {
        'ActiveText': 0x0004,
        'Description': 0x001C,
        'InactiveText': 0x002E,
        'MinimumOffTime': 0x0042,
        'MinimumOnTime': 0x0043,
        'OutOfService': 0x0051,
        'Polarity': 0x0054,
        'PresentValue': 0x0055,
        'PriorityArray': 0x0057,
        'Reliability': 0x0067,
        'RelinquishDefault': 0x0068,
        'StatusFlags': 0x006F,
        'ApplicationType': 0x0100
    },
    type: {
        ActiveText: 'CHAR_STR',
        Description: 'CHAR_STR',
        InactiveText: 'CHAR_STR',
        MinimumOffTime: 'UINT32',
        MinimumOnTime: 'UINT32',
        OutOfService: 'BOOLEAN',
        Polarity: 'ENUM8',
        PresentValue: 'BOOLEAN',
        PriorityArray: 'ARRAY',
        Reliability: 'ENUM8',
        RelinquishDefault: 'BOOLEAN',
        StatusFlags: 'BITMAP8',
        ApplicationType: 'UINT32'
    },
    cmd: null,
    cmdRsp: null
};

