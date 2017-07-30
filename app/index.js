'use strict';

const {resolve} = require('path');
const runScript = require('./runScript');
const setExecutable = require('./setExecutable');

setExecutable();

const allArgs = process.argv.slice(2);
const command = allArgs[0];
const projectName = allArgs[1];
if (!command) {
  throw Error('Error: bitbucket-private-npm requires the first argument to be one of the script names');
}
if (!projectName) {
  throw Error('Error: bitbucket-private-npm requires the second argument to be the project name');
}
runScript(resolve(__dirname, `scripts/${command}.sh`), projectName);
