'use strict';

const {exec} = require('child_process');
const {resolve} = require('path');

const sh = exec(resolve(__dirname, 'scripts/createSshKeys.sh'), {stdio: 'inherit'});
sh.on('exit', function (code) {
    process.exit(code);
});

sh.stdout.pipe(process.stdout);
sh.stderr.pipe(process.stderr);
process.stdin.pipe(sh.stdin)
