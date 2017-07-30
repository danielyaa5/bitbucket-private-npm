'use strict';

const createSshKeys = require('./createSshKeys');
const cleanupSsh = require('./cleanupSsh');
const setupSsh = require('./setupSsh');

const scripts = { createSshKeys, cleanupSsh, setupSsh};
const arg = process.argv.slice(2)[0];
scripts[arg]();
