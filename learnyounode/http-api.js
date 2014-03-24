var http = require('http');
var url = require('url');

var port = process.argv[2];
var server = http.createServer(handleHttp);
server.listen(port);

function handleHttp(request, response) {
	var params = url.parse(request.url, true);

	if (params.pathname == '/api/parsetime') {	
		response.writeHead(200, { 'Content-Type': 'application-json' });
		response.end(parseTime(params.query.iso));
	}
	else if (params.pathname == '/api/unixtime') {
		response.writeHead(200, { 'Content-Type': 'application-json' });
		response.end(unixTime(params.query.iso));
	}
	else {
		response.writeHead(404); //Not found
		response.end('error');
	} 
}

function parseTime(iso) {
	var date = new Date(iso);
	var result = {
		'hour': date.getHours(),
		'minute' : date.getMinutes(),
		'second' : date.getSeconds()
	};

	return JSON.stringify(result);
}

function unixTime(iso) {
	var date = new Date(iso);
	var result = {
		'unixtime' : date.getTime()
	};
	return JSON.stringify(result);
}