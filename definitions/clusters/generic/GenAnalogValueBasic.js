/*************************************/
/*** Analog Value (Basic) Cluster  ***/
/*************************************/
var GenAnalogValueBasic = {
    attrId: {
        'Description': 0x001C,
        'OutOfService': 0x0051,
        'PresentValue': 0x0055,
        'PriorityArray': 0x0057,
        'Reliability': 0x0067,
        'RelinquishDefault': 0x0068,
        'StatusFlags': 0x006F,
        'EngineeringUnits': 0x0075,
        'ApplicationType': 0x0100
    },
    type: {
        Description: 'CHAR_STR',
        OutOfService: 'BOOLEAN',
        PresentValue: 'SINGLE_PREC',
        PriorityArray: 'ARRAY',
        Reliability: 'ENUM8',
        RelinquishDefault: 'SINGLE_PREC',
        StatusFlags: 'BITMAP8',
        EngineeringUnits: 'ENUM16',
        ApplicationType: 'UINT32'
    },
    cmd: null,
    cmdRsp: null
};
