/*************************************/
/*** Analog Input (Basic) Cluster  ***/
/*************************************/
var GenAnalogInputBasic = {
    attrId: {
        'Description': 0x001C,
        'MaxPresentValue': 0x0041,
        'MinPresentValue': 0x0045,
        'OutOfService': 0x0051,
        'PresentValue': 0x0055,
        'Reliability': 0x0067,
        'Resolution': 0x006A,
        'StatusFlags': 0x006F,
        'EngineeringUnits': 0x0075,
        'ApplicationType': 0x0100
    },
    type: {
        Description: 'CHAR_STR',
        MaxPresentValue: 'SINGLE_PREC',
        MinPresentValue: 'SINGLE_PREC',
        OutOfService: 'BOOLEAN',
        PresentValue: 'SINGLE_PREC',
        Reliability: 'ENUM8',
        Resolution: 'SINGLE_PREC',
        StatusFlags: 'BITMAP8',
        EngineeringUnits: 'ENUM16',
        ApplicationType: 'UINT32'
    },
    cmd: null,
    cmdRsp: null
};

