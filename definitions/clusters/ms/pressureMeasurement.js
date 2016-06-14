var pressureMeasurement = {
    attrId: {
    	// Pressure Measurement Information
        'measuredValue':    { id: 0x0000, type: 'UINT16', acl: READ },
        'minMeasuredValue': { id: 0x0001, type: 'UINT16', acl: READ },
        'maxMeasuredValue': { id: 0x0002, type: 'UINT16', acl: READ },
        'tolerance':        { id: 0x0003, type: 'UINT16', acl: READ },
        'lightSensorType':  { id: 0x0004, type: 'ENUM8' , acl: READ }
    },
    cmd: null,
    cmdRsp: null
};

module.exports = pressureMeasurement;
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
