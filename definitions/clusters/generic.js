var generic = {};

generic.basic = {
    attrId: {
      // Basic Device Information
        'zclVersion':           { id: 0x0000, type: 'UINT8'   , acl: READ },
        'appVersion':           { id: 0x0001, type: 'UINT8'   , acl: READ },
        'stackVersion':         { id: 0x0002, type: 'UINT8'   , acl: READ },
        'hwVersion':            { id: 0x0003, type: 'UINT8'   , acl: READ },
        'manufacturerName':     { id: 0x0004, type: 'CHAR_STR', acl: READ },
        'modelId':              { id: 0x0005, type: 'CHAR_STR', acl: ''},
        'dateCode':             { id: 0x0006, type: 'CHAR_STR', acl: ''},
        'powerSource':          { id: 0x0007, type: 'ENUM8'   , acl: ''},
        'appProfileVersion':    { id: 0x0008, type: 'ENUM8'   , acl: ''},
        'swBuildId':            { id: 0x4000, type: ''        , acl: ''},  // type??
      // Basic Device Settings
        'locationDesc':         { id: 0x0010, type: 'CHAR_STR', acl: READ | WRITE },
        'physicalEnv':          { id: 0x0011, type: 'ENUM8'   , acl: READ | WRITE },
        'deviceEnabled':        { id: 0x0012, type: 'BOOLEAN' , acl: READ | WRITE },
        'alarmMask':            { id: 0x0013, type: 'BITMAP8' , acl: READ | WRITE },
        'disableLocalConfig':   { id: 0x0014, type: 'BITMAP8' , acl: READ | WRITE },
    },
    cmd: {
        'resetFactDefault': 0x00
    },
    cmdRsp: null
};

generic.groups = {
    attrId: {
        'nameSupport':  { id: 0x0000, type: 'BITMAP8'     }
    },
    cmd: {
        'add': 0x00,
        'view': 0x01,
        'getMembership': 0x02,
        'remove': 0x03,
        'removeAll': 0x04,
        'addIfIdentifying': 0x05
    },
    cmdRsp: {
        'addRsp': 0x00,
        'viewRsp': 0x01,
        'getMembershipRsp': 0x02,
        'removeRsp': 0x03 
    }
};

generic.identify = {
    attrId: {
        'identifyTime':             { id: 0x0000, type: 'UINT16'    },
        'identifyCommissionState':  { id: 0x0001, type: ''          } // type??
    },
    cmd: {
        'identify': 0x00,
        'identifyQuery': 0x01,
        'ezmodeInvoke': 0x02,
        'updateCommissionState': 0x03,
        'triggerEffect': 0x40
    },
    cmdRsp: {
        'IdentifyQueryRsp': 0x00
    }
};

generic.onOff = {
    attrId: {
        'onOff': { id: 0x0000, type: 'BOOLEAN'    },
        'globalSceneCtrl': { id: 0x4000, type: ''    }, // ??
        'onTime': { id: 0x4001, type: ''    }, // ??
        'offWaitTime': { id: 0x4002, type: ''    } // ??
    },
    cmd: {
        'off': 0x00,
        'on': 0x01,
        'toggle': 0x02,
        'offWithEffect': 0x40,
        'onWithRecallGlobalScene': 0x41,
        'onWithTimedOff': 0x42
    },
    cmdRsp: null
};

generic.onOffSwitchConfig = {
    attrId: {
      // Switch Information
        'switchType': { id: 0x0000, type: 'ENUM8'    },
      // Switch Settings
        'switchMultiFunction': { id: 0x0000, type: ''    }, // ?
        'switchActions': { id: 0x0010, type: 'ENUM8'    }
    },
    cmd: null,
    cmdRsp: null
};

generic.levelControl = {
    attrId: {
        'currentLevel': { id: 0x0000, type: 'UINT8'    },
        'remainingTime': { id: 0x0001, type: 'UINT16'    },
        'onOffTransitionTime': { id: 0x0010, type: 'UINT16'    },
        'onLevel': { id: 0x0011, type: 'UINT8'    },
        'onTransitionTime': { id: 0x0012, type: ''    },    // ?
        'offTransitionTime': { id: 0x0013, type: ''    },   // ?
        'defaultMoveRate': { id: 0x0014, type: ''    }      // ?
    },
    cmd: {
        'moveToLevel': 0x00,
        'move': 0x01,
        'step': 0x02,
        'stop': 0x03,
        'moveToLevelWithOnOff': 0x04,
        'moveWithOnOff': 0x05,
        'stepWithOnOff': 0x06,
        'stopWithOnOff': 0x07 
    },
    cmdRsp: null
};

