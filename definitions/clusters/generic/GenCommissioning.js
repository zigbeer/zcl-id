/**********************************************/
/*** Commissioning Clusters                 ***/
/**********************************************/
var GenCommissioning = {
    attrId: {
    // Startup Parameters Attribute Set - Stack 0x000
        'ShortAddress': 0x0000,
        'ExtendedPANId': 0x0001,
        'PANId': 0x0002,
        'Channelmask': 0x0003,
        'ProtocolVersion': 0x0004,
        'StackProfile': 0x0005,
        'StartupControl': 0x0006,
    // Startup Parameters Attribute Set - Security 0x001  
        'TrustCenterAddress': 0x0010,
        'TrustCenterMasterKey': 0x0011,
        'NetworkKey': 0x0012,
        'UseInsecureJoin': 0x0013,
        'PreconfiguredLinkKey': 0x0014,
        'NetworkKeySeqNum': 0x0015,
        'NetworkKeyType': 0x0016,
        'NetworkManagerAddress': 0x0017,
    // Join Parameters Attribute Set 0x002  
        'ScanAttempts': 0x0020,
        'TimeBetweenScans': 0x0021,  
        'RejoinInterval': 0x0022,
        'MaxRejoinInterval': 0x0023, 
    // End Device Parameters Attribute Set 0x003  
        'IndirectPollRate': 0x0030,
        'ParentRetryThreshold': 0x0031,
    // Concentrator Parameters Attribute Set 0x004
        'ConcentratorFlag': 0x0040,
        'ConcentratorRadius': 0x0041,
        'ConcentratorDiscoveryTime': 0x0042
    },
    type: {
        ShortAddress: 'UINT16',
        ExtendedPANId: 'IEEE_ADDR',
        PANId: 'UINT16',
        Channelmask: 'BITMAP32',
        ProtocolVersion: 'UINT8',
        StackProfile: 'UINT8',
        StartupControl: 'StartupControlAttrValue', //ENUM8
        TrustCenterAddress: 'IEEE_ADDR',
        TrustCenterMasterKey: '128_BIT_SEC_KEY',
        NetworkKey: '128_BIT_SEC_KEY',
        UseInsecureJoin: 'BOOLEAN',
        PreconfiguredLinkKey: '128_BIT_SEC_KEY',
        NetworkKeySeqNum: 'UINT8',
        NetworkKeyType: 'ENUM8',
        NetworkManagerAddress: 'UINT16',
        ScanAttempts: 'UINT8',
        TimeBetweenScans: 'UINT16',  
        RejoinInterval: 'UINT16',
        MaxRejoinInterval: 'UINT16',
        IndirectPollRate: 'UINT16',
        ParentRetryThreshold: 'UINT8',
        ConcentratorFlag: 'BOOLEAN',
        ConcentratorRadius: 'UINT8',
        ConcentratorDiscoveryTime: 'UINT8'
    },
    cmd: null,
    cmdRsp: null
};

