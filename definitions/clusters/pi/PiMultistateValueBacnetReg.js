/**************************************************************/
/***   Multistate Value (BACnet Regular) Cluster            ***/
/**************************************************************/
ZCL.Cluster.PiMultistateValueBacnetReg.Attr = new Enum({
    'ObjectIdentifier': 0x004B,
    'ObjectName': 0x004D,
    'ObjectType': 0x004F,
    'ProfileName': 0x00A8
});

ZCL.Cluster.PiMultistateValueBacnetReg.AttrType = {
    ObjectIdentifier: 'BAC_OID',
    ObjectName: 'CHAR_STR',
    ObjectType: 'ENUM16',
    ProfileName: 'CHAR_STR'
};