#!/usr/bin/env node

var workingDir


main();


function main() {

	var HOME  = process.env.HOME;
	var CWD   = process.env.PWD;
	var scriptDir = HOME + "/scripts";
	var jar   = scriptDir + "/simplejlib-util-1.2.0-jar-with-dependencies.jar";

	var execSync = require('child_process').execSync;
	var com = ["java", "-cp", jar, "net.ogalab.simplejlib.util.git.ConsistencyChecker", CWD].join(" ");
	console.log(com);
	var result   = execSync(com , {cwd: CWD, stdio: 'inherit', stderr: 'inherit'});

}
