#!/usr/bin/env node

main();

var installed_libs = [
    "simplejlib-bash",
    "simplejlib-util",
    "simplejlib-fsm"
];

function main() {
    installed_libs.forEach(function(lib){
	git_clone(lib);
	mvn_compile(lib);
	//mvn_deploy(lib); // local
	copy_to_jarDir(lib);
    });
}


function git_clone(lib) {

    var HOME     = process.env.HOME;
    var execSync = require('child_process').execSync;
    var result   = execSync('bash ${HOME}/scripts/git_clone_ddbj.sh ' + lib,
			    {cwd: '${HOME}/works02', stdio: 'inherit', stderr: 'inherit'});
    return result;
}


function git_clone(lib) {

    var HOME     = process.env.HOME;
    var execSync = require('child_process').execSync;
    var result   = execSync('mvn clean compile package deploy'
			    {cwd: '${HOME}/works02/' + lib, stdio: 'inherit', stderr: 'inherit'});
    return result;
}


function git_clone(lib) {

    var HOME     = process.env.HOME;
    var execSync = require('child_process').execSync;
    var result   = execSync('mvn clean compile package deploy'
			    {cwd: '${HOME}/works02/' + lib, stdio: 'inherit', stderr: 'inherit'});
    return result;
}


