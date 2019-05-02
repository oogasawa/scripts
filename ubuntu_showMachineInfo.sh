
const shell = require("shelljs");

let osInfo = shell.exec("lsb_release -d", {silent:true}).stdout;
console.log(osInfo);
