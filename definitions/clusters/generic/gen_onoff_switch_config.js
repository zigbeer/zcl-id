/****************************************/
/*** On/Off Switch Cluster            ***/
/****************************************/
var x = {
    attrId: {
      // Switch Information
        'SwitchType': 0x0000,
      // Switch Settings
        'SwitchMultiFunction': 0x0002, //TODO
        'SwitchActions': 0x0010
    },
    type: {
        SwitchType: 'SwitchTypeAttrValue',      //ENUM8
        SwitchActions: 'SwitchActionsAttrValue' //ENUM8
    },
    cmd: null,
    cmdRsp: null
};

