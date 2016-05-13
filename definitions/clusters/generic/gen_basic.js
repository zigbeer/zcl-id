/********************************/
/*** General Basic Cluster    ***/
/********************************/
var basic = {
    attrId: {
      // Basic Device Information
        'ZclVersion': 0x0000,
        'AppVersion': 0x0001,
        'StackVersion': 0x0002,
        'HwVersion': 0x0003,
        'ManufacturerName': 0x0004,
        'ModelId': 0x0005,
        'DateCode': 0x0006,
        'PowerSource': 0x0007,
        'AppProfileVersion': 0x0008,
        'SwBuildId': 0x4000,
      // Basic Device Settings
        'LocationDesc': 0x0010,
        'PhysicalEnv': 0x0011,
        'DeviceEnabled': 0x0012,
        'AlarmMask': 0x0013,
        'DisableLocalConfig': 0x0014
    },
    type: {
        ZclVersion: 'UINT8',
        AppVersion: 'UINT8',
        StackVersion: 'UINT8',
        HwVersion: 'UINT8',
        ManufacturerName: 'CHAR_STR',
        ModelId: 'CHAR_STR',
        DateCode: 'CHAR_STR',
        PowerSource: 'ENUM8',
        AppProfileVersion: 'AppProfileVersionAttrValue',    // ?
        LocationDesc: 'CHAR_STR',
        PhysicalEnv: 'ENUM8',
        DeviceEnabled: 'BOOLEAN',
        AlarmMask: 'BITMAP8',
        DisableLocalConfig: 'BITMAP8'
    },
    cmd: {
        'ResetFactDefault': 0x00
    },
    cmdRsp: {}
};