generic.deviceTempConfig = {
    attrId: {
      // Device Temperature Information
        'CurrentTemperature': { id: 0x0000, type: 'INT16'    },
        'MinTempExperienced': { id: 0x0001, type: 'INT16'    },
        'MaxTempExperienced': { id: 0x0002, type: 'INT16'    },
        'OverTempTotalDwell': { id: 0x0003, type: 'UINT16'    },
      // Device Temperature Settings
        'DevTempAlarmMask': { id: 0x0010, type: 'BITMAP8'    },
        'LowTempThres': { id: 0x0011, type: 'INT16'    },
        'HighTempThres': { id: 0x0012, type: 'INT16'    },
        'LowTempDwellTripPoint': { id: 0x0013, type: 'UINT24'    },
        'HighTempDwellTripPoint': { id: 0x0014, type: 'UINT24'    }
    },
    cmd: null,
    cmdRsp: null
};


generic.scenes = {
    attrId: {
        'count':        { id: 0x0000, type: 'UINT8'     },
        'currentScene': { id: 0x0001, type: 'UINT8'     },
        'currentGroup': { id: 0x0002, type: 'UINT16'    },
        'sceneValid':   { id: 0x0003, type: 'BOOLEAN'   },
        'nameSupport':  { id: 0x0004, type: 'BITMAP8'   },
        'lastCfgBy':    { id: 0x0005, type: 'IEEE_ADDR' }
    },
    cmd: {
        'add': 0x00,
        'view': 0x01,
        'remove': 0x02,
        'removeAll': 0x03,
        'store': 0x04,
        'recall': 0x05,
        'getSceneMembership': 0x06,
        'enhancedAdd': 0x40,
        'enhancedView': 0x41,
        'copy': 0x42
    // TODO: Duplicate?
    },
    cmdRsp: {
        'addRsp': 0x00,
        'viewRsp': 0x01,
        'removeRsp': 0x02,
        'removeAllRsp': 0x03,
        'storeRsp': 0x04,
        'getSceneMembershipRsp': 0x06,
        'enhancedAddRsp': 0x40,
        'enhancedViewRsp': 0x41,
        'copyRsp': 0x42
    }
};

generic.location = {
    attrId: {
      // Location Information
        'type':                 { id: 0x0000, type: 'DATA8'     },
        'method':               { id: 0x0001, type: 'ENUM8'     },
        'age':                  { id: 0x0002, type: 'UINT16'    },
        'qualityMeasure':       { id: 0x0003, type: 'UINT8'     },
        'numOfDevices':         { id: 0x0004, type: 'UINT8'     },
      // Location Settings
        'coordinate1':          { id: 0x0010, type: 'INT16'     },
        'coordinate2':          { id: 0x0011, type: 'INT16'     },
        'coordinate3':          { id: 0x0012, type: 'INT16'     },
        'power':                { id: 0x0013, type: 'INT16'     },
        'pathLossExponent':     { id: 0x0014, type: 'UINT16'    },
        'reportingPeriod':      { id: 0x0015, type: 'UINT16'    },
        'calcPeriod':           { id: 0x0016, type: 'UINT16'    },
        'numRSSIMeasurements':  { id: 0x0017, type: 'UINT16'    }
    },
    cmd: {
        'setAbsolute': 0x00,
        'setDevCfg': 0x01,
        'getDevCfg': 0x02,
        'getData': 0x03
        // 'rssiRsp': 0x04,
        // 'sendPings': 0x05,
        // 'anchorNodeAnnounce': 0x06
    },
    cmdRsp: {
        'devCfgRsp': 0x00,
        'dataRsp': 0x01,
        'dataNotif': 0x02,
        'compactDataNotif': 0x03,
        'rssiPing': 0x04
        // 'rssiReq': 0x05,
        // 'reportRssiMeas': 0x06,
        // 'reqOwnLocation': 0x07
    }
};

generic.analogInputBasic = {
    attrId: {
        'description':       { id: 0x001C, type: 'CHAR_STR'     },
        'maxPresentValue':   { id: 0x0041, type: 'SINGLE_PREC'  },
        'minPresentValue':   { id: 0x0045, type: 'SINGLE_PREC'  },
        'outOfService':      { id: 0x0051, type: 'BOOLEAN'      },
        'presentValue':      { id: 0x0055, type: 'SINGLE_PREC'  },
        'reliability':       { id: 0x0067, type: 'ENUM8'        },
        'resolution':        { id: 0x006A, type: 'SINGLE_PREC'  },
        'statusFlags':       { id: 0x006F, type: 'BITMAP8'      },
        'engineeringUnits':  { id: 0x0075, type: 'ENUM16'       },
        'applicationType':   { id: 0x0100, type: 'UINT32'       }
    },
    cmd: null,
    cmdRsp: null
};

