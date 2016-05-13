/*****************************************************************************/
/***    Illuminance Level Sensing Configuration Cluster                    ***/
/*****************************************************************************/
ZCL.Cluster.MsIlluminanceLevelSensingConfig.Attr = new Enum({
    // Illuminance Level Sensing Information Attribute set
    'LevelStatus': 0x0000,
    'LightSensorType': 0x0001,
    // Illuminance Level Sensing Settings Attribute set
    'IlluminanceTargetLevel': 0x0010
});

ZCL.Cluster.MsIlluminanceLevelSensingConfig.AttrType = {
    LevelStatus: 'LevelStatusAttrValue',            // ENUM8
    LightSensorType: 'LightSensorTypeAttrValue',    // ENUM8
    IlluminanceTargetLevel: 'UINT16'
};

ZCL.Cluster.MsIlluminanceLevelSensingConfig.LevelStatusAttrValue = new Enum({
    'IlluminanceOnTarget': 0x00,
    'IlluminanceBelowTarget': 0x01,
    'IlluminancAboveTarget': 0x02
});

ZCL.Cluster.MsIlluminanceLevelSensingConfig.LightSensorTypeAttrValue = new Enum({
    'Photodiode': 0x00,
    'CMOS': 0x01,
    'Unknown': 0xFF
});
