/*****************************************************************************/
/***         Occupancy Sensing Cluster                                     ***/
/*****************************************************************************/
ZCL.Cluster.MsOccupancySensing.Attr = new Enum({
    // Occupancy Sensor Configuration Attribute set
    'Occupancy': 0x0000,
    'OccupancySensorType': 0x0001,
    // PIR Configuration Attribute set
    'PIROToUDelay': 0x0010,
    'PIRUToODelay': 0x0011,
    'PIRUToOThreshold': 0x0012,
    // Ultrasonic Configuration Attribute set
    'UltrasonicOToUDelay': 0x0020,
    'UltrasonicUToODelay': 0x0021,
    'UltrasonicUToOThreshold': 0x0022
});

ZCL.Cluster.MsOccupancySensing.AttrType = {
    Occupancy: 'OccupancyAttrValue',                        // BITMAP8
    OccupancySensorType: 'OccupancySensorTypeAttrValue',    // ENUM8
    PIROToUDelay: 'UINT16',
    PIRUToODelay: 'UINT16',
    PIRUToOThreshold: 'UINT8',
    UltrasonicOToUDelay: 'UINT16',
    UltrasonicUToODelay: 'UINT16',
    UltrasonicUToOThreshold: 'UINT8'
};

ZCL.Cluster.MsOccupancySensing.OccupancyAttrValue = new Enum({
    'Occupied,': 0x00,
    'Unoccupied': 0x01
});

ZCL.Cluster.MsOccupancySensing.OccupancySensorTypeAttrValue = new Enum({
    'PIR': 0x00,
    'Ultrasonic': 0x01,
    'PIRAndUltrasonic': 0x02
});