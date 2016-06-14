var fanControl = {
    attrId: {
        'fanMode':          { id: 0x0000, type: 'ENUM8' },
        'fanModeSequence':  { id: 0x0001, type: 'ENUM8' }
    },
    cmd: null,
    cmdRsp: null
};

module.exports = fanControl;