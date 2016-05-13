/**************************************************************/
/***         Meter Identification Cluster                   ***/
/**************************************************************/
ZCL.Cluster.HaMeterIdentification.Attr = new Enum({
    'CompanyName': 0x0000,
    'MeterTypeId': 0x0001,
    'DataQualityId': 0x0004,
    'CustomerName': 0x0005,
    'Model': 0x0006,
    'PartNumber': 0x0007,
    'ProductRevision': 0x0008,
    'SoftwareRevision': 0x000A,
    'UtilityName': 0x000B,
    'Pod': 0x000C,
    'AvailablePower': 0x000D,
    'PowerThreshold': 0x000E
});

ZCL.Cluster.HaMeterIdentification.AttrType = {
    CompanyName: 'CHAR_STR',
    MeterTypeId: 'UINT16',
    DataQualityId: 'UINT16',
    CustomerName: 'CHAR_STR',
    Model: 'CHAR_STR',
    PartNumber: 'CHAR_STR',
    ProductRevision: 'CHAR_STR',
    SoftwareRevision: 'CHAR_STR',
    UtilityName: 'CHAR_STR',
    Pod: 'CHAR_STR',
    AvailablePower: 'INT24',
    PowerThreshold: 'INT24'
};