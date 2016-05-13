/*************************************************************/
/***   Analog Output (BACnet Regular) Cluster              ***/
/*************************************************************/
ZCL.Cluster.PiAnalogOutputBacnetReg.Attr = new Enum({
    'COVIncrement': 0x0016,
    'DeviceType': 0x001F,
    'ObjectIdentifier': 0x004B,
    'ObjectName': 0x004D,
    'ObjectType': 0x004F,
    'ProfileName': 0x00A8
});

ZCL.Cluster.PiAnalogOutputBacnetReg.AttrType = {
    COVIncrement: 'SINGLE_PREC',
    DeviceType: 'CHAR_STR',
    ObjectIdentifier: 'BAC_OID',
    ObjectName: 'CHAR_STR',
    ObjectType: 'ENUM16',
    ProfileName: 'CHAR_STR'
};
