#!/usr/bin/env node

function generateId() {
	
	var sprintf = require('sprintf-js').sprintf;
	var MersenneTwister = require('mersenne-twister');
	var rng = new MersenneTwister();
	
	let d = new Date();
	let id = sprintf("%s%02d%02d-%02d%02d%02d-%06d",
					 d.getFullYear(), d.getMonth()+1, d.getDate(),
					 d.getHours(), d.getMinutes(), d.getSeconds(),
					 rng.random()*1000000);
	console.log(id);
}

// -----

function main() {
	generateId();
}

main();
