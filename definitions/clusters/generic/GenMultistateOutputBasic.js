/******************************************/
/*** Multistate Output (Basic) Cluster  ***/
/******************************************/
var GenMultistateOutputBasic = {
    attrId: {
        'StateText': 0x000E,
        'Description': 0x001C,
        'NumberOfStates': 0x004A,
        'OutOfService': 0x0051,
        'PresentValue': 0x0055,
        'PriorityArray': 0x0057,
        'Reliability': 0x0067,
        'RelinquishDefault': 0x0068,
        'StatusFlags': 0x006F,
        'ApplicationType': 0x0100
    },
    type: {
        StateText: 'ARRAY',
        Description: 'CHAR_STR',
        NumberOfStates: 'UINT16',
        OutOfService: 'BOOLEAN',
        PresentValue: 'UINT16',
        PriorityArray: 'ARRAY',
        Reliability: 'ENUM8',
        RelinquishDefault: 'UINT16',
        StatusFlags: 'BITMAP8',
        ApplicationType: 'UINT32'
    },
    cmd: null,
    cmdRsp: null
};
