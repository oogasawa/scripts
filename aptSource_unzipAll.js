#!/usr/bin/env node

main();


function main() {
    
    var PWD   = process.env.PWD;
    var packageName = process.argv[2];
    var packageDir  = PWD + "/" + packageName;
    
    var execSync = require('child_process').execSync;
    var result = execSync("mkdir " + packageName, {cwd: PWD, stdio: 'inherit', stderr: 'inherit'});
    
    //    var com = "apt source --install-suggests " + packageName;
    var com = "apt source " + packageName;
    var result   = execSync(com, {cwd: packageDir, stdio: 'inherit', stderr: 'inherit'});

    com = 'find ./ -name "*.xz"';
    var xzFileList   = execSync(com, {cwd: packageDir}).toString().split("\n");
    //console.log(result);

    var path = require('path');
    xzFileList.forEach(function(p) {
	var r = path.parse(p);
	//console.log(r);
	if (r.dir == '.' && r.ext == '.xz') { // xz file is on the current directory.
	    var com = "xz -dc " + r.base + " | tar xvf - ";
	    var result = execSync(com, {cwd: packageDir, stdio: 'inherit', stderr: 'inherit'});
	}
	else if (r.dir.length > 1 && r.ext == '.xz') { // xz file is under the current directory.
	    var com = "xz -dc " + r.base + " | tar xvf - ";
	    var cwd = packageDir + "/" + r.dir;
	    var result = execSync(com, {cwd: cwd, stdio: 'inherit', stderr: 'inherit'});
	}
    });

    
}
