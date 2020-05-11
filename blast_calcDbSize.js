const fs = require('fs');

let pattern = /,([0-9]+)\s([A-Z]B),/;

let infile = process.argv[2];
let total  = 0;
fs.readFileSync(infile, "utf-8")
    .split("\n")
    .forEach(line => {
		var result = line.match(pattern);
		//console.log(result);
		if (result) {
			console.log(result[1] + "\t" + result[2]);
			total += Number(result[1]);
		}

	});
console.log(total);
