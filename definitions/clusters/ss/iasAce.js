var iasAce = {
    attrId: null,
    cmd: {
        'arm': 0x00,  
        'bypass': 0x01, 
        'emergency': 0x02,  
        'fire': 0x03,  
        'panic': 0x04,  
        'getZoneIDMap': 0x05,  
        'getZoneInfo': 0x06,
        'getPanelStatus': 0x07,
        'getBypassedZoneList': 0x08,
        'getZoneStatus': 0x09
    },
    cmdRsp: {
        'armRsp': 0x00,
        'getZoneIDMapRsp': 0x01, 
        'getZoneInfoRsp': 0x02,
        'zoneStatusChanged': 0x03,
        'panelStatusChanged': 0x04,
        'getPanelStatusRsp': 0x05,
        'setBypassedZoneList': 0x06,
        'bypassRsp': 0x07,
        'getZoneStatusRsp': 0x08,
    }
};

module.exports = iasAce;
