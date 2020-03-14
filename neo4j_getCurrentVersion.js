const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://neo4j.com/docs/operations-manual/current/';

rp(url)
	.then(function(html){
		//success!
		let p = $('nav#header-nav p', html)[0];
		console.log(p.children[0].data);
	})
	.catch(function(err){
		//handle error
	});
