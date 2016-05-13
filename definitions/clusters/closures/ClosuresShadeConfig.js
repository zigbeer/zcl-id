/***        CLOSURES SPECIFICATION          ***/
/**********************************************/
/*** Shade Configuration Cluster            ***/
/**********************************************/
ZCL.Cluster.ClosuresShadeConfig.Attr = new Enum({
  // Shade information Attributes set
    'PhysicalClosedLimit': 0x0000,
    'MotorStepSize': 0x0001,
    'Status': 0x0002,
  // Shade settings Attributes set
    'LosedLimit': 0x0010,
    'Mode': 0x0012
});

ZCL.Cluster.ClosuresShadeConfig.AttrType = {
    PhysicalClosedLimit: 'UINT16',
    MotorStepSize: 'UINT8',
    Status: 'StatusAttrValue',  //BITMAP8
    LosedLimit: 'UINT16',
    Mode: 'ModeAttrValue'       //ENUM8
};

ZCL.Cluster.ClosuresShadeConfig.StatusAttrValue = new Enum({
    'ShadeOperational': 0x01,
    'ShadeAdjusting': 0x02,
    'ShadeDirection': 0x04,
    'ShadeMotorForwardDirection': 0x08
});

ZCL.Cluster.ClosuresShadeConfig.ModeAttrValue = new Enum({
    'Normal': 0x00,
    'Configure': 0x01
});