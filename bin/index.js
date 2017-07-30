'use strict';

var _require = require('path'),
    resolve = _require.resolve;

var runScript = require('./runScript');
var setExecutable = require('./setExecutable');

setExecutable();

var arg = process.argv.slice(2)[0];
runScript(resolve(__dirname, 'scripts/' + arg + '.sh'));