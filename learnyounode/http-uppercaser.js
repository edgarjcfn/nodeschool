var http = require('http');
var through = require('through2-map');

var port = process.argv[2];
var server = http.createServer(handleHttp);
server.listen(port);

function handleHttp(request, response) {
	if (request.method == 'POST') {
	 	request
	 	.pipe(
	 		through(function(chunk) {
	 			return chunk.toString().toUpperCase();
	 		})
	 	)
	 	.pipe(
	 		response
	 	);
	}
	else {
		response.writeHead(400);
		response.end();
	}
}