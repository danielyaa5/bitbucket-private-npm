'use strict';

const {resolve} = require('path');
const runScript = require('./runScript');

function cleanupSsh() {
    runScript(resolve(__dirname, 'scripts/cleanupSsh.sh'));
}

module.exports = cleanupSsh;
