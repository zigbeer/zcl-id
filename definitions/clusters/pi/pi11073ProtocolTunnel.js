var pi11073ProtocolTunnel = {
    attrId: {
        'deviceidList':     { id: 0x0000, type: null },
        'managerTarget':    { id: 0x0001, type: null },
        'managerEndpoint':  { id: 0x0002, type: null },
        'connected':        { id: 0x0003, type: null },
        'preemptible':      { id: 0x0004, type: null },
        'idleTimeout':      { id: 0x0005, type: null }
    },
    cmd: {
        'transferApdu': 0x00,
        'connectReq': 0x01,
        'disconnectReq': 0x02,
        'connectStatusNoti': 0x03
    },
    cmdRsp: null
};

module.exports = pi11073ProtocolTunnel;
