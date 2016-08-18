var Enum = require('enum');

var common = {};

common.aclMask = new Enum({
    /*** Attribute Access Control - bit masks ***/
    'READ': 0x01,
    'WRITE': 0x02,
    'REPORTABLE': 0x04,
    'COMMAND': 0x08,
    'AUTH_READ': 0x10,
    'AUTH_WRITE': 0x20,
    'CLIENT': 0x80  // TI unique, indicate client side attribute
});

common.profileId = new Enum({
    'IPM': 0x0101,  // Industrial Plant Monitoring
    'HA': 0x0104,   // Home Automation
    'CBA': 0x0105,  // Commercial Building Automation
    'TA': 0x0107,   // Telecom Applications
    'PHHC': 0x0108, // Personal Home & Hospital Care
    'SE': 0x0019    // Smart Energy, [TODO] 0x0019?
});

common.direction = new Enum({
    "clientToServer": 0,
    "serverToClient": 1
});

common.foundation = new Enum({
    "read": 0,
    "readRsp": 1,
    "write": 2,
    "writeUndiv": 3,
    "writeRsp": 4,
    "writeNoRsp": 5,
    "configReport": 6,
    "configReportRsp": 7,
    "readReportConfig": 8,
    "readReportConfigRsp": 9,
    "report": 10,
    "defaultRsp": 11,
    "discover": 12,
    "discoverRsp": 13,
    "readStruct": 14,
    "writeStrcut": 15,
    "writeStrcutRsp": 16,
    "max": 17
});

common.cmdDirection = new Enum({
    'SERVER_GENERATED': 0x01,
    'CLIENT_GENERATED': 0x02,
    'SERVER_RECEIVED': 0x04,
    'CLIENT_RECEIVED': 0x08
});

common.deviceId = new Enum({
    // Generic Device IDs
    'ON_OFF_SWITCH': 0x0000,
    'LEVEL_CONTROL_SWITCH': 0x0001,
    'ON_OFF_OUTPUT': 0x0002,
    'LEVEL_CONTROLLABLE_OUTPUT': 0x0003,
    'SCENE_SELECTOR': 0x0004,
    'CONFIGURATION_TOOL': 0x0005,
    'REMOTE_CONTROL': 0x0006,
    'COMBINED_INTERFACE': 0x0007,
    'RANGE_EXTENDER': 0x0008,
    'MAINS_POWER_OUTLET': 0x0009,
    'DOOR_LOCK': 0x000A,
    'DOOR_LOCK_CONTROLLER': 0x000B,
    'SIMPLE_SENSOR': 0x000C,
    'CONSUMPTION_AWARENESS_DEVICE': 0x000D,
    'HOME_GATEWAY': 0x0050,
    'SMART_PLUG': 0x0051,
    'WHITE_GOODS': 0x0052,
    'METER_INTERFACE': 0x0053,
    // This is a reserved value which could be used for test purposes
    'TEST_DEVICE': 0x00FF,
    // Lighting Device IDs
    'ON_OFF_LIGHT': 0x0100,
    'DIMMABLE_LIGHT': 0x0101,
    'COLORED_DIMMABLE_LIGHT': 0x0102,
    'ON_OFF_LIGHT_SWITCH': 0x0103,
    'DIMMER_SWITCH': 0x0104,
    'COLOR_DIMMER_SWITCH': 0x0105,
    'LIGHT_SENSOR': 0x0106,
    'OCCUPANCY_SENSOR': 0x0107,
    // Closures Device IDs
    'SHADE': 0x0200,
    'SHADE_CONTROLLER': 0x0201,
    'WINDOW_COVERING_DEVICE': 0x0202,
    'WINDOW_COVERING_CONTROLLER': 0x0203,
    // HVAC Device IDs
    'HEATING_COOLING_UNIT': 0x0300,
    'THERMOSTAT': 0x0301,
    'TEMPERATURE_SENSOR': 0x0302,
    'PUMP': 0x0303,
    'PUMP_CONTROLLER': 0x0304,
    'PRESSURE_SENSOR': 0x0305,
    'FLOW_SENSOR': 0x0306,
    'MINI_SPLIT_AC': 0x0307,
    // Intruder Alarm Systems (IAS) Device IDs
    'IAS_CONTROL_INDICATING_EQUIPMENT': 0x0400,
    'IAS_ANCILLARY_CONTROL_EQUIPMENT': 0x0401,
    'IAS_ZONE': 0x0402,
    'IAS_WARNING_DEVICE': 0x0403
});

