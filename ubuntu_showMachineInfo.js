

function extractInfo(com, regex) {
    const shell = require("shelljs");
    shell.exec(com, {silent:true})
	.stdout
	.split("\n")
	.filter(line =>line.match(regex))
	.map(line=>{
	    let result = line.match(/^\s*(\w.+)/);
	    return result[1];
	})
	.forEach(line => console.log(line));    
}



function showCpuInfo() {

    const shell = require("shelljs");
    shell.env["LANG"] = "C";
    console.log("# CPU Info");
    let com = "cat /proc/cpuinfo";
    console.log(
	shell.exec(com, {silent:true})
	    .grep('model name')
	    .uniq()
	    .stdout
    );
}


function showMemInfo() {
    
    console.log("# Memory Info");
    extractInfo("cat /proc/meminfo", new RegExp("MemTotal.+"));
    extractInfo("sudo dmidecode -t memory", /Type:\s+DDR.+/);
    extractInfo("sudo dmidecode -t memory", new RegExp("(Speed:\\s+[0-9].+)"));
    console.log();
}


function showStorageInfo() {
    
    console.log("# Storage Info");
    extractInfo("sudo parted -l", /.+/);
    console.log();
}


function showNicInfo() {
    
    console.log("# NIC Info");
    extractInfo("lspci", /Ethernet/);
    console.log();
}





// --------------


function main() {

    const shell = require("shelljs");
    
    let osInfo = shell.exec("lsb_release -d", {silent:true}).stdout;
    console.log("# OS info");
    console.log(osInfo);
    
    showCpuInfo();
    
    showMemInfo();

    showStorageInfo();

    showNicInfo();
}


// --------

main();
