let http = require('http');
let fs = require('fs');

const myArgs = process.argv.slice(2);
fs.readFile(myArgs[0], function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});
console.log("Running at localhost:8000");