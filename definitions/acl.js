ZCL.AccessControl = new Enum({
    /*** Attribute Access Control - bit masks ***/
    'READ': 0x01,        // attribute can be read
    'WRITE': 0x02,       // attribute can be written
    'REPORTABLE': 0x04,  // indicate attribute is reportable
    'COMMAND': 0x08,
    'AUTH_READ': 0x10,
    'AUTH_WRITE': 0x20,
    'CLIENT': 0x80       // TI unique, indicate client side attribute
});
