/******************************************/
/*** Window Covering Cluster            ***/
/******************************************/
ZCL.Cluster.ClosuresWindowConvering.Attr = new Enum({
    'WindowCoveringType': 0x0000, 
    'PhysicalCloseLimitLiftCm': 0x0001, 
    'PhysicalCloseLimitTiltDdegree': 0x0002, 
    'CurrentPositionLiftCm': 0x0003, 
    'CurrentPositionTiltDdegree': 0x0004, 
    'NumOfActuationLift': 0x0005, 
    'NumOfActuationTilt': 0x0006, 
    'ConfigStatus': 0x0007, 
    'CurrentPositionLiftPercentage': 0x0008, 
    'CurrentPositionTiltPercentage': 0x0009, 
//Window Covering Setting
    'InstalledOpenLimitLiftCm': 0x0010, 
    'InstalledClosedLimitLiftCm': 0x0011, 
    'InstalledOpenLimitTiltDdegree': 0x0012, 
    'InstalledClosedLimitTiltDdegree': 0x0013, 
    'VelocityLift': 0x0014, 
    'AccelerationTimeLift': 0x0015, 
    'DecelerationTimeLift': 0x0016, 
    'WindowCoveringMode': 0x0017, 
    'IntermediateSetpointsLift': 0x0018, 
    'IntermediateSetpointsTilt': 0x0019 
});

//TODO, AttrType

ZCL.Cluster.ClosuresWindowConvering.Cmd = new Enum({
    'UpOpen': 0x00, 
    'DownClose': 0x01, 
    'Stop': 0x02, 
    //'GoToLiftSetpoint': 0x03, 
    'GoToLiftValue': 0x04, 
    'GoToLiftPercentage': 0x05, 
    //'GoToTiltSetpoint': 0x06, 
    'GoToTiltValue': 0x07, 
    'GoToTiltPercentage': 0x08
    //'ProgramSetpoint': 0x09 
});

ZCL.Cluster.ClosuresWindowConvering.CmdRsp = new Enum({
    
});