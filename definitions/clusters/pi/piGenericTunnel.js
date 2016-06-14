var piGenericTunnel = {
    attrId: {
        'maxIncomeTransSize': { id: 0x0001, type: 'UINT16' },
        'maxOutgoTransSize': { id: 0x0002, type: 'UINT16' },
        'protocolAddr': { id: 0x0003, type: 'OCTET_STR' }
    },
    cmd: {
        'matchProtocolAddr': 0x00
    },
    cmdRsp: {
        'matchProtocolAddrRsp': 0x00,
        'advertiseProtocolAddr': 0x01
    }
};

module.exports = piGenericTunnel;
