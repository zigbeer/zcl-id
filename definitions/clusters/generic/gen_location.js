/***********************************/
/*** RSSI Location Cluster       ***/
/***********************************/
var GenLocation = {
    attrId: {
      // Location Information
        'Type': 0x0000,
        'Method': 0x0001,
        'Age': 0x0002,
        'QualityMeasure': 0x0003,
        'NumOfDevices': 0x0004,
      // Location Settings
        'Coordinate1': 0x0010,
        'Coordinate2': 0x0011,
        'Coordinate3': 0x0012,
        'Power': 0x0013,
        'PathLossExponent': 0x0014,
        'ReportingPeriod': 0x0015,
        'CalcPeriod': 0x0016,
        'NumRSSIMeasurements': 0x0017
    },
    type: {
      // Location Information
        Type: 'TypeAttrValue', //DATA8
        Method: 'MethodAttrValue', //ENUM8
        Age: 'UINT16',
        QualityMeasure: 'UINT8',
        NumOfDevices: 'UINT8',
      // Location Settings
        Coordinate1: 'INT16',
        Coordinate2: 'INT16',
        Coordinate3: 'INT16',
        Power: 'INT16',
        PathLossExponent: 'UINT16',
        ReportingPeriod: 'UINT16',
        CalcPeriod: 'UINT16',
        NumRSSIMeasurements: 'UINT16'
    },
    cmd: {
        'SetAbsolute': 0x00,
        'SetDevCfg': 0x01,
        'GetDevCfg': 0x02,
        'GetData': 0x03
        //'RssiRsp': 0x04,
        //'SendPings': 0x05,
        //'AnchorNodeAnnounce': 0x06
    },
    cmdRsp: {
        'DevCfgRsp': 0x00,
        'DataRsp': 0x01,
        'DataNotif': 0x02,
        'CompactDataNotif': 0x03,
        'RssiPing': 0x04
        //'RssiReq': 0x05,
        //'ReportRssiMeas': 0x06,
        //'ReqOwnLocation': 0x07
    }
};
