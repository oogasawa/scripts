
const fs = require("fs");
const htmlToText = require("html-to-text");

function main() {
    const fname = process.argv[2]; // An HTML file.
    fs.readFile(fname, "UTF-8", (err, htmlData)=>{
        console.log(htmlToText.fromString(htmlData));
    });

}


main();