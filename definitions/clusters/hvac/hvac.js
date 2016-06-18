var hvac = {
    hvacDihumidificationControl:    require('./dihumidificationControl.js'),
    hvacFanControl:                 require('./fanControl.js'),
    hvacPumpConfigControl:          require('./pumpConfigControl.js'),
    hvacThermostat:                 require('./thermostat.js'),
    hvacUserInterfaceConfig:        require('./userInterfaceConfig.js')
};

module.exports = hvac;