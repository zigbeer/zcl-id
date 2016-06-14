/*****************************************************************************/
/***        Relative Humidity Cluster                                      ***/
/*****************************************************************************/
ZCL.Cluster.MsRelativeHumidity.Attr = new Enum({
  // Relative Humidity Information Attribute set
    'MeasuredValue': 0x0000,
    'MinMeasuredValue': 0x0001,
    'MaxMeasuredValue': 0x0002,
    'Tolerance': 0x0003
});

ZCL.Cluster.MsRelativeHumidity.AttrType = {
    MeasuredValue: 'UINT16',
    MinMeasuredValue: 'UINT16',
    MaxMeasuredValue: 'UINT16',
    Tolerance: 'UINT16'
};