#!/usr/bin/env node

var packageList = [
    "amqplib",
    "fast-sort",
    "lib-r-math.js",
    "mersenne-twister",
    "node-uuid",
    "node-stringbuilder",
    "shelljs",
    "sprintf-js",
    "github:oogasawa/sprintf-mjs",
];

// -----

function main() {

	let execSync = require('child_process').execSync;
	for (let i=0; i<packageList.length; i++) {
		execSync("npm install " + packageList[i], {stdio: 'inherit', stderr: 'inherit'});
	}
}

main();
