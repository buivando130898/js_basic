/*
var fetchUrl = require("fetch").fetchUrl;

// source file is iso-8859-15 but it is converted to utf-8 automatically
fetchUrl("https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=YourApiKeyToken", function(error, meta, body){
    console.log(body.toString());
});

*/


async function init() {
    var fetchUrl = require("fetch").fetchUrl;

// source file is iso-8859-15 but it is converted to utf-8 automatically
fetchUrl("https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=YourApiKeyToken", function(error, meta, body){
    console.log(body.toString());
});
    await sleep(1000);
    console.log(2);
}



setTimeout(function(){
    var fetchUrl = require("fetch").fetchUrl;

// source file is iso-8859-15 but it is converted to utf-8 automatically
fetchUrl("https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=YourApiKeyToken", function(error, meta, body){
    console.log(body.toString());
});
}, 2000);


//init();