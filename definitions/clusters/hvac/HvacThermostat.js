/******************************************/
/***HVAC: Thermostat Cluster            ***/
/******************************************/
ZCL.Cluster.HvacThermostat.Attr = new Enum({
  // Thermostat information Attribute set
    'LocalTemp': 0x0000,
    'OutdoorTemp': 0x0001,
    'Ocupancy': 0x0002,
    'AbsMinHeatSetpointLimit': 0x0003,
    'AbsMaxHeatSetpointLimit': 0x0004,
    'AbsMinCoolSetpointLimit': 0x0005,
    'AbsMaxCoolSetpointLimit': 0x0006,
    'PICoolingDemand': 0x0007,
    'PIHeatingDemand': 0x0008,
    'SystemTypeConfig': 0x0009,
  // Thermostat settings Attribute set
    'LocalTemperatureCalibration': 0x0010,
    'OccupiedCoolingSetpoint': 0x0011,
    'OccupiedHeatingSetpoint': 0x0012,
    'UnoccupiedCoolingSetpoint': 0x0013,
    'UnoccupiedHeatingSetpoint': 0x0014,
    'MinHeatSetpointLimit': 0x0015,
    'MaxHeatSetpointLimit': 0x0016,
    'MinCoolSetpointLimit': 0x0017,
    'MaxCoolSetpointLimit': 0x0018,
    'MinSetpointDeadBand': 0x0019,
    'RemoteSensing': 0x001A,
    'CtrlSeqeOfOper': 0x001B,
    'SystemMode': 0x001C,
    'AlarmMask': 0x001D,
    'RunningMode': 0x001E,
  // Thermostat Schedule & HVAC Relay Attribute Set
    'StartOfWeek': 0x0020,
    'NumberOfWeeklyTrans': 0x0021,
    'NumberOfDailyTrans': 0x0022,
    'TempSetpointHold': 0x0023,
    'TempSetpointHoldDuration': 0x0024,
    'ProgramingOperMode': 0x0025,
    'RunningState': 0x0029,
  // Thermostat Setpoint Change Tracking Attribute Set
    'SetpointChangeSource': 0x0030,
    'SetpointChangeAmount': 0x0031,
    'SetpointChangeSourceTimeStamp': 0x0032,
  // Thermostat AC Information Attribute Set
    'AcType': 0x0040,
    'AcCapacity': 0x0041,
    'AcRefrigerantType': 0x0042,
    'AcConpressorType': 0x0043,
    'AcErrorCode': 0x0044,
    'AcLouverPosition': 0x0045,
    'AcCollTemp': 0x0046,
    'AcCapacityFormat': 0x0047
});

ZCL.Cluster.HvacThermostat.AttrType = {
    LocalTemp: 'INT16',
    OutdoorTemp: 'INT16',
    Ocupancy: 'OcupancyAttrValue',  //  BITMAP8
    AbsMinHeatSetpointLimit: 'INT16',
    AbsMaxHeatSetpointLimit: 'INT16',
    AbsMinCoolSetpointLimit: 'INT16',
    AbsMaxCoolSetpointLimit: 'INT16',
    PICoolingDemand: 'UINT8',
    PIHeatingDemand: 'UINT8',
    SystemTypeConfig: 'BITMAP8',
    LocalTemperatureCalibration: 'INT8',
    OccupiedCoolingSetpoint: 'INT16',
    OccupiedHeatingSetpoint: 'INT16',
    UnoccupiedCoolingSetpoint: 'INT16',
    UnoccupiedHeatingSetpoint: 'INT16',
    MinHeatSetpointLimit: 'INT16',
    MaxHeatSetpointLimit: 'INT16',
    MinCoolSetpointLimit: 'INT16',
    MaxCoolSetpointLimit: 'INT16',
    MinSetpointDeadBand: 'INT8',
    RemoteSensing: 'RemoteSensingAttrValue',    // BITMAP8
    CtrlSeqeOfOper: 'CtrlSeqeOfOperAttrValue',  // ENUM8
    SystemMode: 'SystemModeAttrValue',          // ENUM8
    AlarmMask: 'AlarmMaskAttrValue',            // BITMAP8
    RunningMode: 'RunningModeAttrValue',
    StartOfWeek: 'StartOfWeekAttrValue',
    NumberOfWeeklyTrans: 'UINT8',
    NumberOfDailyTrans: 'UINT8',
    TempSetpointHold: 'TempSetpointHoldAttrValue',
    TempSetpointHoldDuration: 'UINT16',
    ProgramingOperMode: 'BITMAP8',
    RunningState: 'RunningStateAttrValue',
    SetpointChangeSrc: 'SetpointChangeSrcAttrValue',
    SetpointChangeAmount: 'INT16',
    SetpointChangeSrcTimeStamp: 'UTC',
    AcType: 'AcTypeAttrValue',
    AcCapacity: 'UINT16',
    AcRefrigerantType: 'AcRefrigerantTypeAttrValue',
    AcConpressorType: 'AcConpressorTypeAttrValue',
    AcErrorCode: 'BITMAP32',
    AcLouverPosition: 'AcLouverPositionAttrValue',
    AcCollTemp: 'INT16',
    AcCapacityFormat: 'AcCapacityFormatAttrValue'
};

