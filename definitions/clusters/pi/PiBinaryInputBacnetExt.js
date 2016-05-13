/**************************************************************/
/***   Binary Input (BACnet Extended) Cluster               ***/
/**************************************************************/
ZCL.Cluster.PiBinaryInputBacnetExt.Attr = new Enum({
    'AckedTransitions': 0x0000,
    'AlarmValue': 0x0006,
    'NotificationClass': 0x0011,
    'EventEnable': 0x0023,
    'EventState': 0x0024,
    'NotifyType': 0x0048,
    'TimeDelay': 0x0071,
    'EventTimeStamps': 0x0082
});

ZCL.Cluster.PiBinaryInputBacnetExt.AttrType = {
    AckedTransitions: 'BITMAP8',
    AlarmValue: 'BOOLEAN',
    NotificationClass: 'UINT16',
    EventEnable: 'BITMAP8',
    EventState: 'ENUM8',
    NotifyType: 'ENUM8',
    TimeDelay: 'UINT8',
    EventTimeStamps: 'ARRAY'
};