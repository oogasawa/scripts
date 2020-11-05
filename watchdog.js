
const child_process = require('child_process');

function wait(sec) {
	return new Promise(resolve => {
		console.log("... restarting ");
		setTimeout(resolve, sec*1000);
	});
}


function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}


class WatchedCommand {

	constructor() {
		this.com = undefined;
		this.args = undefined;
		this.timeout = undefined;
		this.exitCode = undefined;
	}


	start(com, args) {
		this.com = com;
		this.args = args;
		
		this.command = child_process.spawn(this.com, this.args);
		this.command.stdout.on('data', (data) =>{
			console.log(`${data}`);
		});
		this.command.stderr.on('data', (data) =>{
			console.error(`${data}`);
		});
		this.command.on('close', (code)=> {
			this.exitCode = code;
			if (this.dog != undefined) {
				clearTimeout(this.dog);
			}
		});

	}


	setWatchdog(timeout) {
		this.timeout = timeout*1000;
		
		this.dog = setTimeout(async ()=>{
			if (this.exitCode == undefined) {
				console.error("Process has taken too long time.");
				clearTimeout(this.dog);
				this.command.kill();

				await wait(5);
				// restart command
				let t = getRandomInt(10);
				console.log(t);
				this.start("sleep", [t]);
				this.setWatchdog(3);
			}
		}, this.timeout);
	}

}

// ---

function main() {
	const runner = new WatchedCommand();
	let t = getRandomInt(10);
	console.log(t);
	runner.start("sleep", [t]);
	runner.setWatchdog(3);
}

main();
	
