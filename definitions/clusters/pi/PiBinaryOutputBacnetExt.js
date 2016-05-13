/**************************************************************/
/***   Binary Output (BACnet Extended) Cluster              ***/
/**************************************************************/
ZCL.Cluster.PiBinaryOutputBacnetExt.Attr = new Enum({
    'AckedTransitions': 0x0000,
    'NotificationClass': 0x0011,
    'EventEnable': 0x0023,
    'EventState': 0x0024,
    'NotifyType': 0x0048,
    'TimeDelay': 0x0071,
    'EventTimeStamps': 0x0082
});

ZCL.Cluster.PiBinaryOutputBacnetExt.AttrType = {
    AckedTransitions: 'BITMAP8',
    NotificationClass: 'UINT16',
    EventEnable: 'BITMAP8',
    EventState: 'ENUM8',
    NotifyType: 'ENUM8',
    TimeDelay: 'UINT8',
    EventTimeStamps: 'ARRAY'
};