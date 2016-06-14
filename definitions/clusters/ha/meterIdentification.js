var meterIdentification = {
    attrId: {
        'companyName':      { id: 0x0000, type: 'CHAR_STR' },
        'meterTypeId':      { id: 0x0001, type: 'UINT16' },
        'dataQualityId':    { id: 0x0004, type: 'UINT16' },
        'customerName':     { id: 0x0005, type: 'CHAR_STR' },
        'model':            { id: 0x0006, type: 'CHAR_STR' },
        'partNumber':       { id: 0x0007, type: 'CHAR_STR' },
        'productRevision':  { id: 0x0008, type: 'CHAR_STR' },
        'softwareRevision': { id: 0x000A, type: 'CHAR_STR' },
        'utilityName':      { id: 0x000B, type: 'CHAR_STR' },
        'pod':              { id: 0x000C, type: 'CHAR_STR' },
        'availablePower':   { id: 0x000D, type: 'INT24' },
        'powerThreshold':   { id: 0x000E, type: 'INT24' }
    },
    cmd: null,
    cmdRsp: null
};

module.exports = meterIdentification;
