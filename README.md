# zcl-id

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

<br />

<a name="Installation"></a>
## 2. Installation  

> $ npm install zcl-id --save

<br />

<a name="Usage"></a>
## 3. Usage  

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

**Arguments:**  

1. `profId` (_String_ | _Number_): 

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

**Arguments:**  

1. `cId` (_String_ | _Number_): 

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

**Arguments:**  

1. `profId` (_String_ | _Number_): 
2. `devId` (_String_ | _Number_): 

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

**Arguments:**  

1. `cmdId` (_String_ | _Number_): 

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

**Arguments:**  

1. `cId` (_String_ | _Number_): 
2. `cmdId` (_String_ | _Number_): 

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

**Arguments:**  

1. `cId` (_String_ | _Number_): 
2. `rspId` (_String_ | _Number_): 

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

**Arguments:**  

1. `cId` (_String_ | _Number_): 
2. `attrId` (_String_ | _Number_): 

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

**Arguments:**  

1. `cId` (_String_ | _Number_): 
2. `attrId` (_String_ | _Number_): 

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

**Arguments:**  

1. `type` (_String_ | _Number_): 

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

<br />

<a name="Contributors"></a>
## 6. Contributors  

* [Simen Li](https://www.npmjs.com/~simenkid)  
* [Hedy Wang](https://www.npmjs.com/~hedywings)  
* [Peter Yi](https://www.npmjs.com/~peter.eb)  
* [Jack Wu](https://www.npmjs.com/~jackchased)  
