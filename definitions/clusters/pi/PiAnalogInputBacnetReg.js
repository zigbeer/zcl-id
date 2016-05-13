
/************************************************************/
/***   Analog Input (BACnet Regular) Cluster              ***/
/************************************************************/
ZCL.Cluster.PiAnalogInputBacnetReg.Attr = new Enum({
    'COVIncrement': 0x0016,
    'DeviceType': 0x001F,
    'ObjectId': 0x004B,
    'ObjectName': 0x004D,
    'ObjectType': 0x004F,
    'UpdateInterval': 0x0076,
    'ProfileName': 0x00A8
});

ZCL.Cluster.PiAnalogInputBacnetReg.AttrType = {
    COVIncrement: 'SINGLE_PREC',
    DeviceType: 'CHAR_STR',
    ObjectId: 'BAC_OID',
    ObjectName: 'CHAR_STR',
    ObjectType: 'ENUM16',
    UpdateInterval: 'UINT8',
    ProfileName: 'CHAR_STR'
};