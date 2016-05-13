/**************************************************************/
/***         ZCL Appliance Events & Alerts Cluster          ***/
/**************************************************************/
ZCL.Cluster.HaApplianceEventsAlerts.Cmd = new Enum({
    'GetAlerts': 0x00  // no payload   
});

ZCL.Cluster.HaApplianceEventsAlerts.CmdRsp = new Enum({
    'GetAlertsRsp': 0x00,
    'AlertsNotification': 0x01,
    'EventNotification': 0x02
});
