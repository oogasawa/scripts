
const fs = require('fs');
const sh = require('shelljs');

let regex = /apt install -y\s+(\S+)/;
const p2 = /Package: /m;

const infile = process.argv[2];
fs.readFileSync(infile, "utf-8")
    .split("\n")
	.map(line => line.match(regex))
	.filter(result => {return result != null;})
	.map(result => result[1])
    .forEach(pkg => {
		let res = sh.exec('apt show ' + pkg + " | head", {silent: true});
		if (res.match(p2)) {
			console.log(pkg + "\t ... ok");
		}
		else {
			console.log(pkg + "\t ... error");
		}
	});
