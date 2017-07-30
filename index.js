'use strict';

const {resolve} = require('path');
const runScript = require('./runScript');
const setExecutable = require('./setExecutable');

setExecutable();

const arg = process.argv.slice(2)[0];
runScript(resolve(__dirname, `scripts/${arg}.sh`));
