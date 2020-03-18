
const readline = require("readline");

function read() {

	return new Promise((resolve, reject) => {		

		let lineNo = 0;
		
		const rl = readline.createInterface({
			input: process.stdin,
			output: undefined,
			terminal: true
		});
		
		rl.on("line", (line)=>{
			//let cols = line.split("\t");
			lineNo++;
		});

		rl.on("close", (line)=>{
			resolve(lineNo);
		});

	});
	
}


async function main() {
	let lineNo = await read();
	console.log(lineNo);
}
	

main();
