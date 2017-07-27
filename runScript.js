'use strict';

const {exec} = require('child_process');

function runScript(scriptPath) {
    const sh = exec(scriptPath);
    sh.on('exit', function (code) {
        process.exit(code);
    });

    sh.stdout.pipe(process.stdout);
    sh.stderr.pipe(process.stderr);
    process.stdin.pipe(sh.stdin);
}

module.exports = runScript;
