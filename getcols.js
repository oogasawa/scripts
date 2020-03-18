
const readline = require("readline");


function main() {

	let c = parseInt(process.argv[2]);
	
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});

	rl.on("line", (line) => {
		let cols = line.split("\t");
		console.log(cols[c]);
	});
}

main();
