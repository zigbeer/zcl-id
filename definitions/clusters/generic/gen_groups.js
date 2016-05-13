/********************************/
/*** Group Cluster            ***/
/********************************/
var GenGroups = {
    attrId: {
        'NameSupport': 0x0000
    },
    type: {
        NameSupport: 'BITMAP8'
    },
    cmd: {
        'Add': 0x00,
        'View': 0x01,
        'GetMembership': 0x02,
        'Remove': 0x03,
        'RemoveAll': 0x04,
        'AddIfIdentifying': 0x05
    },
    cmdRsp: {
        'AddRsp': 0x00,
        'ViewRsp': 0x01,
        'GetMembershipRsp': 0x02,
        'RemoveRsp': 0x03 
    }
};
