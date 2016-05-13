/************************************/
/*** Door Lock Cluster            ***/
/************************************/
ZCL.Cluster.ClosuresDoorLock.Attr = new Enum({
    'LockState': 0x0000,
    'LockType': 0x0001,
    'ActuatorEnabled': 0x0002,
    'DoorState': 0x0003,
    'DoorOpenEvents': 0x0004,
    'DoorClosedEvents': 0x0005,
    'OpenPeriod': 0x0006,
  // User, PIN, Schedule, & Log Information Attributes
    'NumOfLockRecordsSupported': 0x0010,
    'NumOfTotalUsersSupported': 0x0011,
    'NumOfPinUsersSupported': 0x0012,
    'NumOfRfidUsersSupported': 0x0013,
    'NumOfWeekDaySchedulesSupportedPerUser': 0x0014,
    'NumOfYearDaySchedulesSupportedPerUser': 0x0015,
    'NumOfHolidayScheduledsSupported': 0x0016,
    'MaxPinLen': 0x0017,
    'MinPinLen': 0x0018,
    'MaxRfidLen': 0x0019,
    'MaxRfidLen': 0x001A,
  // Operational Settings Attributes
    'Enable_Logging': 0x0020,
    'Language': 0x0021,
    'LedSettings': 0x0022,
    'AutoRelockTime': 0x0023,
    'SoundVolume': 0x0024,
    'OperatingMode': 0x0025,
    'SupportedOperatingModes': 0x0026,
    'DefaultConfigurationRegister': 0x0027,
    'EnableLocalProgramming': 0x0028,
    'EnableOneTouchLocking': 0x0029,
    'EnableInsideStatusLed': 0x002A,
    'EnablePrivacyModeButton': 0x002B,
  // Security Settings Attributes
    'WrongCodeEntryLimit': 0x0030,
    'UserCodeTemporaryDisableTime': 0x0031,
    'SendPinOta': 0x0032,
    'RequirePinForRfOperation': 0x0033,
    'ZigbeeSecurityLevel': 0x0034,
  // Alarm and Event Masks Attributes
    'AlarmMask': 0x0040,
    'KeypadOperationEventMask': 0x0041,
    'RfOperationEventMask': 0x0042,
    'ManualOperationEventMask': 0x0043,
    'RfidOperationEventMask': 0x0044,
    'KeypadProgrammingEventMask': 0x0045,
    'RfProgrammingEventMask': 0x0046,
    'RfidProgrammingEventMask': 0x0047
});

ZCL.Cluster.ClosuresDoorLock.AttrType = {
    LockState: 'LockStateAttrValue',    // ENUM8
    LockType: 'LockTypeAttrValue',      // ENUM8
    ActuatorEnabled: 'BOOLEAN',         // BOOLEAN
    DoorState: 'DoorStateAttrValue',    // ENUM8
    DoorOpenEvents: 'UINT32',
    DoorClosedEvents: 'UINT32',
    OpenPeriod: 'UINT16',
    NumOfLockRecordsSupported: 'UINT16',
    NumOfTotalUsersSupported: 'UINT16',
    NumOfPinUsersSupported: 'UINT16',
    NumOfRfidUsersSupported: 'UINT16',
    NumOfWeekDaySchedulesSupportedPerUser: 'UINT8',
    NumOfYearDaySchedulesSupportedPerUser: 'UINT8',
    NumOfHolidayScheduledsSupported: 'UINT8',
    MaxPinLen: 'UINT8',
    MinPinLen: 'UINT8',
    MaxRfidLen: 'UINT8',
    MaxRfidLen: 'UINT8',
    Enable_Logging: 'BOOLEAN',
    Language: 'CHAR_STR',
    LedSettings: 'UINT8',
    AutoRelockTime: 'UINT32',
    SoundVolume: 'UINT8',
    OperatingMode: 'UINT32',
    SupportedOperatingModes: 'BITMAP16',
    DefaultConfigurationRegister: 'BITMAP16',
    EnableLocalProgramming: 'BOOLEAN',
    EnableOneTouchLocking: 'BOOLEAN',
    EnableInsideStatusLed: 'BOOLEAN',
    EnablePrivacyModeButton: 'BOOLEAN',
    WrongCodeEntryLimit: 'UINT8',
    UserCodeTemporaryDisableTime: 'UINT8',
    SendPinOta: 'BOOLEAN',
    RequirePinForRfOperation: 'BOOLEAN',
    ZigbeeSecurityLevel: 'UINT8',
    AlarmMask: 'BITMAP16',
    KeypadOperationEventMask: 'BITMAP16',
    RfOperationEventMask: 'BITMAP16',
    ManualOperationEventMask: 'BITMAP16',
    RfidOperationEventMask: 'BITMAP16',
    KeypadProgrammingEventMask: 'BITMAP16',
    RfProgrammingEventMask: 'BITMAP16',
    RfidProgrammingEventMask: 'BITMAP16'
};

