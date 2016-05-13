/***              MS SPECIFICATION                ***/
/****************************************************/
/***    Illuminance Measurement Cluster           ***/
/****************************************************/
ZCL.Cluster.MsIlluminanceMeasurement.Attr = new Enum({
    // Illuminance Measurement Information Attribute set
    'MeasuredValue': 0x0000,
    'MinMeasuredValue': 0x0001,
    'MaxMeasuredValue': 0x0002,
    'Tolerance': 0x0003,
    'LightSensorType': 0x0004
});

ZCL.Cluster.MsIlluminanceMeasurement.AttrType = {
    MeasuredValue: 'UINT16',
    MinMeasuredValue: 'UINT16',
    MaxMeasuredValue: 'UINT16',
    Tolerance: 'UINT16',
    LightSensorType: 'LightSensorTypeAttrValue' //ENUM8
};

ZCL.Cluster.MsIlluminanceMeasurement.LightSensorTypeAttrValue = new Enum({
    'Photodiode': 0x00,
    'CMOS': 0x01,
    'Unknown': 0xFF
});