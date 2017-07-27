'use strict';

const {resolve} = require('path');
const runScript = require('./runScript');

function setupSsh() {
    runScript(resolve(__dirname, 'scripts/setupSsh.sh'));
}

module.exports = setupSsh;
