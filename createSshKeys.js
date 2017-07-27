'use strict';

const {resolve} = require('path');
const runScript = require('./runScript');

function createSshKeys() {
    runScript(resolve(__dirname, 'scripts/createSshKeys.sh'));
}

module.exports = createSshKeys;
