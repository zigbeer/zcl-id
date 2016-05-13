/************************************/
/***  IAS Zone Cluster            ***/
/************************************/
ZCL.Cluster.SsIasZone.Attr = new Enum({
  // Zone Information Attributes set
    'ZoneState': 0x0000,
    'ZoneType': 0x0001,
    'ZoneStatus': 0x0002,
  // Zone Settings Attributes set
    'IasCieAddr': 0x0010,
    'ZoneId': 0x0011,
    'NumZoneSensitivityLevelsSupported': 0x0012,
    'CurrentZoneSensitivityLevel': 0x0013
});

ZCL.Cluster.SsIasZone.AttrType = {
  // Zone Information Attributes set
    ZoneState: 'ZoneStateAttrValue',    // ENUM8
    ZoneType: 'ZoneTypeAttrValue',      // ENUM16
    ZoneStatus: 'ZoneStatusAttrValue',  // BITMAP16
  // Zone Settings Attributes set
    IasCieAddr: 'IEEE_ADDR',
    ZoneId: 'UINT8',
    NumZoneSensitivityLevelsSupported: 'UINT8',
    CurrentZoneSensitivityLevel: 'UINT8'
};

ZCL.Cluster.SsIasZone.ZoneStateAttrValue = new Enum({
    'NotEnrolled': 0x00,
    'Enrolled': 0x01
});

ZCL.Cluster.SsIasZone.ZoneTypeAttrValue = new Enum({
    'StandardCIE': 0x0000,              // [Alarm1, Alarm2] = [System Alarm, -]
    'MotionSensor': 0x000D,             // [Alarm1, Alarm2] = [Intrusion indication, Presence indication]
    'ContactSwitch': 0x0015,            // [Alarm1, Alarm2] = [1st portal Open-Close, 2nd portal Open-Close]
    'FireSensor': 0x0028,               // [Alarm1, Alarm2] = [Fire indication, -]
    'WaterSensor': 0x002A,              // [Alarm1, Alarm2] = [Water overflow indication, -]
    'GasSensor': 0x002B,                // [Alarm1, Alarm2] = [CO indication, Cooking indication]
    'PersonalEmergencyDev': 0x002C,     // [Alarm1, Alarm2] = [Fall/Concussion, Emergency button]
    'VibrationMovementSensor': 0x002D,  // [Alarm1, Alarm2] = [Movement indication, Vibration]
    'RemoteControl': 0x010F,            // [Alarm1, Alarm2] = [Panic, Emergency]
    'KeyFob': 0x0115,                   // [Alarm1, Alarm2] = [Panic, Emergency]
    'KeyPad': 0x021D,                   // [Alarm1, Alarm2] = [Panic, Emergency]
    'StandardWarningDev': 0x0225,       // [Alarm1, Alarm2] = [-, -]
    'GlassBreakSensor': 0x0226,         // [Alarm1, Alarm2] = [-, -]
    'SecurityRepeater': 0x0229,         // [Alarm1, Alarm2] = [-, -]
    // Other values < 0x7fff Reserved    
    // 0x8000-0xfffe Reserved for manufacturer specific types
    'InvalidZoneType': 0xFFFF           // [Alarm1, Alarm2] = [-, -]
});

ZCL.Cluster.SsIasZone.ZoneStatusAttrValue = new Enum({
    'Alarm1': 0x0001,
    'Alarm2': 0x0002,
    'Tamper': 0x0004,
    'Battery': 0x0008,
    'SupervisionReports': 0x0010,
    'RestoreReports': 0x0020,
    'Trouble': 0x0040,
    'AC': 0x0080
});

ZCL.Cluster.SsIasZone.Cmd = new Enum({
    'EnrollRsp': 0x00,
    'InitNormalOpMode': 0x01,
    'InitTestMode': 0x02
});

ZCL.Cluster.SsIasZone.CmdRsp = new Enum({
    'StatusChangeNotification': 0x00,
    'EnrollReq': 0x01
});

ZCL.Cluster.SsIasZone.EnrollRspCodeValue = new Enum({
    'Success': 0x00,
    'NotSupported': 0x01,
    'NoEnrollPermit': 0x02,
    'TooManyZones ': 0x03
});