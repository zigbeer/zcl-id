z/*************************************************/
/***  Ballast Configuration Cluster            ***/
/*************************************************/
ZCL.Cluster.LightingBallastConfig.Attr = new Enum({
  // Ballast Information Attribute set
    'PhysicalMinLevel': 0x0000,
    'PhysicalMaxLevel': 0x0001,
    'BallastStatus': 0x0002,
  // Ballast Settings Attributes set
    'MinLevel': 0x0010,
    'MaxLevel': 0x0011,
    'PowerOnLevel': 0x0012,
    'PowerOnFadeTime': 0x0013,
    'IntrinsicBallastFactor': 0x0014,
    'BallastFactorAdjustment': 0x0015,
  // Lamp Information Attributes set
    'LampQuantity': 0x0020,
  // Lamp Settings Attributes set
    'LampType': 0x0030,
    'LampManufacturer': 0x0031,
    'LampRatedHours': 0x0032,
    'LampBurnHours': 0x0033,
    'LampAlarmMode': 0x0034,
    'LampBurnHoursTripPoint': 0x0035
});

ZCL.Cluster.LightingBallastConfig.AttrType = {
    PhysicalMinLevel: 'UINT8',
    PhysicalMaxLevel: 'UINT8',
    BallastStatus: 'BallastStatusAddrValue', // BITMAP8
    MinLevel: 'UINT8',
    MaxLevel: 'UINT8',
    PowerOnLevel: 'UINT8',
    PowerOnFadeTime: 'UINT16',
    IntrinsicBallastFactor: 'UINT8',
    BallastFactorAdjustment: 'UINT8',
    LampQuantity: 'UINT8',
    LampType: 'CHAR_STR',
    LampManufacturer: 'CHAR_STR',
    LampRatedHours: 'UINT24',
    LampBurnHours: 'UINT24',
    LampAlarmMode: 'LampAlarmModeAddrValue', // BITMAP8
    LampBurnHoursTripPoint: 'UINT24'
};

ZCL.Cluster.LightingBallastConfig.BallastStatusAddrValue = new Enum({
    'NonOperational': 0x01,     // bit 0 is set
    'LampNotInSocket': 0x02     // bit 1 is set
});

ZCL.Cluster.LightingBallastConfig.LampAlarmModeAddrValue = new Enum({
    'Bit0NoAlarm': 0x01,
    'Bit0Alarm': 0x02  
});