generic.analogOutputBasic = {
    attrId: {
        'description':       { id: 0x001C, type: 'CHAR_STR'     },
        'maxPresentValue':   { id: 0x0041, type: 'SINGLE_PREC'  },
        'minPresentValue':   { id: 0x0045, type: 'SINGLE_PREC'  },
        'outOfService':      { id: 0x0051, type: 'BOOLEAN'      },
        'presentValue':      { id: 0x0055, type: 'SINGLE_PREC'  },
        'priorityArray':     { id: 0x0057, type: 'ARRAY'        },
        'reliability':       { id: 0x0067, type: 'ENUM8'        },
        'relinquishDefault': { id: 0x0068, type: 'SINGLE_PREC'  },
        'resolution':        { id: 0x006A, type: 'SINGLE_PREC'  },
        'statusFlags':       { id: 0x006F, type: 'BITMAP8'      },
        'engineeringUnits':  { id: 0x0075, type: 'ENUM16'       },
        'applicationType':   { id: 0x0100, type: 'UINT32'       }
    },
    cmd: null,
    cmdRsp: null
};

generic.analogValueBasic = {
    attrId: {
        'description':       { id: 0x001C, type: 'CHAR_STR'     },
        'outOfService':      { id: 0x0051, type: 'BOOLEAN'      },
        'presentValue':      { id: 0x0055, type: 'SINGLE_PREC'  },
        'priorityArray':     { id: 0x0057, type: 'ARRAY'        },
        'reliability':       { id: 0x0067, type: 'ENUM8'        },
        'relinquishDefault': { id: 0x0068, type: 'SINGLE_PREC'  },
        'statusFlags':       { id: 0x006F, type: 'BITMAP8'      },
        'engineeringUnits':  { id: 0x0075, type: 'ENUM16'       },
        'applicationType':   { id: 0x0100, type: 'UINT32'       }
    },
    cmd: null,
    cmdRsp: null
};

generic.binaryInputBasic = {
    attrId: {
        'activeText':        { id: 0x0004, type: 'CHAR_STR'     },
        'description':       { id: 0x001C, type: 'CHAR_STR'     },
        'inactiveText':      { id: 0x002E, type: 'CHAR_STR'     },
        'outOfService':      { id: 0x0051, type: 'BOOLEAN'      },
        'polarity':          { id: 0x0054, type: 'ENUM8'        },
        'presentValue':      { id: 0x0055, type: 'SINGLE_PREC'  },
        'reliability':       { id: 0x0067, type: 'ENUM8'        },
        'statusFlags':       { id: 0x006F, type: 'BITMAP8'      },
        'applicationType':   { id: 0x0100, type: 'UINT32'       }
    },
    cmd: null,
    cmdRsp: null
};

generic.binaryOutputBasic = {
    attrId: {
        'activeText':        { id: 0x0004, type: 'CHAR_STR'     },
        'description':       { id: 0x001C, type: 'CHAR_STR'     },
        'inactiveText':      { id: 0x002E, type: 'CHAR_STR'     },
        'minimumOffTime':    { id: 0x0042, type: 'UINT32'       },
        'minimumOnTime':     { id: 0x0043, type: 'UINT32'       },
        'outOfService':      { id: 0x0051, type: 'BOOLEAN'      },
        'polarity':          { id: 0x0054, type: 'ENUM8'        },
        'presentValue':      { id: 0x0055, type: 'SINGLE_PREC'  },
        'priorityArray':     { id: 0x0057, type: 'ARRAY'       },
        'reliability':       { id: 0x0067, type: 'ENUM8'        },
        'relinquishDefault': { id: 0x0068, type: 'SINGLE_PREC'  },
        'statusFlags':       { id: 0x006F, type: 'BITMAP8'      },
        'applicationType':   { id: 0x0100, type: 'UINT32'       }
    },
    cmd: null,
    cmdRsp: null
};

