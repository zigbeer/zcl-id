/**************************************************************/
/***   Analog Output (BACnet Extended) Cluster              ***/
/**************************************************************/
ZCL.Cluster.PiAnalogOutputBacnetExt.Attr = new Enum({
    'AckedTransitions': 0x0000,
    'NotificationClass': 0x0011,
    'Deadband': 0x0019,
    'EventEnable': 0x0023,
    'EventState': 0x0024,
    'HighLimit': 0x002D,
    'LimitEnable': 0x0034,
    'LowLimit': 0x003B,
    'NotifyType': 0x0048,
    'TimeDelay': 0x0071,
    'EventTimeStamps': 0x0082
});

ZCL.Cluster.PiAnalogOutputBacnetExt.AttrType = {
    AckedTransitions: 'BITMAP8',
    NotificationClass: 'UINT16',
    Deadband: 'SINGLE_PREC',
    EventEnable: 'BITMAP8',
    EventState: 'ENUM8',
    HighLimit: 'SINGLE_PREC',
    LimitEnable: 'BITMAP8',
    LowLimit: 'SINGLE_PREC',
    NotifyType: 'ENUM8',
    TimeDelay: 'UINT8',
    EventTimeStamps: 'ARRAY'
};