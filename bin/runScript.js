'use strict';

var _require = require('child_process'),
    exec = _require.exec;

var _require2 = require('path'),
    resolve = _require2.resolve;

function runScript(scriptPath, projectName) {
  var shOpts = { cwd: resolve(__dirname, 'scripts') };
  var sh = exec('bash ' + scriptPath + ' ' + projectName, shOpts);
  sh.on('exit', function (code) {
    process.exit(code);
  });

  sh.stdout.pipe(process.stdout);
  sh.stderr.pipe(process.stderr);
  process.stdin.pipe(sh.stdin);
}

module.exports = runScript;