/*******************************************/
/***HVAC: Fan Control Cluster            ***/
/*******************************************/
ZCL.Cluster.HvacFanControl.Attr = new Enum({
  // Fan Control Attribute set
    'FanMode': 0x0000,
    'FanModeSequence': 0x0001
});

ZCL.Cluster.HvacFanControl.AttrType = {
    FanMode: 'FanModeAttrValue',            // ENUM8
    FanModeSequence: 'FanModeSeqAttrValue'  // ENUM8
};

ZCL.Cluster.HvacFanControl.FanModeAttrValue = new Enum({
    'Off': 0x00, 
    'Low': 0x01,
    'Medium': 0x02,
    'High': 0x03,
    'On': 0x04,
    'Auto': 0x05,
    'Smart': 0x06
});

ZCL.Cluster.HvacFanControl.FanModeSeqAttrValue = new Enum({
    'LowMedHigh': 0x00, 
    'LowHigh': 0x01,
    'LowMedHighAuto': 0x02,
    'LowHighAuto': 0x03,
    'OnAuto': 0x04 
});
