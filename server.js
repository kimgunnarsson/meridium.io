var express = require("express"),
    open = require('open'),
	app = express(),
	port = 8118,
    host = '127.0.0.1';

if(process.argv.length > 2) {
	port = parseInt(process.argv[2]);
}

app.use(express.static(__dirname));
app.listen(port, host);
open('http://' + host + ':' + port, function(err) {if(err) throw err;});
console.log('Listens on ' + host + ':' + port + '...');