ZCL.Cluster.HvacThermostat.OcupancyAttrValue = new Enum({
    'Unoccupied': 0x00,
    'Occupied': 0x01
});

ZCL.Cluster.HvacThermostat.RemoteSensingAttrValue = new Enum({
    'LocalTemp': 0x01,
    'OutdoorTemp': 0x02,
    'Occupancy': 0x04
});

ZCL.Cluster.HvacThermostat.CtrlSeqeOfOperAttrValue = new Enum({
    'CoolingOnly': 0x00,
    'CoolingWithReheat': 0x01,
    'HeatingOnly': 0x02,
    'HeatingWithReheat': 0x03,
    'CoolingandHeating': 0x04,
    'CoolingAndHeatingWithReheat': 0x05
});

ZCL.Cluster.HvacThermostat.SystemModeAttrValue = new Enum({
    'Off': 0x00,
    'Auto': 0x01,
    'Cool': 0x03,
    'Heat': 0x04,
    'EmergencyHeating': 0x05,
    'Precooling': 0x06,
    'FanOnly': 0x07,
    'Dry':0x08,
    'Sleep':0x09
});

ZCL.Cluster.HvacThermostat.AlarmMaskAttrValue = new Enum({
    'InitializationFail': 0x01,  
    'HardwareFail': 0x02,
    'SelfCalibrationFail': 0x03
});

ZCL.Cluster.HvacThermostat.RunningStateAttrValue = new Enum({
    'Heat1stStageOn': 0x0001,
    'Cool1stStageOn': 0x0002,
    'Fan1stStageOn': 0x0004,
    'Heat2ndStageOn': 0x0008,
    'Cool2ndStageOn': 0x0010,
    'Fan2ndStageOn': 0x0020,
    'Heat3rdStageOn': 0x0040,
    'Cool3rdStageOn': 0x0080,
    'Fan3rdStageOn': 0x0100
});

ZCL.Cluster.HvacThermostat.RunningModeAttrValue = new Enum({
    'Off': 0x00,
    'Cool': 0x03,
    'Heat': 0x04
});

ZCL.Cluster.HvacThermostat.StartOfWeekAttrValue = new Enum({
    'Sunday': 0x00,
    'Monday': 0x01,
    'Tuesday': 0x02,
    'Wednesday': 0x03,
    'Thursday': 0x04,
    'Friday': 0x05,
    'Saturday': 0x06
});

ZCL.Cluster.HvacThermostat.TempSetpointHoldAttrValue = new Enum({
    'Off': 0x00,
    'On': 0x01
});

ZCL.Cluster.HvacThermostat.SetpointChangeSrcAttrValue = new Enum({
    'Manual': 0x00,
    'Schedule': 0x01,
    'External': 0x02
});

ZCL.Cluster.HvacThermostat.AcTypeAttrValue = new Enum({
    'CoolAndFixSpeed': 0x01,
    'HeatPumpAndFixSpeed': 0x02,
    'CoolAndInverter': 0x03,
    'HeatPumpAndInverter': 0x04
});

ZCL.Cluster.HvacThermostat.AcRefrigerantTypeAttrValue = new Enum({
    'R22': 0x01,
    'R410a': 0x02,
    'R407c': 0x03
});

ZCL.Cluster.HvacThermostat.AcConpressorTypeAttrValue = new Enum({
    'T1': 0x01,
    'T2': 0x02,
    'T3': 0x03
});

ZCL.Cluster.HvacThermostat.AcLouverPositionAttrValue = new Enum({
    'FullyClosed': 0x01,
    'FullyOpen': 0x02,
    'QuarterOpen': 0x03,
    'HalfOpen': 0x04,
    '3QuartersOpen': 0x05
});

ZCL.Cluster.HvacThermostat.AcCapacityFormatAttrValue = new Enum({
    'Btuh': 0x00
});

ZCL.Cluster.HvacThermostat.Cmd = new Enum({
    'SetpointRaiseLower': 0x00,
    'SetWeeklySchedule': 0x01,
    'GetWeeklySchedule': 0x02,
    'ClearWeeklySchedule': 0x03,
    'GetRelayStatusLog': 0x04
});

ZCL.Cluster.HvacThermostat.CmdRsp = new Enum({
    'GetWeeklyScheduleRsp': 0x00,
    'GetRelayStatusLogRsp': 0x01
});

ZCL.Cluster.HvacThermostat.ModeValue = new Enum({
    'Heat': 0x00,
    'Cool': 0x01,
    'Both': 0x02
});