var pumpConfigControl = {
    attrId: {
        // Pump Information
        'maxPressure':              { id: 0x0000, type: 'INT16'    },
        'maxSpeed':                 { id: 0x0001, type: 'UINT16'   },
        'maxFlow':                  { id: 0x0002, type: 'UINT16'   },
        'minConstPressure':         { id: 0x0003, type: 'INT16'    },
        'maxConstPressure':         { id: 0x0004, type: 'INT16'    },
        'minCompPressure':          { id: 0x0005, type: 'INT16'    },
        'maxCompPressure':          { id: 0x0006, type: 'INT16'    },
        'minConstSpeed':            { id: 0x0007, type: 'UINT16'   },
        'maxConstSpeed':            { id: 0x0008, type: 'UINT16'   },
        'minConstFlow':             { id: 0x0009, type: 'UINT16'   },
        'maxConstFlow':             { id: 0x000a, type: 'UINT16'   },
        'minConstTemp':             { id: 0x000b, type: 'INT16'    },
        'maxConstTemp':             { id: 0x000c, type: 'INT16'    },
        // Pump Dynamic Information
        'pumpStatus':               { id: 0x0010, type: 'BITMAP16' },
        'effectiveOperationMode':   { id: 0x0011, type: 'ENUM8'    },
        'effectiveControlMode':     { id: 0x0012, type: 'ENUM8'    },
        'capacity':                 { id: 0x0013, type: 'INT16'    },
        'speed':                    { id: 0x0014, type: 'UINT16'   },
        'lifetimeRunningHours':     { id: 0x0015, type: 'UINT24'   },        
        'power':                    { id: 0x0016, type: 'UINT24'   },        
        'lifetimeEnergyConsumed':   { id: 0x0017, type: 'UINT32'   },  
        // Pump Settings     
        'operationMode':            { id: 0x0020, type: 'ENUM8'    },  
        'controlMode':              { id: 0x0021, type: 'ENUM8'    },  
        'alarmMask':                { id: 0x0021, type: 'BITMAP16' } 
    },
    cmd: null,
    cmdRsp: null
};

module.exports = pumpConfigControl;