common.clusterId = new Enum({
    // General Clusters
    'genBasic': 0x0000,
    'genPowerCfg': 0x0001,
    'genDeviceTempConfig': 0x0002,
    'genIdentify': 0x0003,
    'genGroups': 0x0004,
    'genScenes': 0x0005,
    'genOnOff': 0x0006,
    'genOnOffSwitchConfig': 0x0007,
    'genLevelControl': 0x0008,
    'genAlarms': 0x0009,
    'genTime': 0x000A,
    'genLocation': 0x000B,
    'genAnalogInputBasic': 0x000C,
    'genAnalogOutputBasic': 0x000D,
    'genAnalogValueBasic': 0x000E,
    'genBinaryInputBasic': 0x000F,
    'genBinaryOutputBasic': 0x0010,
    'genBinaryValueBasic': 0x0011,
    'genMultistateInputBasic': 0x0012,
    'genMultistateOutputBasic': 0x0013,
    'genMultistateValueBasic': 0x0014,
    'genCommissioning': 0x0015,
    'genPartition': 0x0016,

    'oTA': 0x0019,
    
    'genPowerPrefile': 0x001A,
    'genAppControl': 0x001B,
    
    'genPollControl': 0x0020,
    'genGreenPowerProxy': 0x0021,
    // Closures Clusters
    'closuresShadeConfig': 0x0100,
    'closuresDoorLock': 0x0101,
    'closuresWindowConvering': 0x0102,
    // HVAC Clusters
    'hvacPumpConfigControl': 0x0200,
    'hvacThermostat': 0x0201,
    'hvacFanControl': 0x0202,
    'hvacDihumidificationControl': 0x0203,
    'hvacUserInterfaceConfig': 0x0204,
    // Lighting Clusters
    'lightingColorControl': 0x0300,
    'lightingBallastConfig': 0x0301,
    // Measurement and Sensing Clusters
    'msIlluminanceMeasurement': 0x0400,
    'msIlluminanceLevelSensingConfig': 0x0401,
    'msTemperatureMeasurement': 0x0402,
    'msPressureMeasurement': 0x0403,
    'msFlowMeasurement': 0x0404,
    'msRelativeHumidity': 0x0405,
    'msOccupancySensing': 0x0406,
    // Security and Safety (SS) Clusters
    'ssIasZone': 0x0500,
    'ssIasAce': 0x0501,
    'ssIasWd': 0x0502,
    // Protocol Interfaces
    'piGenericTunnel': 0x0600,
    'piBacnetProtocolTunnel': 0x0601,
    'piAnalogInputBacnetReg': 0x0602,
    'piAnalogInputBacnetExt': 0x0603,
    'piAnalogOutputBacnetReg': 0x0604,
    'piAnalogOutputBacnetExt': 0x0605,
    'piAnalogValueBacnetReg': 0x0606,
    'piAnalogValueBacnetExt': 0x0607,
    'piBinaryInputBacnetReg': 0x0608,
    'piBinaryInputBacnetExt': 0x0609,
    'piBinaryOutputBacnetReg': 0x060A,
    'piBinaryOutputBacnetExt': 0x060B,
    'piBinaryValueBacnetReg': 0x060C,
    'piBinaryValueBacnetExt': 0x060D,
    'piMultistateInputBacnetReg': 0x060E,
    'piMultistateInputBacnetExt': 0x060F,
    'piMultistateOutputBacnetReg': 0x0610,
    'piMultistateOutputBacnetExt': 0x0611,
    'piMultistateValueBacnetReg': 0x0612,
    'piMultistateValueBacnetExt': 0x0613,
    'pi11073ProtocolTunnel': 0x0614,
    // Advanced Metering Initiative :SE) Clusters
    'sePricing': 0x0700,
    'seLoadControl': 0x0701,
    'seSimpleMetering': 0x0702,
    'seMessage': 0x0703,
    'seSeTunneling': 0x0704,
    'sePrepayment': 0x0705, 
    // #ifdef SE_UK_EXT
    'seEnergyMgmt': 0x0706,
    'seTouCalendar': 0x0707,
    'seDeviceMgmt': 0x0708,
    'seEvents': 0x0709,
    'seMduPairing': 0x070A,
    // #endif
    'haApplianceIdentification': 0x0B00,
    'haMeterIdentification': 0x0B01,
    'haApplianceEventsAlerts': 0x0B02,
    'haApplianceStatistics': 0x0B03,
    'haElectricalMeasurement': 0x0B04,
    'haDiagnostic': 0x0B05,

    'manuSpecificCluster': 0xFFFF
});

common.dataType = new Enum({
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

module.exports = common;
