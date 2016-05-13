/**********************************************/
/*** Power Configuration Cluster            ***/
/**********************************************/
var GenPowerCfg = {
    attrId: {
      // Mains Information
        'MainsVoltage': 0x0000,
        'MainsFrequency': 0x0001,
      // Mains Settings
        'MainsAlarmMask': 0x0010,
        'MainsVoltMinThres': 0x0011,
        'MainsVoltMaxThres': 0x0012,
        'MainsVoltageDwellTripPoint': 0x0013,
      // Battery Information
        'BatteryVoltage': 0x0020,
        'BatteryPercentageRemaining': 0x0021,
      // Battery Settings
        'BatteryVolt': 0x0030,
        'BatterySize': 0x0031,
        'BatteryAHrRating': 0x0032,
        'BatteryQuantity': 0x0033,
        'BatteryRatedVoltage': 0x0034,
        'BatteryAlarmMask': 0x0035,
        'BatteryVoltMinThres': 0x0036,
        'BatteryVoltThres1': 0x0037,
        'BatteryVoltThres2': 0x0038,
        'BatteryVoltThres3': 0x0039,
        'BatteryPercentMinThres': 0x003A,
        'BatteryPercentThres1': 0x003B,
        'BatteryPercentThres2': 0x003C,
        'BatteryPercentThres3': 0x003D,
        'BatteryAlarmState': 0x003E //TODO
    },
    type: {
        MainsVoltage: 'UINT16',
        MainsFrequency: 'UINT8',
        MainsAlarmMask: 'MainsAlarmMaskAttrValue',      //BITMAP8
        MainsVoltMinThres: 'UINT16',
        MainsVoltMaxThres: 'UINT16',
        MainsVoltageDwellTripPoint: 'UINT16',
        BatteryVoltage: 'UINT8',
        BatteryVolt: 'CHAR_STR',
        BatterySize: 'BatterySizeAttrValue',            //ENUM8
        BatteryAHrRating: 'UINT16',
        BatteryQuantity: 'UINT8',
        BatteryRatedVoltage: 'UINT8',
        BatteryAlarmMask: 'BatteryAlarmMaskAttrValue',  //BITMAP8
        BatteryVoltMinThres: 'UINT8'
    },
    cmd: null,
    cmdRsp: null
};

