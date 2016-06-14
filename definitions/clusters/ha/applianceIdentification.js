var applianceIdentification = {
    attrId: {
        'basicIdentification':       { id: 0x0000, type: 'UINT56' },
        'companyName':               { id: 0x0010, type: 'CHAR_STR' },
        'companyId':                 { id: 0x0011, type: 'UINT16' },
        'brandName':                 { id: 0x0012, type: 'CHAR_STR' },
        'brandId':                   { id: 0x0013, type: 'UINT16' },
        'model':                     { id: 0x0014, type: 'OCTET_STR' },
        'partNumber':                { id: 0x0015, type: 'OCTET_STR' },
        'productRevision':           { id: 0x0016, type: 'OCTET_STR' },
        'softwareRevision':          { id: 0x0017, type: 'OCTET_STR' },
        'productTypeName':           { id: 0x0018, type: 'OCTET_STR' },
        'productTypeId':             { id: 0x0019, type: 'UINT16' },
        'cecedSpecificationVersion': { id: 0x001A, type: 'UINT8' }
    },
    cmd: null,
    cmdRsp: null
};

module.exports = applianceIdentification;
