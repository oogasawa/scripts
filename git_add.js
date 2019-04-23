#!/usr/bin/env node

var HOME   = process.env.HOME;

var execSync = require('child_process').execSync;
var result   = execSync('git status | perl ${HOME}/scripts/git_add.pl | bash', {stdio: 'inherit', stderr: 'inherit'});

