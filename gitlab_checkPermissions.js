

main();
/*
function main() {
	console.log(parsePackageName("oogasawa/ci-test"));
}*/


function main() {

	var fs = require('fs');
	var lines = fs.readFileSync('./gitlab_check_permissions.txt', 'utf8').split("\n");


	const execSync = require('child_process').execSync;
	var fs = require('fs');
	if (!fs.existsSync("./data")) {
		execSync("mkdir ./data");
	}
	
	
	lines.forEach(line=>{
		var res = line.match(/^(\S+)/);
		if (res != null) {
			var packageName = parsePackageName(res[1]);
			var outfile     = "outfile_" + packageName + ".txt"
			var com = "wget -o " + outfile + " https://gitlab.ddbj.nig.ac.jp/oogasawa/" + packageName; 
			//console.log(com);
			checkPermission(com, outfile, packageName);
		}
	});


	execSync("rm -R -f ./data");
	//console.log(content);

}


function parsePackageName(longName) {
	var result = {};
	var res = longName.split('/');
	result.namespace = res[0];
	result.packageName = res[1];

	return result.packageName;
}


function checkPermission(com, outfile, packageName) {

	const execSync = require('child_process').execSync;
	var fs = require('fs');

	execSync(com, {cwd: "./data"}).toString();
	
	//var fs0 = require('fs');
	var content = fs.readFileSync("./data/" + packageName, 'utf8');
	var res = content.match(packageName);
	if (res != null) {
		console.log("!!!" + packageName);
	}

	
}
