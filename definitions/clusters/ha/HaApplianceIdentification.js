/***                            HA                          ***/
/**************************************************************/
/***         Appliance Identification Cluster               ***/
/**************************************************************/
ZCL.Cluster.HaApplianceIdentification.Attr = new Enum({
    'BasicIdentification': 0x0000,
    'CompanyName': 0x0010,
    'CompanyId': 0x0011,
    'BrandName': 0x0012,
    'BrandId':  0x0013,
    'Model': 0x0014,
    'PartNumber': 0x0015,
    'ProductRevision': 0x0016,
    'SoftwareRevision': 0x0017,
    'ProductTypeName': 0x0018,
    'ProductTypeId': 0x0019,
    'CecedSpecificationVersion': 0x001A
});

ZCL.Cluster.HaApplianceIdentification.AttrType = {
    BasicIdentification: 'UINT56',
    CompanyName: 'CHAR_STR',
    CompanyId: 'UINT16',
    BrandName: 'CHAR_STR',
    BrandId:  'UINT16',
    Model: 'OCTET_STR',
    PartNumber: 'OCTET_STR',
    ProductRevision: 'OCTET_STR',
    SoftwareRevision: 'OCTET_STR',
    ProductTypeName: 'OCTET_STR',
    ProductTypeId: 'UINT16',
    CecedSpecificationVersion: 'UINT8'
};