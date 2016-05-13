/**************************************************************/
/***   Multistate Output (BACnet Regular) Cluster           ***/
/**************************************************************/
ZCL.Cluster.PiMultistateOutputBacnetReg.Attr = new Enum({
    'DeviceType': 0x001F,
    'FeedBackValue ': 0x0028,
    'ObjectIdentifier': 0x004B,
    'ObjectName': 0x004D,
    'ObjectType': 0x004F,
    'ProfileName': 0x00A8
});

ZCL.Cluster.PiMultistateOutputBacnetReg.AttrType = {
    DeviceType: 'CHAR_STR',
    FeedBackValue: 'ENUM8',
    ObjectIdentifier: 'BAC_OID',
    ObjectName: 'CHAR_STR',
    ObjectType: 'ENUM16',
    ProfileName: 'CHAR_STR'
};
