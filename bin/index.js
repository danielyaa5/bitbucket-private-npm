'use strict';

var _require = require('path'),
    resolve = _require.resolve;

var runScript = require('./runScript');
var setExecutable = require('./setExecutable');

setExecutable();

var allArgs = process.argv.slice(2);
var command = allArgs[0];
var projectName = allArgs[1];
if (!command) {
  throw Error('Error: bitbucket-private-npm requires the first argument to be one of the script names');
}
if (!projectName) {
  throw Error('Error: bitbucket-private-npm requires the second argument to be the project name');
}
runScript(resolve(__dirname, 'scripts/' + command + '.sh'), projectName);