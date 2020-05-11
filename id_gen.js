#!/usr/bin/env node

const sprintf = require('sprintf-js').sprintf;
const process = require('process');
const MersenneTwister = require('mersenne-twister');

class IdMaker {
	constructor() {
		this.rng = new MersenneTwister();
	}
		
	generateId() {
		let d = new Date();
		
	let id = sprintf("%s%02d%02d-%02d%02d%02d-%06d",
					 d.getFullYear(), d.getMonth()+1, d.getDate(),
					 d.getHours(), d.getMinutes(), d.getSeconds(),
					 this.rng.random()*1000000);

/*
		let id = sprintf("%s%02d%02d-%06d",
						 d.getFullYear(), d.getMonth()+1, d.getDate(),
						 this.rng.random()*1000000);
*/
		
		return id;
	}
}

// -----

function main() {

	let num = 1;
	if (process.argv.length > 2) {
		num = parseInt(process.argv[2]);
	}

	let idMaker = new IdMaker();
	
	for (let i=0; i<num; i++) {
		console.log(idMaker.generateId());
	}
}

main();
