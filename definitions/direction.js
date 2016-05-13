    "Direction": {
        "clientToServer": 0,
        "serverToClient": 1
    },

// define command direction flag masks
ZCL.CmdDir = new Enum({
    'SERVER_GENERATED': 0x01,
    'CLIENT_GENERATED': 0x02,
    'SERVER_RECEIVED': 0x04,
    'CLIENT_RECEIVED': 0x08
});