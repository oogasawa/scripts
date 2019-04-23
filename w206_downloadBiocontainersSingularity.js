#!/usr/bin/env node

main()


function main() {

    var bs = new BiocontainerSingularityInfo();
    bs.makeLftpScript();
    bs.getFileList();
    bs.readFileList();
    bs.fileList.forEach((file)=> {
	bs.execDownload(file);
    });
}



function BiocontainerSingularityInfo() {

    this.biocontainerUrl = "https://depot.galaxyproject.org/singularity/";

    this.temporalLftpScriptPath = "/tmp/lftp_script.txt";

    this.temporalFileListPath = "/tmp/biocontainer.txt";

    this.lftpCommandForGettingFileList = [
	"open " + this.biocontainerUrl,
	"ls > " + this.temporalFileListPath
    ];


    this.makeLftpScript = function() {
	var fs = require("fs");
	fs.writeFileSync(this.temporalLftpScriptPath,
			 this.lftpCommandForGettingFileList.join("\n")+"\n");
    }

    this.getFileList = function() {
    	const execSync = require('child_process').execSync;
    	code = execSync('lftp -f ' + this.temporalLftpScriptPath );
	return code;
    }

    this.fileList = [];

    this.resultOfLs = this.temporalFileListPath;

    this.readFileList = function() {
        var fs = require('fs');
        var lines = fs.readFileSync(this.resultOfLs, "utf8").split("\n");

        var pattern = /\s+(\S+)$/;
        lines.forEach(line => {
            var m = line.match(pattern);
            if (m) {
                this.fileList.push(m[1]);
            }
        });

    };

    this.downloadDir = "/mnt/stonefly510/biocontainer-singularity/";

    this.execDownload = function(file) {
	const execSync = require('child_process').execSync;
	const fs       = require('fs');
	
	var firstChar = file.charAt(0).toLowerCase();
	var dir = this.downloadDir + firstChar + "/";
	if (!fs.existsSync(dir)) {
	    console.log("mkdir -p " + dir);
	    execSync("mkdir -p " + dir);
	}
	console.log("wget -nc -nd -P " + dir + " " + this.biocontainerUrl + file);
	execSync("wget -nc -nd -P " + dir + " " + this.biocontainerUrl + file, {stdio: 'inherit', stderr: 'inherit'});
    }

    
}
