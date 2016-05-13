/***********************************************************/
/*** Device Temperature Configuration Cluster            ***/
/***********************************************************/
var GenDeviceTempConfig = {
    attrId: {
      // Device Temperature Information
        'CurrentTemperature': 0x0000,
        'MinTempExperienced': 0x0001,
        'MaxTempExperienced': 0x0002,
        'OverTempTotalDwell': 0x0003,
      // Device Temperature Settings
        'DevTempAlarmMask': 0x0010,
        'LowTempThres': 0x0011,
        'HighTempThres': 0x0012,
        'LowTempDwellTripPoint': 0x0013,
        'HighTempDwellTripPoint': 0x0014
    },
    type: {
        CurrentTemperature: 'INT16',
        MinTempExperienced: 'INT16',
        MaxTempExperienced: 'INT16',
        OverTempTotalDwell: 'UINT16',
        DevTempAlarmMask: 'DevTempAlarmMaskAttrValue',  //BITMAP8
        LowTempThres: 'INT16',
        HighTempThres: 'INT16',
        LowTempDwellTripPoint: 'UINT24',
        HighTempDwellTripPoint: 'UINT24'
    },
    cmd: null,
    cmdRsp: null
};

