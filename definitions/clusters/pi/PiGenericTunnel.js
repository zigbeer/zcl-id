/***          PI SPECIFICATION                 ***/
/*************************************************/
/***   TI Generic Tunnel Cluster               ***/
/*************************************************/
ZCL.Cluster.PiGenericTunnel.Attr = new Enum({
  // Attributes of the Generic Tunnel cluster
    'MaxIncomeTransSize': 0x0001,
    'MaxOutgoTransSize': 0x0002,
    'ProtocolAddr': 0x0003
});

ZCL.Cluster.PiGenericTunnel.AttrType = {
    MaxIncomeTransSize: 'UINT16',
    MaxOutgoTransSize: 'UINT16',
    ProtocolAddr: 'OCTET_STR'
};

ZCL.Cluster.PiGenericTunnel.Cmd = new Enum({
    'MatchProtocolAddr': 0x00
});

ZCL.Cluster.PiGenericTunnel.CmdRsp = new Enum({
    'MatchProtocolAddrRsp': 0x00,
    'AdvertiseProtocolAddr': 0x01
});