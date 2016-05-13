/*****************************************************************************/
/***    Temperature Measurement Cluster                                    ***/
/*****************************************************************************/
ZCL.Cluster.MsTemperatureMeasurement.Attr = new Enum({
  // Temperature Measurement Information Attributes set
    'MeasuredValue': 0x0000,
    'MinMeasuredValue': 0x0001,
    'MaxMeasuredValue': 0x0002,
    'Tolerance': 0x0003,
  // Temperature Measurement Settings Attributes set
    'MinPercentChange': 0x0010,
    'MinAbsoluteChange': 0x0011
});

ZCL.Cluster.MsTemperatureMeasurement.AttrType = {
    MeasuredValue: 'INT16',
    MinMeasuredValue: 'INT16',
    MaxMeasuredValue: 'INT16',
    Tolerance: 'UINT16',
    MinPercentChange: 'TODO',
    MinAbsoluteChange: 'TODO'
};
