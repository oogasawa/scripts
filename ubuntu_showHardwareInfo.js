#!/usr/bin/env node


main();

function main() {
//    var osInfo = getOsInfo();
//    console.log(osInfo);
    //    console.log(getCpuInfo());

    console.log(emacs_getBufferList());
    console.log(emacs_createShellBuffer("created-shell"));
    console.log(emacs_getBufferList());
    console.log(emacs_getCurrentBuffer());
}


function getOsInfo() {

    var HOME   = process.env.HOME;
    var execSync = require('child_process').execSync;
    var result   = execSync('lsb_release -d').toString();

}



function getCpuInfo() {

    var HOME   = process.env.HOME;
    var execSync = require('child_process').execSync;
    var result   = execSync('cat /proc/cpuinfo | grep "model name"').toString();

    return result;
}


function getMemInfo() {

}


//-----



function emacs_sayHello() {
    var execSync = require('child_process').execSync;
    var result   = execSync('emacsclient -e \'(message "Hello")\'').toString();

    return result;
}


function emacs_getCurrentBuffer() {
    var execSync = require('child_process').execSync;
    var result   = execSync('emacsclient -e \'(current-buffer)\'').toString();

    return result;
}



function emacs_getBufferList() {
    var execSync = require('child_process').execSync;
    var result   = execSync('emacsclient -e \'(get-buffer-list)\'').toString();

    return result.split(/\\n/);
}


function emacs_createShellBuffer(name) {
    var execSync = require('child_process').execSync;
    var com = ["emacsclient -e ",
	       "'(",
	       "create-shell-buffer ",
	       '"' + name + '"',
	       ")'"].join("");
    console.log(com);
    var result   = execSync(com).toString();

    return result;
}



function emacs_deleteShellBuffer(name) {
    var execSync = require('child_process').execSync;
    var com = ["emacsclient -e ",
	       "'(",
	       "delete-shell-buffer ",
	       '"' + name + '"',
	       ")'"].join("");
    console.log(com);
    var result   = execSync(com).toString();

    return result;
}



function emacs_gotoChar(buffer, num) {
    var execSync = require('child_process').execSync;
    var com = ["emacsclient -e ",
	       "'(",
	       "with-current-buffer ",
	       '"' + buffer + '"',
	       "(goto-char " + String(num) + ")",
	       ")'"].join("");
    console.log(com);
    var result   = execSync(com).toString();

    return result;    
}


function emacs_gotoLine(buffer, num) {
    var execSync = require('child_process').execSync;
    var com = ["emacsclient -e ",
	       "'(",
	       "with-current-buffer ",
	       '"' + buffer + '"',
	       "(goto-line " + String(num) + ")",
	       ")'"].join("");
    console.log(com);
    var result   = execSync(com).toString();

    return result;    
}


function emacs_forwardChar(buffer, num) {
    var execSync = require('child_process').execSync;
    var com = ["emacsclient -e ",
	       "'(",
	       "with-current-buffer ",
	       '"' + buffer + '"',
	       "(forward-char " + String(num) + ")",
	       ")'"].join("");
    console.log(com);
    var result   = execSync(com).toString();

    return result;    
}



function emacs_forwardLine(buffer, num) {
    var execSync = require('child_process').execSync;
    var com = ["emacsclient -e ",
	       "'(",
	       "with-current-buffer ",
	       '"' + buffer + '"',
	       "(forward-line " + String(num) + ")",
	       ")'"].join("");
    console.log(com);
    var result   = execSync(com).toString();

    return result;    
}



function emacs_countLines(buffer) {
    var execSync = require('child_process').execSync;
    var com = ["emacsclient -e ",
	       "'(",
	       "with-current-buffer ",
	       '"' + buffer + '"',
	       "(get-num-of-lines)",
	       ")'"].join("");
    console.log(com);
    var result   = execSync(com).toString();

    return result;    
}



function emacs_countChars(buffer) {
    var execSync = require('child_process').execSync;
    var com = ["emacsclient -e ",
	       "'(",
	       "with-current-buffer ",
	       '"' + buffer + '"',
	       "(get-num-of-chars)",
	       ")'"].join("");
    console.log(com);
    var result   = execSync(com).toString();

    return result;    
}






function emacs_sendCommand(buffer, command) {
    var execSync = require('child_process').execSync;
    var com = ["emacsclient -e ",
	       "'(",
	       "send-command ",
	       '"' + buffer + '"',
	       '"' + command + '"', // you must escape special characters.
	       ")'"].join("");
    console.log(com);
    var result   = execSync(com).toString();

    return result;    
}


// Prerequisite: the locale of the emacs shell-buffer should be English. (or simply "C")
function emacs_sendPassword(buffer, password) {
    var execSync = require('child_process').execSync;
    var com = ["emacsclient -e ",
	       "'(",
	       "send-password ",
	       '"' + buffer + '"',
	       '"' + password + '"', // you must escape special characters.
	       ")'"].join("");
    console.log(com);
    var result   = execSync(com).toString();

    return result;    
}


function emacs_getBufferString(buffer) {
    var execSync = require('child_process').execSync;
    var com = ["emacsclient -e ",
	       "'(",
	       "get-buffer-string ",
	       '"' + buffer + '"',
	       ")'"].join("");
    console.log(com);
    var result   = execSync(com).toString();

    return result;    
}




function emacs_getBufferTail(buffer, len) {
    var execSync = require('child_process').execSync;
    var com = ["emacsclient -e ",
	       "'(",
	       "get-buffer-tail ",
	       '"' + buffer + '"',
	       " " + String(len),
	       ")'"].join("");
    console.log(com);
    var result   = execSync(com).toString();

    return result;
}





function emacs_getMinibufferPrompt(buffer) {
    var execSync = require('child_process').execSync;
    var com = ["emacsclient -e ",
	       "'(",
	       "minibuffer-prompt ",
	       ")'"].join("");
    console.log(com);
    var result   = execSync(com).toString();

    return result;    
}

/** This function returns the contents of the active minibuffer.
*/
function emacs_getMinibufferContents(buffer) {
    var execSync = require('child_process').execSync;
    var com = ["emacsclient -e ",
	       "'(",
	       "get-minibuffer-contents ",
	       ")'"].join("");
    console.log(com);
    var result   = execSync(com).toString();

    return result;    
}


