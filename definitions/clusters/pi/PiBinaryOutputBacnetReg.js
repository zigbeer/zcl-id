/**************************************************************/
/***   Binary Output (BACnet Regular) Cluster               ***/
/**************************************************************/
ZCL.Cluster.PiBinaryOutputBacnetReg.Attr = new Enum({
    'ChangeOfStateCount': 0x000F,
    'ChangeOfStateTime': 0x0010,
    'DeviceType': 0x001F,
    'ElapsedActiveTime': 0x0021,
    'FeedBackValue': 0x0028,
    'ObjectIdentifier': 0x004B,
    'ObjectName': 0x004D,
    'ObjectType': 0x004F,
    'TimeOfATReset': 0x0072,
    'TimeOfSCReset': 0x0073,
    'ProfileName': 0x00A8
});

ZCL.Cluster.PiBinaryOutputBacnetReg.AttrType = {
    ChangeOfStateCount: 'UINT32',
    ChangeOfStateTime: 'STRUCT',
    DeviceType: 'CHAR_STR',
    ElapsedActiveTime: 'UINT32',
    FeedBackValue: 'ENUM8',
    ObjectIdentifier: 'BAC_OID',
    ObjectName: 'CHAR_STR',
    ObjectType: 'ENUM16',
    TimeOfATReset: 'STRUCT',
    TimeOfSCReset: 'STRUCT',
    ProfileName: 'CHAR_STR'
};