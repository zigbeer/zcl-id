/**************************************************************/
/***   Analog Value (BACnet Regular) Cluster              ***/
/**************************************************************/
ZCL.Cluster.PiAnalogValueBacnetReg.Attr = new Enum({
    'COVIncrement': 0x0016,
    'ObjectIdentifier': 0x004B,
    'ObjectName': 0x004D,
    'ObjectType': 0x004F,
    'ProfileName': 0x00A8
});

ZCL.Cluster.PiAnalogValueBacnetReg.AttrType = {
    COVIncrement: 'SINGLE_PREC',
    ObjectIdentifier: 'BAC_OID',
    ObjectName: 'CHAR_STR',
    ObjectType: 'ENUM16',
    ProfileName: 'CHAR_STR'
};