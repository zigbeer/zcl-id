# zcl-id

<br />

[![Travis branch](https://img.shields.io/travis/zigbeer/zcl-id/master.svg?maxAge=2592000)](https://travis-ci.org/zigbeer/zcl-id)
[![npm](https://img.shields.io/npm/v/zcl-id.svg?maxAge=2592000)](https://www.npmjs.com/package/zcl-id)
[![npm](https://img.shields.io/npm/l/zcl-id.svg?maxAge=2592000)](https://www.npmjs.com/package/zcl-id)

<br />

## Table of Contents  

1. [Overview](#Overview)  
2. [Installation](#Installation)  
3. [Usage](#Usage)  
4. [APIs](#APIs)  
5. [Table of Identifiers](#Table)  
6. [Contributors](#Contributors)  

<br />

<a name="Overview"></a>
## 1. Overview  

**zcl-id** is a dictionary of identifiers defined by [_ZIGBEE CLUSTER LIBRARY SPECIFICATION_](https://github.com/zigbeer/documents/blob/master/zcl-id/ZIGBEE_CLUSTER_LIBRARY_SPECIFICATION.pdf).  

<br />

<a name="Installation"></a>
## 2. Installation  

> $ npm install zcl-id --save

<br />

<a name="Usage"></a>
## 3. Usage  

**zcl-id** provides you with [APIs](#APIs), to get the key-value pair of Zigbee Cluster Library identifier defined by the ZigBee Alliance. The getter returns an item which has properties of `'key'` and `'value'`, or returns `undefined` if not found. In the returned item, `item.key` is the idetifier in string and `item.value` is the identifier in number.  

Let me show you some examples.  

```js
var zclId = require('zcl-id')

// get Profile Id
var profKey =  zclId.profile(260).key;                               // 'HA'
var profId =  zclId.profile('HA').value;                             // 260

// get Cluster Id
var cKey =  zclId.cluster(0).key;                                    // 'genBasic'
var cId =  zclId.cluster('genBasic').value;                          // 0

// get Device Id
var devKey =  zclId.device(260, 10).key;                             // 'doorLock'
var devId =  zclId.device('HA', 'doorLock').value;                   // 10

// get Foundation Cmd Id
var foundCmdKey =  zclId.foundation(2).key;                          // 'write'
var foundCmdId =  zclId.foundation('write').value;                   // 2

// get Functional Cmd Id
var funcCmdKey =  zclId.functional(3, 0).key;                        // 'identify'
var funcCmdId =  zclId.functional('genIdentify', 'identify').value;  // 0

// get Functional CmdRsp Id
var funcRspKey =  zclId.getCmdRsp(9, 0).key;                         // 'alarm'
var funcRspId =  zclId.getCmdRsp('genAlarms', 'alarm').value;        // 0

// get Attribute Id
var attrKey =  zclId.attr(0, 3).key;                                 // 'hwVersion'
var attrId =  zclId.attr('genBasic', 'hwVersion').value;             // 3

// get Attribute DataType Id
var attrTypeKey =  zclId.attrType(0, 1).key;                         // 'uint8'
var attrTypeId =  zclId.attrType('genBasic', 'appVersion').value;    // 32

// get DataType Id
var dataTypeKey =  zclId.dataType(33).key;                           // 'uint16'
var dataTypeId =  zclId.dataType('uint16').value;                    // 33
```

<br />

<a name="APIs"></a>
## 4. APIs  

* [.profile()](#API_profile)  
* [.cluster()](#API_cluster)  
* [.device()](#API_device)  
* [.foundation()](#API_foundation)  
* [.functional()](#API_functional)  
* [.getCmdRsp()](#API_getCmdRsp)  
* [.attr()](#API_attr)  
* [.attrType()](#API_attrType)  
* [.dataType()](#API_dataType)  

*************************************************
<br />

<a name="API_profile"></a>
### .profile(profId)

Returns an item of the Profile identifier.  

**Arguments:**  

1. `profId` (_String_ | _Number_): Profile Id. `profId` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.  

**Returns:**  

* (_Object_ | _Undefined_): Returns an item of { key: 'sampleId', value: 1234 }, otherwise returns undefined if not found.  

**Examples:**  

```js
zclId.profile('HA');     // { key: 'HA', value: 260 }
zclId.profile('260');    // { key: 'HA', value: 260 }
zclId.profile(260);      // { key: 'HA', value: 260 }
```

*************************************************
<br />

<a name="API_cluster"></a>
### .cluster(cId)

Returns an item of the Cluster identifier.  

**Arguments:**  

1. `cId` (_String_ | _Number_): Cluster Id. `cId` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.  

**Returns:**  

* (_Object_ | _Undefined_): Returns an item of { key: 'sampleId', value: 1234 }, otherwise returns undefined if not found.  

**Examples:**  

```js
zclId.cluster('genAlarms');    // { key: 'genAlarms', value: 9 }
zclId.cluster('9');            // { key: 'genAlarms', value: 9 }
zclId.cluster(9);              // { key: 'genAlarms', value: 9 }
```

*************************************************
<br />

<a name="API_device"></a>
### .device(profId, devId)

Returns an item of the Device identifier.  

**Arguments:**  

1. `profId` (_String_ | _Number_): Profile Id. `profId` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.  
2. `devId` (_String_ | _Number_): Device Id. `devId` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.  

**Returns:**  

* (_Object_ | _Undefined_): Returns an item of { key: 'sampleId', value: 1234 }, otherwise returns undefined if not found.  

**Examples:**  

```js
zclId.device('HA', 'simpleSensor');    // { key: 'simpleSensor', value: 12 }
zclId.device('260', '12');             // { key: 'simpleSensor', value: 12 }
zclId.device(260, 12);                 // { key: 'simpleSensor', value: 12 }
```

*************************************************
<br />

<a name="API_foundation"></a>
### .foundation(cmdId)

Returns an item of the Foundation Cmd identifier.  

**Arguments:**  

1. `cmdId` (_String_ | _Number_): `cmdId` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.  

**Returns:**  

* (_Object_ | _Undefined_): Returns an item of { key: 'sampleId', value: 1234 }, otherwise returns undefined if not found.  

**Examples:**  

```js
zclId.foundation('write');    // { key: 'write', value: 2 }
zclId.foundation('2');        // { key: 'write', value: 2 }
zclId.foundation(2);          // { key: 'write', value: 2 }
```

*************************************************
<br />

<a name="API_functional"></a>
### .functional(cId, cmdId)

Returns an item of the Functional Cmd identifier.  

**Arguments:**  

1. `cId` (_String_ | _Number_): Cluster Id. `cId` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.  
2. `cmdId` (_String_ | _Number_): `cmdId` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.  

**Returns:**  

* (_Object_ | _Undefined_): Returns an item of { key: 'sampleId', value: 1234 }, otherwise returns undefined if not found.  

**Examples:**  

```js
zclId.functional('genBasic', 'resetFactDefault');    // { key: 'resetFactDefault', value: 0 }
zclId.functional('0', '0');                          // { key: 'resetFactDefault', value: 0 }
zclId.functional(0, 0);                              // { key: 'resetFactDefault', value: 0 }
```

*************************************************
<br />

<a name="API_getCmdRsp"></a>
### .getCmdRsp(cId, rspId)

Returns an item of the Functional CmdRsp identifier.  

**Arguments:**  

1. `cId` (_String_ | _Number_): Cluster Id. `cId` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.  
2. `rspId` (_String_ | _Number_): `rspId` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.  

**Returns:**  

* (_Object_ | _Undefined_): Returns an item of { key: 'sampleId', value: 1234 }, otherwise returns undefined if not found.  

**Examples:**  

```js
zclId.getCmdRsp('genAlarms', 'alarm');    // { key: 'alarm', value: 0 }
zclId.getCmdRsp('9', '0');                // { key: 'alarm', value: 0 }
zclId.getCmdRsp(9, 0);                    // { key: 'alarm', value: 0 }
```

*************************************************
<br />

<a name="API_attr"></a>
### .attr(cId, attrId)

Returns an item of the Attribute identifier.  

**Arguments:**  

1. `cId` (_String_ | _Number_): Cluster Id. `cId` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.  
2. `attrId` (_String_ | _Number_): Attribute Id. `attrId` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.  

**Returns:**  

* (_Object_ | _Undefined_): Returns an item of { key: 'sampleId', value: 1234 }, otherwise returns undefined if not found.  

**Examples:**  

```js
zclId.attr('genBasic', 'hwVersion');    // { key: 'hwVersion', value: 3 }
zclId.attr('0', '3');                   // { key: 'hwVersion', value: 3 }
zclId.attr(0, 3);                       // { key: 'hwVersion', value: 3 }
```

*************************************************
<br />

<a name="API_attrType"></a>
### .attrType(cId, attrId)

Returns an item of the Attribute DataType identifier.  

**Arguments:**  

1. `cId` (_String_ | _Number_): Cluster Id. `cId` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.  
2. `attrId` (_String_ | _Number_): Attribute Id. `attrId` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.  

**Returns:**  

* (_Object_ | _Undefined_): Returns an item of { key: 'sampleId', value: 1234 }, otherwise returns undefined if not found.  

**Examples:**  

```js
zclId.attrType('genBasic', 'appVersion');    // { key: 'uint8', value: 32 }
zclId.attrType('0', '1');                    // { key: 'uint8', value: 32 }
zclId.attrType(0, 1);                        // { key: 'uint8', value: 32 }
```

*************************************************
<br />

<a name="API_dataType"></a>
### .dataType(type)

Returns an item of the DataType identifier.  

**Arguments:**  

1. `type` (_String_ | _Number_): DataType. `type` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.  

**Returns:**  

* (_Object_ | _Undefined_): Returns an item of { key: 'sampleId', value: 1234 }, otherwise returns undefined if not found.  

**Examples:**  

```js
zclId.dataType('uint16');    // { key: 'uint16', value: 33 }
zclId.dataType('33');        // { key: 'uint16', value: 33 }
zclId.dataType(33);          // { key: 'uint16', value: 33 }
```

*************************************************
<br />

<a name="Table"></a>
## 5. Table of Identifiers  

* Profile  

```js
{
    "IPM": 257,
    "HA": 260,
    "CBA": 261,
    "TA": 263,
    "PHHC": 264,
    "SE": 265
}
```  

* Cluster  

```js
{
    "genBasic": 0,
    "genPowerCfg": 1,
    "genDeviceTempCfg": 2,
    "genIdentify": 3,
    "genGroups": 4,
    "genScenes": 5,
    "genOnOff": 6,
    "genOnOffSwitchCfg": 7,
    "genLevelCtrl": 8,
    "genAlarms": 9,
    "genTime": 10,
    "genRssiLocation": 11,
    "genAnalogInput": 12,
    "genAnalogOutput": 13,
    "genAnalogValue": 14,
    "genBinaryInput": 15,
    "genBinaryOutput": 16,
    "genBinaryValue": 17,
    "genMultistateInput": 18,
    "genMultistateOutput": 19,
    "genMultistateValue": 20,
    "genCommissioning": 21,
    "genPartition": 22,
    "genOta": 25,
    "genPowerProfile": 26,
    "genApplianceCtrl": 27,
    "genPollCtrl": 32,
    "genGreenPowerProxy": 33,
    "closuresShadeCfg": 256,
    "closuresDoorLock": 257,
    "closuresWindowCovering": 258,
    "hvacPumpCfgCtrl": 512,
    "hvacThermostat": 513,
    "hvacFanCtrl": 514,
    "hvacDehumidificationCtrl": 515,
    "hvacUserInterfaceCfg": 516,
    "lightingColorCtrl": 768,
    "lightingBallastCfg": 769,
    "msIlluminanceMeasurement": 1024,
    "msIlluminanceLevelSensing": 1025,
    "msTemperatureMeasurement": 1026,
    "msPressureMeasurement": 1027,
    "msFlowMeasurement": 1028,
    "msRelativeHumidity": 1029,
    "msOccupancySensing": 1030,
    "ssIasZone": 1280,
    "ssIasAce": 1281,
    "ssIasWd": 1282,
    "piGenericTunnel": 1536,
    "piBacnetProtocolTunnel": 1537,
    "piAnalogInputReg": 1538,
    "piAnalogInputExt": 1539,
    "piAnalogOutputReg": 1540,
    "piAnalogOutputExt": 1541,
    "piAnalogValueReg": 1542,
    "piAnalogValueExt": 1543,
    "piBinaryInputReg": 1544,
    "piBinaryInputExt": 1545,
    "piBinaryOutputReg": 1546,
    "piBinaryOutputExt": 1547,
    "piBinaryValueReg": 1548,
    "piBinaryValueExt": 1549,
    "piMultistateInputReg": 1550,
    "piMultistateInputExt": 1551,
    "piMultistateOutputReg": 1552,
    "piMultistateOutputExt": 1553,
    "piMultistateValueReg": 1554,
    "piMultistateValueExt": 1555,
    "pi11073ProtocolTunnel": 1556,
    "sePrice": 1792,
    "seDrlc": 1793,
    "seMetering": 1794,
    "seMessaging": 1795,
    "seTunneling": 1796,
    "sePrepayment": 1797,
    "seEnergyMgmt": 1798,
    "seCalendar": 1799,
    "seDeviceMgmt": 1800,
    "seEvents": 1801,
    "seMduPairing": 1802,
    "seKeyEstablishment": 2048,
    "haApplianceIdentification": 2816,
    "haMeterIdentification": 2817,
    "haApplianceEventsAlerts": 2818,
    "haApplianceStatistics": 2819,
    "haElectricalMeasurement": 2820,
    "haDiagnostic": 2821,
    "manuSpecificCluster": 65535
}
```

* DataType  

```js
{
    "noData": 0,
    "data8": 8,
    "data16": 9,
    "data24": 10,
    "data32": 11,
    "data40": 12,
    "data48": 13,
    "data56": 14,
    "data64": 15,
    "boolean": 16,
    "bitmap8": 24,
    "bitmap16": 25,
    "bitmap24": 26,
    "bitmap32": 27,
    "bitmap40": 28,
    "bitmap48": 29,
    "bitmap56": 30,
    "bitmap64": 31,
    "uint8": 32,
    "uint16": 33,
    "uint24": 34,
    "uint32": 35,
    "uint40": 36,
    "uint48": 37,
    "uint56": 38,
    "uint64": 39,
    "int8": 40,
    "int16": 41,
    "int24": 42,
    "int32": 43,
    "int40": 44,
    "int48": 45,
    "int56": 46,
    "int64": 47,
    "enum8": 48,
    "enum16": 49,
    "semiPrec": 56,
    "singlePrec": 57,
    "doublePrec": 58,
    "octetStr": 65,
    "charStr": 66,
    "longOctetStr": 67,
    "longCharStr": 68,
    "array": 72,
    "struct": 76,
    "set": 80,
    "bag": 81,
    "tod": 224,
    "date": 225,
    "utc": 226,
    "attrId": 233,
    "bacOid": 234,
    "ieeeAddr": 240,
    "secKey": 241,
    "unknown": 255
}
```

<br />

<a name="Contributors"></a>
## 6. Contributors  

* [Simen Li](https://www.npmjs.com/~simenkid)  
* [Hedy Wang](https://www.npmjs.com/~hedywings)  
* [Peter Yi](https://www.npmjs.com/~peter.eb)  
* [Jack Wu](https://www.npmjs.com/~jackchased)  
* [Eason Chang](https://www.npmjs.com/~easonchangop)
