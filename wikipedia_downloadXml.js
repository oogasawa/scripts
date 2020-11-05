
/*

*/

const rp = require("request-promise");
const $ = require("cheerio");
const url = "https://dumps.wikimedia.org/enwiki/latest/";

rp(url)
    .then((html)=>{
        let atags = $('a', html);
		for (let i of Object.keys(atags)) { 
			console.log(atags[i].attribs.href);
		}
    })
    .catch((err)=>{
        console.error(err);
    })
