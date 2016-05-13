/***               HVAC SPECIFICATION               ***/
/******************************************************/
/***HVAC: Pump Config and Control Cluster           ***/
/******************************************************/
ZCL.Cluster.HvacPumpConfigControl.Attr = new Enum({
  // Pump information Attribute set
    'MaxPressure': 0x0000,
    'MaxSpeed': 0x0001,
    'MaxFlow': 0x0002,
    'MinConstPressure': 0x0003,
    'MaxConstPressure': 0x0004,
    'MinCompPressure': 0x0005,
    'MaxCompPressure': 0x0006,
    'MinConstSpeed': 0x0007,
    'MaxConstSpeed': 0x0008,
    'MinConstFlow': 0x0009,
    'MaxConstFlow': 0x000A,
    'MinConstTemp': 0x000B,
    'MaxConstTemp': 0x000C,
  // Pump Dynamic Information Attribute set
    'PumpStatus': 0x0010,
    'EffectiveOperationMode': 0x0011,
    'EffectiveControlMode': 0x0012,
    'Capacity': 0x0013,
    'Speed': 0x0014,
    'LifetimeRunningHours': 0x0015,
    'Power': 0x0016,
    'LifetimeEnergyConsumed': 0x0017,
  // Pump Settings Attributes set
    'OperationMode': 0x0020,
    'ControlMode': 0x0021,
    'AlarmMask': 0x0022
});

ZCL.Cluster.HvacPumpConfigControl.AttrType = {
    MaxPressure: 'INT16',
    MaxSpeed: 'UINT16',
    MaxFlow: 'UINT16',
    MinConstPressure: 'INT16',
    MaxConstPressure: 'INT16',
    MinCompPressure: 'INT16',
    MaxCompPressure: 'INT16',
    MinConstSpeed: 'UINT16',
    MaxConstSpeed: 'UINT16',
    MinConstFlow: 'UINT16',
    MaxConstFlow: 'UINT16',
    MinConstTemp: 'INT16',
    MaxConstTemp: 'INT16',
    PumpStatus: 'PumpStatusAttrValue',                  // BITMAP16
    EffectiveOperationMode: 'OperationModeAttrValue',   // ENUM8
    EffectiveControlMode: 'ControlModeAttrValue',       // ENUM8
    Capacity: 'INT16',
    Speed: 'UINT16',
    LifetimeRunningHours: 'UINT24',
    Power: 'UINT24',
    LifetimeEnergyConsumed: 'UINT32',
    OperationMode: 'OperationModeAttrValue',    // ENUM8
    ControlMode: 'ControlModeAttrValue',        // ENUM8
    AlarmMask: 'AlarmMaskAttrValue'             // BITMAP16
};

ZCL.Cluster.HvacPumpConfigControl.PumpStatusAttrValue = new Enum({
    'DevFault': 0x0000,
    'SupplyFault': 0x0001,
    'SpeedLow': 0x0002,
    'SpeedHigh': 0x0003,
    'LocalOverride': 0x0004,
    'Running': 0x0005,
    'RemotePressure': 0x0006,
    'RemoteFlow': 0x0007,
    'RemoteTemp': 0x0008
});

ZCL.Cluster.HvacPumpConfigControl.OperationModeAttrValue = new Enum({
    'Normal': 0x00,
    'Minimum': 0x01,
    'Maximum': 0x02,
    'Local': 0x03
});

ZCL.Cluster.HvacPumpConfigControl.ControlModeAttrValue = new Enum({
    'ConstantSpeed': 0x00,
    'ConstantPressure': 0x01,
    'ProportionalPressure': 0x02,
    'ConstantFlow': 0x03,
    'ConstantTemp': 0x05,
    'Automatic': 0x07
});

ZCL.Cluster.HvacPumpConfigControl.AlarmMaskAttrValue = new Enum({
    'SupplyVoltageTooLow': 0x0001,
    'SupplyVoltageTooHigh': 0x0002,
    'PowerMissingPhase': 0x0004,
    'SystemPressureTooLow': 0x0008,
    'SystemPressureTooHigh': 0x0010,
    'DryRunning': 0x0020,
    'MotorTemperatureTooHigh': 0x0040,
    'PumpMotorHasFatalFailure': 0x0080,
    'ElectronicTemperatureTooHigh': 0x0100,
    'PumpBlocked': 0x0200,
    'SensorFailure': 0x0400,
    'ElectronicNonFatalFailure': 0x0800,
    'ElectronicFatalFailure': 0x1000,
    'GeneralFault': 0x2000
});
