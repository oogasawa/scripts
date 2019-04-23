#!/usr/bin/env node


var libraries = [
	{"name": "simplejlib-bash", "gitlab": "ddbj"},
	{"name": "simplejlib-util", "gitlab": "ddbj"},
	{"name": "simplejlib-fsm", "gitlab": "ddbj"},
];

main();


function main() {
	libraries.forEach(function(lib) {
		git_clone(lib);
		mvn_install(lib);
	});
}


function git_clone(lib) {
	
	//var HOME   = process.env.HOME;
	var execSync = require('child_process').execSync;
	var com = ["git_clone.js", lib.name, lib.gitlab].join(" ");
	var result   = execSync(com, {stdio: 'inherit', stderr: 'inherit'});

}


function mvn_install(lib) {
	
	var PWD   = process.env.PWD;
	var execSync = require('child_process').execSync;
	var com = "mvn clean compile package install";
	console.log(com);
	var result   = execSync(com, {cwd: PWD + "/" + lib.name,
								  stdio: 'inherit', stderr: 'inherit'});

}