generic.binaryValueBasic = {
    attrId: {
        'activeText':        { id: 0x0004, type: 'CHAR_STR'     },
        'description':       { id: 0x001C, type: 'CHAR_STR'     },
        'inactiveText':      { id: 0x002E, type: 'CHAR_STR'     },
        'minimumOffTime':    { id: 0x0042, type: 'UINT32'       },
        'minimumOnTime':     { id: 0x0043, type: 'UINT32'       },
        'outOfService':      { id: 0x0051, type: 'BOOLEAN'      },
        'presentValue':      { id: 0x0055, type: 'SINGLE_PREC'  },
        'priorityArray':     { id: 0x0057, type: 'ARRAY'       },
        'reliability':       { id: 0x0067, type: 'ENUM8'        },
        'relinquishDefault': { id: 0x0068, type: 'SINGLE_PREC'  },
        'statusFlags':       { id: 0x006F, type: 'BITMAP8'      },
        'applicationType':   { id: 0x0100, type: 'UINT32'       }
    },
    cmd: null,
    cmdRsp: null
};

generic.commissioning = {
    attrId: {
    // Startup Parameters Attribute Set - Stack 0x000
        'shortAddress':          { id: 0x0000, type: 'UINT16'           },
        'extendedPANId':         { id: 0x0001, type: 'IEEE_ADDR'        },
        'panId':                 { id: 0x0002, type: 'UINT16'           },
        'channelmask':           { id: 0x0003, type: 'BITMAP32'         },
        'protocolVersion':       { id: 0x0004, type: 'UINT8'            },
        'stackProfile':          { id: 0x0005, type: 'UINT8'            },
        'startupControl':        { id: 0x0006, type: 'ENUM8'            },
    // Startup Parameters Attribute Set - Security 0x001  
        'trustCenterAddress':    { id: 0x0010, type: 'IEEE_ADDR'        },
        'trustCenterMasterKey':  { id: 0x0011, type: '128_BIT_SEC_KEY'  },
        'networkKey':            { id: 0x0012, type: '128_BIT_SEC_KEY'  },
        'useInsecureJoin':       { id: 0x0013, type: 'BOOLEAN'          },
        'preconfiguredLinkKey':  { id: 0x0014, type: '128_BIT_SEC_KEY'  },
        'networkKeySeqNum':      { id: 0x0015, type: 'UINT8'            },
        'networkKeyType':        { id: 0x0016, type: 'ENUM8'            },
        'networkManagerAddress': { id: 0x0017, type: 'UINT16'           },
    // Join Parameters Attribute Set 0x002  
        'scanAttempts':          { id: 0x0020, type: 'UINT8'            },
        'timeBetweenScans':      { id: 0x0021, type: 'UINT16'           },
        'rejoinInterval':        { id: 0x0022, type: 'UINT16'           },
        'maxRejoinInterval':     { id: 0x0023, type: 'UINT16'           },
    // End Device Parameters Attribute Set 0x003  
        'indirectPollRate':      { id: 0x0030, type: 'UINT16'           },
        'parentRetryThreshold':  { id: 0x0031, type: 'UINT8'            },
    // Concentrator Parameters Attribute Set 0x004
        'concentratorFlag':      { id: 0x0040, type: 'BOOLEAN'          },
        'concentratorRadius':    { id: 0x0041, type: 'UINT8'            },
        'concentratorDiscoveryTime': { id: 0x0042, type: 'UINT8'        }
    },
    cmd: null,
    cmdRsp: null
};

generic.multistateInputBasic = {
    attrId: {
        'stateText':        { id: 0x000E, type: 'ARRAY'        },
        'description':      { id: 0x001C, type: 'CHAR_STR'     },
        'numberOfStates':   { id: 0x004A, type: 'UINT16'       },
        'outOfService':     { id: 0x0051, type: 'BOOLEAN'      },
        'presentValue':     { id: 0x0055, type: 'SINGLE_PREC'  },
        'priorityArray':    { id: 0x0057, type: 'ARRAY'        },
        'reliability':      { id: 0x0067, type: 'ENUM8'        },
        'statusFlags':      { id: 0x006F, type: 'BITMAP8'      },
        'applicationType':  { id: 0x0100, type: 'UINT32'       }
    },
    cmd: null,
    cmdRsp: null
};

generic.multistateOutputBasic = {
    attrId: {
        'stateText':         { id: 0x000E, type: 'ARRAY'        },
        'description':       { id: 0x001C, type: 'CHAR_STR'     },
        'numberOfStates':    { id: 0x004A, type: 'UINT16'       },
        'outOfService':      { id: 0x0051, type: 'BOOLEAN'      },
        'presentValue':      { id: 0x0055, type: 'SINGLE_PREC'  },
        'priorityArray':     { id: 0x0057, type: 'ARRAY'        },
        'reliability':       { id: 0x0067, type: 'ENUM8'        },
        'relinquishDefault': { id: 0x0068, type: 'SINGLE_PREC'  },
        'statusFlags':       { id: 0x006F, type: 'BITMAP8'      },
        'applicationType':   { id: 0x0100, type: 'UINT32'       }
    },
    cmd: null,
    cmdRsp: null
};

