'use strict';

var _require = require('fs'),
    readdirSync = _require.readdirSync;

var _require2 = require('child_process'),
    execSync = _require2.execSync;

function listBashFiles(p) {
  return readdirSync(p);
}

function setExecutable() {
  var scriptsPath = __dirname + '/scripts';
  var bashFiles = listBashFiles(scriptsPath);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = bashFiles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var file = _step.value;

      var filePath = scriptsPath + '/' + file;
      execSync('chmod +x ' + filePath);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

module.exports = setExecutable;