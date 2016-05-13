/**************************************************************/
/***   11073 Protocol Tunnel Cluster                        ***/
/**************************************************************/
//TODO
ZCL.Cluster.Pi11073ProtocolTunnel.Attr = new Enum({
    'DeviceidList': 0x0000,
    'ManagerTarget': 0x0001,
    'ManagerEndpoint': 0x0002,
    'Connected': 0x0003,
    'Preemptible': 0x0004,
    'IdleTimeout': 0x0005
});

ZCL.Cluster.Pi11073ProtocolTunnel.Cmd = new Enum({
    'TransferApdu': 0x00,
    'ConnectReq': 0x01,
    'DisconnectReq': 0x02,
    'ConnectStatusNoti': 0x03
});

ZCL.Cluster.Pi11073ProtocolTunnel.CmdRsp = new Enum({
    
});

ZCL.Cluster.Pi11073ProtocolTunnel.Attrvalue = new Enum({
/*** Connect status values ***/
    'CONNECT_STATUS_DISCONNECTED': 0x00,
    'CONNECT_STATUS_CONNECTED': 0x01,
    'CONNECT_STATUS_NOT_AUTHORIZED': 0x02,
    'CONNECT_STATUS_RECONNECT_REQ': 0x03,
    'CONNECT_STATUS_ALREADY_CONNECTED': 0x04
});