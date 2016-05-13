/************************************/
/***  IAS WD Cluster              ***/
/************************************/
ZCL.Cluster.SsIasWd.Attr = new Enum({
   // Maximum Duration Attribute
    'MaxDuration': 0x0000
});

ZCL.Cluster.SsIasWd.AttrType = {
    MaxDuration: 'UINT16'
};

ZCL.Cluster.SsIasWd.Cmd = new Enum({
    'StartWarning': 0x00,
    'Squawk': 0x01
});

ZCL.Cluster.SsIasWd.CmdRsp = new Enum({
    
});

ZCL.Cluster.SsIasWd.WarningModeValue = new Enum({
    'Stop': 0,
    'Burglar': 1,
    'Fire': 2,
    'Emergency': 3
});
ZCL.Cluster.SsIasWd.StartWarningStrobeValue = new Enum({
    'NoStrobe': 0,
    'UseStrobeInParallelToWarning': 1
});

ZCL.Cluster.SsIasWd.SquawkModeValue = new Enum({
    'SystemAlarmedNotificationSound': 0,
    'SystemDisarmedNotificationSound': 1
});
ZCL.Cluster.SsIasWd.SquawkStrobeValue = new Enum({
    'NoStrobe': 0,
    'UseStrobeBlinkInParallelToSquawk': 1
});
ZCL.Cluster.SsIasWd.SquawkLevelValue = new Enum({
    'LowLevelSound': 0,
    'MediumLevelSound': 1,
    'HighLevelSound': 2,
    'VeryHighLevelSound': 3
});
