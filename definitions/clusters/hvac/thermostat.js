var thermostat = {
    attrId: {
        // Thermostat Information
        'localTemp':                        { id: 0x0000, type: 'INT16'    },
        'outdoorTemp':                      { id: 0x0001, type: 'INT16'    },
        'ocupancy':                         { id: 0x0002, type: 'BITMAP8'  },
        'absMinHeatSetpointLimit':          { id: 0x0003, type: 'INT16'    },
        'absMaxHeatSetpointLimit':          { id: 0x0004, type: 'INT16'    },
        'absMinCoolSetpointLimit':          { id: 0x0005, type: 'INT16'    },
        'absMaxCoolSetpointLimit':          { id: 0x0006, type: 'INT16'    },
        'pICoolingDemand':                  { id: 0x0007, type: 'UINT8'    },
        'pIHeatingDemand':                  { id: 0x0008, type: 'UINT8'    },
        'systemTypeConfig':                 { id: 0x0009, type: 'BITMAP8'  },
        // Thermostat Settings
        'localTemperatureCalibration':      { id: 0x0010, type: 'INT8'     },
        'occupiedCoolingSetpoint':          { id: 0x0011, type: 'INT16'    },
        'occupiedHeatingSetpoint':          { id: 0x0012, type: 'INT16'    },
        'unoccupiedCoolingSetpoint':        { id: 0x0013, type: 'INT16'    },
        'unoccupiedHeatingSetpoint':        { id: 0x0014, type: 'INT16'    },
        'minHeatSetpointLimit':             { id: 0x0015, type: 'INT16'    },
        'maxHeatSetpointLimit':             { id: 0x0016, type: 'INT16'    },
        'minCoolSetpointLimit':             { id: 0x0017, type: 'INT16'    },
        'maxCoolSetpointLimit':             { id: 0x0018, type: 'INT16'    },
        'minSetpointDeadBand':              { id: 0x0019, type: 'INT8'     },
        'remoteSensing':                    { id: 0x001a, type: 'BITMAP8'  },
        'ctrlSeqeOfOper':                   { id: 0x001b, type: 'ENUM8'    },
        'systemMode':                       { id: 0x001c, type: 'ENUM8'    },
        'alarmMask':                        { id: 0x001d, type: 'BITMAP8'  },
        'runningMode':                      { id: 0x001e, type: 'ENUM8'    },
        // Thermostat Schedule & HVAC Relay
        'startOfWeek':                      { id: 0x0020, type: 'ENUM8'    },
        'numberOfWeeklyTrans':              { id: 0x0021, type: 'UINT8'    },
        'numberOfDailyTrans':               { id: 0x0022, type: 'UINT8'    },
        'tempSetpointHold':                 { id: 0x0023, type: 'ENUM8'    },
        'tempSetpointHoldDuration':         { id: 0x0024, type: 'UINT16'   },
        'programingOperMode':               { id: 0x0025, type: 'BITMAP8'  },
        'runningState':                     { id: 0x0029, type: 'BITMAP16' },
        // Thermostat Setpoint Change Tracking
        'setpointChangeSource':             { id: 0x0030, type: 'ENUM8'    },
        'setpointChangeAmount':             { id: 0x0031, type: 'INT16'    },
        'setpointChangeSourceTimeStamp':    { id: 0x0032, type: 'UTC'      },
        // Thermostat AC Information
        'acType':                           { id: 0x0040, type: 'ENUM8'    },
        'acCapacity':                       { id: 0x0041, type: 'UINT16'   },
        'acRefrigerantType':                { id: 0x0042, type: 'ENUM8'    },
        'acConpressorType':                 { id: 0x0043, type: 'ENUM8'    },
        'acErrorCode':                      { id: 0x0044, type: 'BITMAP32' },
        'acLouverPosition':                 { id: 0x0045, type: 'ENUM8'    },
        'acCollTemp':                       { id: 0x0046, type: 'INT16'    },  
        'acCapacityFormat':                 { id: 0x0047, type: 'ENUM8'    }
    },
    cmd: {
        'SetpointRaiseLower': 0x00,
        'SetWeeklySchedule': 0x01,
        'GetWeeklySchedule': 0x02,
        'ClearWeeklySchedule': 0x03,
        'GetRelayStatusLog': 0x04
    },
    cmdRsp: {
        'GetWeeklyScheduleRsp': 0x00,
        'GetRelayStatusLogRsp': 0x01
    }
};

module.exports = thermostat;