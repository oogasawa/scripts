#!/usr/bin/env node

const sh = require("shelljs");
const fs = require("fs");

class BioContainers {

	constructor() {
		this.urlBase = "https://depot.galaxyproject.org/singularity/";
		this.listFile = "biocontainers.list.txt";
	}

	hasListFile() {
		return fs.existsSync(this.listFile);
	}

	createListFile() {
		sh.exec("lftp -e \"ls > biocontainers.list.txt; exit\" " + this.urlBase);
	}

	search(name) {
		sh.exec("grep " + name + " biocontainers.list.txt");
		//console.log("grep " + name + " biocontainers.list.txt");
	}

}



//-----

main();

function main() {

	const bc = new BioContainers();
	let flg = bc.hasListFile();
	//console.log(flg);
	if (flg == false) { 
		bc.createListFile();
	}

	
	shift(process.argv, 2);
	
	//console.log(process.argv);

	for (name of process.argv) {
		bc.search(name);
		console.log("");
	}

}


function shift(array, num) {
	for (let i=0; i<num; i++) {
		array.shift();
	}
	return array;
}


