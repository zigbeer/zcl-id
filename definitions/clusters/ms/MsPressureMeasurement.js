
/*****************************************************************************/
/***    Pressure Measurement Cluster                                       ***/
/*****************************************************************************/
ZCL.Cluster.MsPressureMeasurement.Attr = new Enum({
  // Pressure Measurement Information Attribute set
    'MeasuredValue': 0x0000,
    'MinMeasuredValue': 0x0001,
    'MaxMeasuredValue': 0x0002,
    'Tolerance': 0x0003
});

ZCL.Cluster.MsPressureMeasurement.AttrType = {
    MeasuredValue: 'INT16',
    MinMeasuredValue: 'INT16',
    MaxMeasuredValue: 'INT16',
    Tolerance: 'UINT16' 
};
