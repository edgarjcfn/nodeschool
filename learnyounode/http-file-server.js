var fs = require('fs');
var http = require('http');

var filePath = process.argv[3];
var server = http.createServer(handleHttp);
server.listen(process.argv[2]);

function handleHttp(request, response) {
	var fileStream = fs.createReadStream(filePath, {encoding: 'utf8'});
	// response.setHeader('Content-Disposition', 'attachment; filename=node.js');
	fileStream.pipe(response);
}