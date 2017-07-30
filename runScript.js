'use strict';

const {exec} = require('child_process');
const {resolve} = require('path');

function runScript(scriptPath) {
  console.log(scriptPath);

  const shOpts = { cwd: resolve(__dirname, 'scripts') };
  const sh = exec('bash ' + scriptPath, shOpts);
  sh.on('exit', function (code) {
    process.exit(code);
  });

  sh.stdout.pipe(process.stdout);
  sh.stderr.pipe(process.stderr);
  process.stdin.pipe(sh.stdin);
}

module.exports = runScript;
