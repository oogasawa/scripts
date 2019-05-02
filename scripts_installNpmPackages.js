#!/usr/bin/env node

var packageList = [
	"mersenne-twister",
	"node-uuid",
	"shelljs",
	"sprintf-js",
	"@stdlib/stdlib"
];

// -----

function main() {

	let execSync = require('child_process').execSync;
	for (let i=0; i<packageList.length; i++) {
		execSync("npm install " + packageList[i], {stdio: 'inherit', stderr: 'inherit'});
	}
}

main();
