var applianceEventsAlerts = {
    attrId: null,
    cmd: {
        'getAlerts': 0x00  // no payload   
    },
    cmdRsp: {
        'getAlertsRsp': 0x00,
        'alertsNotification': 0x01,
        'eventNotification': 0x02
    }
};

module.exports = applianceEventsAlerts;
