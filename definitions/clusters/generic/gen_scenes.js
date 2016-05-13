/*********************************/
/*** Scenes Cluster            ***/
/*********************************/
var x = {
    attrId: {
        'Count': 0x0000,
        'CurrentScene': 0x0001,
        'CurrentGroup': 0x0002,
        'SceneValid': 0x0003,
        'NameSupport': 0x0004,
        'LastCfgBy': 0x0005
    },
    type: {
        Count: 'UINT8',
        CurrentScene: 'UINT8',
        CurrentGroup: 'UINT16',
        SceneValid: 'BOOLEAN',
        NameSupport: 'BITMAP8',
        LastCfgBy: 'IEEE_ADDR'
    },
    cmd: {
        'Add': 0x00,
        'View': 0x01,
        'Remove': 0x02,
        'RemoveAll': 0x03,
        'Store': 0x04,
        'Recall': 0x05,
        'GetSceneMembership': 0x06,
        'EnhancedAdd': 0x40,
        'EnhancedView': 0x41,
        'Copy': 0x42
    // TODO: Duplicate?
    },
    cmdRsp: {
        'AddRsp': 0x00,
        'ViewRsp': 0x01,
        'RemoveRsp': 0x02,
        'RemoveAllRsp': 0x03,
        'StoreRsp': 0x04,
        'GetSceneMembershipRsp': 0x06,
        'EnhancedAddRsp': 0x40,
        'EnhancedViewRsp': 0x41,
        'CopyRsp': 0x42
    }
};

