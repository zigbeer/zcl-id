    "DataType": {
        "noData": 0,
        "data8": 8,
        "data16": 9,
        "data24": 10,
        "data32": 11,
        "data40": 12,
        "data48": 13,
        "data56": 14,
        "data64": 15,
        "boolean": 16,
        "bitmap8": 24,
        "bitmap16": 25,
        "bitmap24": 26,
        "bitmap32": 27,
        "bitmap40": 28,
        "bitmap48": 29,
        "bitmap56": 30,
        "bitmap64": 31,
        "uint8": 32,
        "uint16": 33,
        "uint24": 34,
        "uint32": 35,
        "uint40": 36,
        "uint48": 37,
        "uint56": 38,
        "uint64": 39,
        "int8": 40,
        "int16": 41,
        "int24": 42,
        "int32": 43,
        "int40": 44,
        "int48": 45,
        "int56": 46,
        "int64": 47,
        "enum8": 48,
        "enum16": 49,
        "semiPrec": 56,
        "singlePrec": 57,
        "doublePrec": 58,
        "octetStr": 65,
        "charStr": 66,
        "longOctetStr": 67,
        "longCharStr": 68,
        "array": 72,
        "struct": 76,
        "set": 80,
        "bag": 81,
        "tod": 224,
        "date": 225,
        "utc": 226,
        "clusterId": 232,
        "attrId": 233,
        "bacOid": 234,
        "ieeeAddr": 240,
        "128BitSecKey": 241,
        "unknown": 255
    },

ZCL.DataType = new Enum({
    'NO_DATA': 0x00,
    // 0x01 - 0x07 Reserved
    'DATA8': 0x08,
    'DATA16': 0x09,
    'DATA24': 0x0a,
    'DATA32': 0x0b,
    'DATA40': 0x0c,
    'DATA48': 0x0d,
    'DATA56': 0x0e,
    'DATA64': 0x0f,
    'BOOLEAN': 0x10,
    // 0x11 - 0x17 Reserved
    'BITMAP8': 0x18,
    'BITMAP16': 0x19,
    'BITMAP24': 0x1a,
    'BITMAP32': 0x1b,
    'BITMAP40': 0x1c,
    'BITMAP48': 0x1d,
    'BITMAP56': 0x1e,
    'BITMAP64': 0x1f,
    'UINT8': 0x20,
    'UINT16': 0x21,
    'UINT24': 0x22,
    'UINT32': 0x23,
    'UINT40': 0x24,
    'UINT48': 0x25,
    'UINT56': 0x26,
    'UINT64': 0x27,
    'INT8': 0x28,
    'INT16': 0x29,
    'INT24': 0x2a,
    'INT32': 0x2b,
    'INT40': 0x2c,
    'INT48': 0x2d,
    'INT56': 0x2e,
    'INT64': 0x2f,
    'ENUM8': 0x30,
    'ENUM16': 0x31,
    // 0x32 - 0x37 Reserved
    'SEMI_PREC': 0x38,
    'SINGLE_PREC': 0x39,
    'DOUBLE_PREC': 0x3a,
    // 0x3b - 0x3f Reserved
    'OCTET_STR': 0x41,
    'CHAR_STR': 0x42,
    'LONG_OCTET_STR': 0x43,
    'LONG_CHAR_STR': 0x44,
    // 0x45 - 0x47 Reserved
    'ARRAY': 0x48,
    // 0x49 - 0x4b Reserved
    'STRUCT': 0x4c,
    // 0x4d - 0x4f Reserved
    'SET': 0x50,
    'BAG': 0x51,
    // 0x52 - 0x57 Reserved
    // 0x58 - 0xdf Reserved
    'TOD': 0xe0,
    'DATE': 0xe1,
    'UTC': 0xe2,
    // 0xe3 - 0xe7 Reserved
    'CLUSTER_ID': 0xe8,
    'ATTR_ID': 0xe9,
    'BAC_OID': 0xea,
    'IEEE_ADDR': 0xf0,
    '128_BIT_SEC_KEY': 0xf1,
    // 0xf2 - 0xfe Reserved
    'UNKNOWN': 0xff
});


ZCL.DataTypeByAttr = {
    'PowerSourceAttrValue': 0x30,           // ENUM8
    'PhysicalEnvAttrValue': 0x30,           // ENUM8
    'BatterySizeAttrValue': 0x30,           // ENUM8
    'SwitchTypeAttrValue': 0x30,            // ENUM8
    'SwitchActionsAttrValue': 0x30,         // ENUM8
    'MethodAttrValue': 0x30,                // ENUM8
    'StartupControlAttrValue': 0x30,        // ENUM8
    'ModeAttrValue': 0x30,                  // ENUM8
    'LockStateAttrValue': 0x30,             // ENUM8
    'LockTypeAttrValue': 0x30,              // ENUM8
    'DoorStateAttrValue': 0x30,             // ENUM8
    'OperationModeAttrValue': 0x30,         // ENUM8
    'ControlModeAttrValue': 0x30,           // ENUM8
    'OperationModeAttrValue': 0x30,         // ENUM8
    'ControlModeAttrValue': 0x30,           // ENUM8
    'FanModeAttrValue': 0x30,               // ENUM8
    'FanModeSeqAttrValue': 0x30,            // ENUM8
    'RelativeHumidityModeAttrValue': 0x30,  // ENUM8
    'DehumidLockoutAttrValue': 0x30,        // ENUM8
    'RelativeHumidDisplayAttrValue': 0x30,  // ENUM8
    'TempDisplayModeAttrValue': 0x30,       // ENUM8
    'KeypadLockoutAttrValue': 0x30,         // ENUM8
    'ProgrammingVisibilityAttrValue': 0x30, // ENUM8
    'DriftCompensationAttrValue': 0x30,     // ENUM8
    'ColorModeAttrValue': 0x30,             // ENUM8
    'LightSensorTypeAttrValue': 0x30,       // ENUM8
    'LevelStatusAttrValue': 0x30,           // ENUM8
    'LightSensorTypeAttrValue': 0x30,       // ENUM8
    'OccupancySensorTypeAttrValue': 0x30,   // ENUM8
    'ZoneStateAttrValue': 0x30,             // ENUM8
    'AlarmMaskAttrValue': 0x18,             // BITMAP8
    'DisableLocalConfigAttrValue': 0x18,    // BITMAP8
    'MainsAlarmMaskAttrValue': 0x18,        // BITMAP8
    'BatteryAlarmMaskAttrValue': 0x18,      // BITMAP8
    'DevTempAlarmMaskAttrValue': 0x18,      // BITMAP8
    'TimeStatusAttrValue': 0x18,            // BITMAP8
    'StatusAttrValue': 0x18,                // BITMAP8
    'OcupancyAttrValue': 0x18,              // BITMAP8
    'BallastStatusAddrValue': 0x18,         // BITMAP8
    'LampAlarmModeAddrValue': 0x18,         // BITMAP8
    'OccupancyAttrValue': 0x18,             // BITMAP8
    'PumpStatusAttrValue': 0x19,            // BITMAP16
    'AlarmMaskAttrValue': 0x19,             // BITMAP16    
    'ZoneStatusAttrValue': 0x19,            // BITMAP16
    'AppProfileVersionAttrValue': 0x20,     // UINT8
    'TypeAttrValue': 0x08,                  // DAT8
    'ZoneTypeAttrValue': 0x31,              // ENUM16
    'DeviceEnabledAttrValue': 0x10          // BOOLEAN

    // DstShift: 'DstShiftAttrValue',
    // MinPercentChange: 'TODO',
    // MinAbsoluteChange: 'TODO'
};