generic.multistateValueBasic = {
    attrId: {
        'stateText':         { id: 0x000E, type: 'ARRAY'        },
        'description':       { id: 0x001C, type: 'CHAR_STR'     },
        'numberOfStates':    { id: 0x004A, type: 'UINT16'       },
        'outOfService':      { id: 0x0051, type: 'BOOLEAN'      },
        'presentValue':      { id: 0x0055, type: 'SINGLE_PREC'  },
        'priorityArray':     { id: 0x0057, type: 'ARRAY'        },
        'reliability':       { id: 0x0067, type: 'ENUM8'        },
        'relinquishDefault': { id: 0x0068, type: 'SINGLE_PREC'  },
        'statusFlags':       { id: 0x006F, type: 'BITMAP8'      },
        'applicationType':   { id: 0x0100, type: 'UINT32'       }
    },
    cmd: null,
    cmdRsp: null
};

generic.time = {
    attrId: {
        'time': { id: 0x0000, type: 'UTC'        },
        'timeStatus': { id: 0x0001, type: 'BITMAP8'        },
        'timeZone': { id: 0x0002, type: 'INT32'        },
        'dstStart': { id: 0x0003, type: 'UINT32'        },
        'dstEnd': { id: 0x0004, type: 'UINT32'        },
        'dstShift': { id: 0x0005, type: 'DstShiftAttrValue'        },   // ?
        'standardTime': { id: 0x0006, type: 'UINT32'        },
        'localTime': { id: 0x0007, type: 'UINT32'        },
        'lastSetTime': { id: 0x0008, type: 'UTC'        },
        'validUntilTime': { id: 0x0009, type: 'UTC'        },
    },
    cmd: null,
    cmdRsp: null
};

generic.alarms = {
    attrId: {
        'alarmCount': { id: 0x0000, type: 'UINT16'        }
    },
    cmd: {
        'reset': 0x00,
        'resetAll': 0x01,
        'get': 0x02,
        'resetLog': 0x03,
        'publishEventLog': 0x04 // TODO
    },
    cmdRsp: {
        'alarm': 0x00,
        'getRsp': 0x01,
        'getEventLog': 0x02 // TODO
    }
};

generic.powerCfg = {
    attrId: {
      // Mains Information
        'MainsVoltage': { id: 0x0000, type: 'UINT16'        },
        'MainsFrequency': { id: 0x0001, type: 'UINT8'        },
      // Mains Settings
        'MainsAlarmMask': { id: 0x0010, type: 'BITMAP8'        },
        'MainsVoltMinThres': { id: 0x0011, type: 'UINT16'        },
        'MainsVoltMaxThres': { id: 0x0012, type: 'UINT16'        },
        'MainsVoltageDwellTripPoint': { id: 0x0013, type: 'UINT16'        },
      // Battery Information
        'BatteryVoltage': { id: 0x0020, type: 'UINT8'        },
        'BatteryPercentageRemaining': { id: 0x0021, type: ''        },
      // Battery Settings
        'BatteryVolt': { id: 0x0030, type: 'CHAR_STR'        },
        'BatterySize': { id: 0x0031, type: 'ENUM8'        },
        'BatteryAHrRating': { id: 0x0032, type: 'UINT16'        },
        'BatteryQuantity': { id: 0x0033, type: 'UINT8'        },
        'BatteryRatedVoltage': { id: 0x0034, type: 'UINT8'        },
        'BatteryAlarmMask': { id: 0x0035, type: 'BITMAP8'        },
        'BatteryVoltMinThres': { id: 0x0036, type: 'UINT8'        },
        'BatteryVoltThres1': { id: 0x0037, type: 'UINT16'        },
        'BatteryVoltThres2': { id: 0x0038, type: 'UINT16'        },
        'BatteryVoltThres3': { id: 0x0039, type: 'UINT16'        },
        'BatteryPercentMinThres': { id: 0x003A, type: ''        },
        'BatteryPercentThres1': { id: 0x003B, type: ''        },
        'BatteryPercentThres2': { id: 0x003C, type: ''        },
        'BatteryPercentThres3': { id: 0x003D, type: ''        },
        'BatteryAlarmState': { id: 0x003E, type: ''        } //TODO
    },
    type: {

    },
    cmd: null,
    cmdRsp: null
};


module.exports = generic;
