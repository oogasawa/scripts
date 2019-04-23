#!/usr/bin/env node

/** 
* Installation of GraalVM on Mac OSX.
*/

main()



function main() {

	var info = new SystemInfo();
	//var origPath = process.env.PATH;	
	console.log("export PATH=" + info.graalPath + ":$PATH"); 

	/*
	var execSync = require('child_process').execSync;
	var com      = 'export PATH=' + info.graalPath + "/bin:" + origPath;
	console.log(com);
	
	var result   = execSync(com, {stdio: 'inherit', stderr: 'inherit'});
	*/
	
}


function SystemInfo() {

	this.graalVersion = "graalvm-ce-1.0.0-rc10";


	/** on Mac OS:
        export PATH=/path/to/graalvm/Contents/Home/bin:$PATH

	for example on Linux:
	export PATH=/path/to/graalvm/bin:$PATH
 	https://www.graalvm.org/docs/getting-started/

	*/
	this.graalPath = process.env.HOME + "/local/" + this.graalVersion + "/Contents/Home/bin";

	
	this.originalPATH = process.env.PATH;


	this.activatedPATH = function() {
		var pathList = this.originalPATH.split(":");



}


