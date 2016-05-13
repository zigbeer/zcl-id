/****************************************************************/
/***HVAC: Thermostat User Interface Config Cluster            ***/
/****************************************************************/
ZCL.Cluster.HvacUserInterfaceConfig.Attr = new Enum({
  // Thermostat User Interface Config Attribute set
    'TempDisplayMode': 0x0000,
    'KeypadLockout': 0x0001,
    'ProgrammingVisibility': 0x0002 
});

ZCL.Cluster.HvacUserInterfaceConfig.AttrType = {
    TempDisplayMode: 'TempDisplayModeAttrValue',    // ENUM8
    KeypadLockout: 'KeypadLockoutAttrValue',        // ENUM8
    ProgrammingVisibility: 'ProgrammingVisibilityAttrValue' // ENUM8
};

ZCL.Cluster.HvacUserInterfaceConfig.TempDisplayModeAttrValue = new Enum({
    'ModeInC': 0x00,
    'ModeInF': 0x01
});

ZCL.Cluster.HvacUserInterfaceConfig.TempDisplayModeAttrValue = new Enum({
    'NoLockout': 0x00,
    'Level1Lockout': 0x01,
    'Level2Lockout': 0x02,
    'Level3Lockout': 0x03,
    'Level4Lockout': 0x04,
    'Level5Lockout': 0x05
});

ZCL.Cluster.HvacUserInterfaceConfig.ProgrammingVisibilityAttrValue = new Enum({
    'Enable': 0x00,
    'Disabled': 0x01
});