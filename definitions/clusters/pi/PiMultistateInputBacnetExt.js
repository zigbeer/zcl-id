/**************************************************************/
/***   Multistate Input (BACnet Extended) Cluster           ***/
/**************************************************************/
ZCL.Cluster.PiMultistateInputBacnetExt.Attr = new Enum({
    'AckedTransitions': 0x0000,
    'AlarmValues': 0x0006,
    'NotificationClass': 0x0011,
    'EventEnable': 0x0023,
    'EventState': 0x0024,
    'FaultValues': 0x0025,
    'NotifyType': 0x0048,
    'TimeDelay': 0x0071,
    'EventTimeStamps': 0x0082
});

ZCL.Cluster.PiMultistateInputBacnetExt.AttrType = {
    AckedTransitions: 'BITMAP8',
    AlarmValues: 'UINT16',
    NotificationClass: 'UINT16',
    EventEnable: 'BITMAP8',
    EventState: 'ENUM8',
    FaultValues: 'UINT16',
    NotifyType: 'ENUM8',
    TimeDelay: 'UINT8',
    EventTimeStamps: 'ARRAY'
};
