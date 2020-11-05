
let sh = require("shelljs")

let parameters = [
	"net.core.rmem_max",
	"net.core.wmem_max",
	"net.core.rmem_default",
	"net.core.wmem_default",
	"net.ipv4.tcp_rmem",
	"net.ipv4.tcp_wmem",
	"net.ipv4.tcp_mem",
	"net.ipv4.route.flush",
];


main();

function main() {
	parameters.forEach(p=>{
		sh.exec("sysctl -a 2> /dev/null | grep " + p)
	});
			
}



