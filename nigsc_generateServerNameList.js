
const sprintf = require('sprintf-js').sprintf;

main();

function main() {


	for (let i=0;  i<136; i++) {
		console.log(sprintf("at%03d", i));
	}

	
	for (let i=1;  i<=52; i++) {
		console.log(sprintf("it%03d", i));
	}

	
	for (let i=1;  i<=16; i++) {
		console.log(sprintf("igt%03d", i));
	}
		
}
