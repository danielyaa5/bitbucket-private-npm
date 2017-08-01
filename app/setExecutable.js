'use strict';

const { readdirSync } = require('fs');
const { execSync } = require('child_process');

function listBashFiles(p) {
  return readdirSync(p);
}

function setExecutable() {
  const scriptsPath = `${__dirname}/app/scripts`;
  const bashFiles = listBashFiles(scriptsPath);
  for (let file of bashFiles) {
    const filePath = `${scriptsPath}/${file}`;
    execSync(`chmod +x ${filePath}`);
  }
}

module.exports = setExecutable;
