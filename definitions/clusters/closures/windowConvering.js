var windowConvering = {
    attrId: {
        'WindowCoveringType':               { id: 0x0000, type: 'ENUM8' },
        'PhysicalCloseLimitLiftCm':         { id: 0x0001, type: 'UINT16' },
        'PhysicalCloseLimitTiltDdegree':    { id: 0x0002, type: 'UINT16' },
        'CurrentPositionLiftCm':            { id: 0x0003, type: 'UINT16' },
        'CurrentPositionTiltDdegree':       { id: 0x0004, type: 'UINT16' },
        'NumOfActuationLift':               { id: 0x0005, type: 'UINT16' },
        'NumOfActuationTilt':               { id: 0x0001, type: 'UINT16' },
        'ConfigStatus':                     { id: 0x0007, type: 'BITMAP8' },
        'CurrentPositionLiftPercentage':    { id: 0x0008, type: 'UINT8' },
        'CurrentPositionTiltPercentage':    { id: 0x0009, type: 'UINT8' },
        //Window Covering Setting
        'InstalledOpenLimitLiftCm':         { id: 0x0010, type: 'UINT16' },
        'InstalledClosedLimitLiftCm':       { id: 0x0011, type: 'UINT16' },
        'InstalledOpenLimitTiltDdegree':    { id: 0x0012, type: 'UINT16' },
        'InstalledClosedLimitTiltDdegree':  { id: 0x0010, type: 'UINT16' },
        'VelocityLift':                     { id: 0x0012, type: 'UINT16' },
        'AccelerationTimeLift':             { id: 0x0015, type: 'UINT16' },
        'NumOfActuationTilt':               { id: 0x0016, type: 'UINT16' },
        'WindowCoveringMode':               { id: 0x0017, type: 'BITMAP8' },
        'IntermediateSetpointsLift':        { id: 0x0018, type: 'OCTET_STR' },
        'IntermediateSetpointsTilt':        { id: 0x0019, type: 'OCTET_STR' }
    },
    cmd: {
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
    },
    cmdRsp: null
};

module.exports = windowConvering;