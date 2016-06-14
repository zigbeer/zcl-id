var applianceStatistics = {
    attrId: {
        'logMaxSize':      { id: 0x0000, type: 'UINT32' },
        'logQueueMaxSize': { id: 0x0001, type: 'UINT8' }
    },
    cmd: {
        'log': 0x00,
        'logQueue': 0x01
    },
    cmdRsp: {
        'logNotification': 0x00,         // M, zclApplianceStatisticsLogNotification_t
        'logRsp': 0x01,                  // M, zclApplianceStatisticsLogRsp_t
        'logQueueRsp': 0x02,             // M, zclApplianceStatisticsLogQueueRsp_t
        'statisticsAvailable': 0x03      // M, zclApplianceStatisticsStatisticsAvailable_t 
    }
};

module.exports = applianceStatistics;
