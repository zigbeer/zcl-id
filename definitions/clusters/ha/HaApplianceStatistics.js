/**************************************************************/
/***             Appliance Statistics Cluster               ***/
/**************************************************************/
ZCL.Cluster.HaApplianceStatistics.Attr = new Enum({
    'LogMaxSize': 0x0000,
    'LogQueueMaxSize': 0x0001
});

ZCL.Cluster.HaApplianceStatistics.AttrType = {
    LogMaxSize: 'UINT32',
    LogQueueMaxSize: 'UINT8'
};

ZCL.Cluster.HaApplianceStatistics.Cmd = new Enum({
    'Log': 0x00,
    'LogQueue': 0x01
});

ZCL.Cluster.HaApplianceStatistics.CmdRsp = new Enum({
    'LogNotification': 0x00,  // M, zclApplianceStatisticsLogNotification_t
    'LogRsp': 0x01,  // M, zclApplianceStatisticsLogRsp_t
    'LogQueueRsp': 0x02,  // M, zclApplianceStatisticsLogQueueRsp_t
    'StatisticsAvailable': 0x03  // M, zclApplianceStatisticsStatisticsAvailable_t 
});
