/**************************************************************/
/***   Multistate Input (BACnet Regular) Cluster            ***/
/**************************************************************/
ZCL.Cluster.PiMultistateInputBacnetReg.Attr = new Enum({
    'DeviceType': 0x001F,
    'ObjectIdentifier': 0x004B,
    'ObjectName': 0x004D,
    'ObjectType': 0x004F,
    'ProfileName': 0x00A8
});

ZCL.Cluster.PiMultistateInputBacnetReg.AttrType = {
    DeviceType: 'CHAR_STR',
    ObjectIdentifier: 'BAC_OID',
    ObjectName: 'CHAR_STR',
    ObjectType: 'ENUM16',
    ProfileName: 'CHAR_STR'
};