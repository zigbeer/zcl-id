/*************************************/
/*** Binary Input (Basic) Cluster  ***/
/*************************************/
var GenBinaryInputBasic = {
    attrId: {
        'ActiveText': 0x0004,
        'Description': 0x001C,
        'InactiveText': 0x002E,
        'OutOfService': 0x0051,
        'Polarity': 0x0054,
        'PresentValue': 0x0055,
        'Reliability': 0x0067,
        'StatusFlags': 0x006F,
        'ApplicationType': 0x0100
    },
    type: {
        ActiveText: 'CHAR_STR',
        Description: 'CHAR_STR',
        InactiveText: 'CHAR_STR',
        OutOfService: 'BOOLEAN',
        Polarity: 'ENUM8',
        PresentValue: 'BOOLEAN',
        Reliability: 'ENUM8',
        StatusFlags: 'BITMAP8',
        ApplicationType: 'UINT32'
    },
    cmd: null,
    cmdRsp: null
};