ZCL.Cluster.ClosuresDoorLock.LockStateAttrValue = new Enum({
    'NotFullyLocked': 0x00,
    'Locked': 0x01,
    'Unlocked': 0x02
});

ZCL.Cluster.ClosuresDoorLock.LockTypeAttrValue = new Enum({
    'Deadbolt': 0x00,
    'Magnetic': 0x01,
    'Other': 0x02,
    'Mortise': 0x03,
    'Rim': 0x04,
    'LatchBolt': 0x05,
    'CylindricalLock': 0x06,
    'TubularLock': 0x07,
    'InterconnectedLock': 0x08,
    'DeadLatch': 0x09,
    'DoorFurniture': 0x0A
});

ZCL.Cluster.ClosuresDoorLock.DoorStateAttrValue = new Enum({
    'Open': 0x00,
    'Closed': 0x01,
    'ErrorJammed': 0x02,
    'ErrorForcedOpen': 0x03,
    'ErrorUnspecified': 0x04
});

ZCL.Cluster.ClosuresDoorLock.Cmd = new Enum({
    'LockDoor': 0x00,
    'UnlockDoor': 0x01,
    'ToggleDoor': 0x02,
    'UnlockWithTimeout': 0x03,
    'GetLogRecord': 0x04,
    'SetPinCode': 0x05,
    'GetPinCode': 0x06,
    'ClearPinCode': 0x07,
    'ClearAllPinCodes': 0x08,
    'SetUserStatus': 0x09,
    'GetUserStatus': 0x0A,
    'SetWeekDaySchedule': 0x0B,
    'GetWeekDaySchedule': 0x0C,
    'ClearWeekDaySchedule': 0x0D,
    'SetYearDaySchedule': 0x0E,
    'GetYearDaySchedule': 0x0F,
    'ClearYearDaySchedule': 0x10,
    'SetHolidaySchedule': 0x11,
    'GetHolidaySchedule': 0x12,
    'ClearHolidaySchedule': 0x13,
    'SetUserType': 0x14,
    'GetUserType': 0x15,
    'SetRfidCode': 0x16,
    'GetRfidCode': 0x17,
    'ClearRfidCode': 0x18,
    'ClearAllRfidCodes': 0x19
});

ZCL.Cluster.ClosuresDoorLock.CmdRsp = new Enum({
    'LockDoorRsp': 0x00,
    'UnlockDoorRsp': 0x01,
    'ToggleDoorRsp': 0x02,
    'UnlockWithTimeoutRsp': 0x03,
    'GetLogRecordRsp': 0x04,
    'SetPinCodeRsp': 0x05,
    'GetPinCodeRsp': 0x06,
    'ClearPinCodeRsp': 0x07,
    'ClearAllPinCodesRsp': 0x08,
    'SetUserStatusRsp': 0x09,
    'GetUserStatusRsp': 0x0A,
    'SetWeekDayScheduleRsp': 0x0B,
    'GetWeekDayScheduleRsp': 0x0C,
    'ClearWeekDayScheduleRsp': 0x0D,
    'SetYearDayScheduleRsp': 0x0E,
    'GetYearDayScheduleRsp': 0x0F,
    'ClearYearDayScheduleRsp': 0x10,
    'SetHolidayScheduleRsp': 0x11,
    'GetHolidayScheduleRsp': 0x12,
    'ClearHolidayScheduleRsp': 0x13,
    'SetUserTypeRsp': 0x14,
    'GetUserTypeRsp': 0x15,
    'SetRfidCodeRsp': 0x16,
    'GetRfidCodeRsp': 0x17,
    'ClearRfidCodeRsp': 0x18,
    'ClearAllRfidCodesRsp': 0x19,
    'OperationEventNotification': 0x20,
    'ProgrammingEventNotification': 0X21
});

ZCL.Cluster.ClosuresDoorLock.StatusValue = new Enum({
    'Success': 0x00,
    'Failure': 0x01
});