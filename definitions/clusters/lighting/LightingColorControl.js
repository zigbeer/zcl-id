/***      LIGHTING SPECIFICATION       ***/
/*****************************************/
/***  Color Control Cluster            ***/
/*****************************************/
ZCL.Cluster.LightingColorControl.Attr = new Enum({
  // Color Information Attributes set
    'CurrentHue': 0x0000,
    'CurrentSaturation': 0x0001,
    'RemainingTime': 0x0002,
    'CurrentX': 0x0003,
    'CurrentY': 0x0004,
    'DriftCompensation': 0x0005,
    'CompensationText': 0x0006,
    'ColorTemperature': 0x0007,
    'ColorMode': 0x0008,
  // Defined Primaries Inofrmation Attribute Set
    'NumPrimaries': 0x0010,
    'Primary1X': 0x0011,
    'Primary1Y': 0x0012,
    'Primary1Intensity': 0x0013,
    'Primary2X': 0x0015,
    'Primary2Y': 0x0016,
    'Primary2Intensity': 0x0017,
    'Primary3X': 0x0019,
    'Primary3Y': 0x001a,
    'Primary3Intensity': 0x001b,
  // Additional Defined Primaries Information Attribute set
    'Primary4X': 0x0020,
    'Primary4Y': 0x0021,
    'Primary4Intensity': 0x0022,
    'Primary5X': 0x0024,
    'Primary5Y': 0x0025,
    'Primary5Intensity': 0x0026,
    'Primary6X': 0x0028,
    'Primary6Y': 0x0029,
    'Primary6Intensity': 0x002a,
  // Defined Color Points Settings Attribute set
    'WhitePointX': 0x0030,
    'WhitePointY': 0x0031,
    'ColorPointRX': 0x0032,
    'ColorPointRY': 0x0033,
    'ColorPointRIntensity': 0x0034,
    'ColorPointGX': 0x0036,
    'ColorPointGY': 0x0037,
    'ColorPointGIntensity': 0x0038,
    'ColorPointBX': 0x003a,
    'ColorPointBY': 0x003b,
    'ColorPointBIntensity': 0x003c,
  //TODO
    'EnhancedCurrentHue': 0x4000,
    'EnhancedColorMode': 0x4001,
    'ColorLoopActive': 0x4002,
    'ColorLoopDirection': 0x4003,
    'ColorLoopTime': 0x4004,
    'ColorLoopStartEnhancedHue': 0x4005,
    'ColorLoopStoredEnhancedHue': 0x4006,
    'ColorCapabilities': 0x400A,
});

ZCL.Cluster.LightingColorControl.AttrType = {
    CurrentHue: 'UINT8',
    CurrentSaturation: 'UINT8',
    RemainingTime: 'UINT16',
    CurrentX: 'UINT16',
    CurrentY: 'UINT16',
    DriftCompensation: 'DriftCompensationAttrValue', // ENUM8
    CompensationText: 'CHAR_STR',
    ColorTemperature: 'UINT16',
    ColorMode: 'ColorModeAttrValue', // ENUM8
    NumPrimaries: 'UINT8',
    Primary1X: 'UINT16',
    Primary1Y: 'UINT16',
    Primary1Intensity: 'UINT8',
    Primary2X: 'UINT16',
    Primary2Y: 'UINT16',
    Primary2Intensity: 'UINT8',
    Primary3X: 'UINT16',
    Primary3Y: 'UINT16',
    Primary3Intensity: 'UINT8',
    Primary4X: 'UINT16',
    Primary4Y: 'UINT16',
    Primary4Intensity: 'UINT8',
    Primary5X: 'UINT16',
    Primary5Y: 'UINT16',
    Primary5Intensity: 'UINT8',
    Primary6X: 'UINT16',
    Primary6Y: 'UINT16',
    Primary6Intensity: 'UINT8',
    WhitePointX: 'UINT16',
    WhitePointY: 'UINT16',
    ColorPointRX: 'UINT16',
    ColorPointRY: 'UINT16',
    ColorPointRIntensity: 'UINT8',
    ColorPointGX: 'UINT16',
    ColorPointGY: 'UINT16',
    ColorPointGIntensity: 'UINT8',
    ColorPointBX: 'UINT16',
    ColorPointBY: 'UINT16',
    ColorPointBIntensity: 'UINT8'
};

ZCL.Cluster.LightingColorControl.DriftCompensationAttrValue = new Enum({
    'None': 0x00,
    'OtherUnknown': 0x01,
    'TemperatureMonitoring': 0x02,
    'OpticalLuminMonitorFeedback': 0x03,
    'OpticalColorMonitorFeedback': 0x04
});

ZCL.Cluster.LightingColorControl.ColorModeAttrValue = new Enum({
    'CurrentHueSaturation': 0x00,
    'CurrentXY': 0x01,
    'ColorTemp': 0x02
});

ZCL.Cluster.LightingColorControl.Cmd = new Enum({
    'MoveToHue': 0x00,
    'MoveHue': 0x01,
    'StepHue': 0x02,
    'MoveToSaturation': 0x03,
    'MoveSaturation': 0x04,
    'StepSaturation': 0x05,
    'MoveToHueAndSaturation': 0x06,
    'MoveToColor': 0x07,
    'MoveColor': 0x08,
    'StepColor': 0x09,
    'MoveToColorTemp': 0x0a,
    'EnhancedMoveToHue': 0x40,
    'EnhancedMoveHue': 0x41,
    'EnhancedStepHue': 0x42,
    'EnhancedMoveToHueAndSaturation': 0x43,
    'ColorLoopSet': 0x44,
    'StopMoveStep': 0x47,
});

ZCL.Cluster.LightingColorControl.CmdRsp = new Enum({

});

ZCL.Cluster.LightingColorControl.DirectionValue = new Enum({
    'ShortestDistance': 0x00,
    'LongestDistance': 0x01,
    'Up': 0x02,
    'Down': 0x03
});

ZCL.Cluster.LightingColorControl.MoveModeValue = new Enum({
    'Stop': 0x00,
    'Up': 0x01,
    'Down': 0x03
});

ZCL.Cluster.LightingColorControl.StepModeValue = new Enum({
    'Up': 0x01,
    'Down': 0x03
});
