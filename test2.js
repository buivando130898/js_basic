var myVar = setInterval(myTimer, 15000);

function myTimer() {
    var fetchUrl = require("fetch").fetchUrl;

    // source file is iso-8859-15 but it is converted to utf-8 automatically
    fetchUrl("https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=YourApiKeyToken", function(error, meta, body){
        console.log(body.toString());
    });
}