/*******************************************************/
/***HVAC: Dehumidifcation Control Cluster            ***/
/*******************************************************/
ZCL.Cluster.HvacDihumidificationControl.Attr = new Enum({
  // Dehumidifcation Control Information Attribute set
    'RelativeHumidity': 0x0000,
    'DehumidCooling': 0x0001,
  // Dehumidifcation Control Settings Attribute set
    'RHDehumidSetpoint': 0x0010,
    'RelativeHumidityMode': 0x0011,
    'DehumidLockout': 0x0012,
    'DehumidHysteresis': 0x0013,
    'DehumidMaxCool': 0x0014,
    'RelativeHumidDisplay': 0x0015
});

ZCL.Cluster.HvacDihumidificationControl.AttrType = {
    RelativeHumidity: 'UINT8',
    DehumidCooling: 'UINT8',
    RHDehumidSetpoint: 'UINT8',
    RelativeHumidityMode: 'RelativeHumidityModeAttrValue',  // ENUM8
    DehumidLockout: 'DehumidLockoutAttrValue',              // ENUM8
    DehumidHysteresis: 'UINT8',
    DehumidMaxCool: 'UINT8',
    RelativeHumidDisplay: 'RelativeHumidDisplayAttrValue'   // ENUM8
};

ZCL.Cluster.HvacDihumidificationControl.RelativeHumidityModeAttrValue = new Enum({
    'MeasuredLocally': 0x00,
    'UpdatedOverNet': 0x01
});

ZCL.Cluster.HvacDihumidificationControl.DehumidLockoutAttrValue = new Enum({
    'DehimidNotAllowed': 0x00,
    'DehimidAllowed': 0x01
});

ZCL.Cluster.HvacDihumidificationControl.RelativeHumidDisplay = new Enum({
    'NotDisplayed': 0x00,
    'Displayed': 0x01,
});
