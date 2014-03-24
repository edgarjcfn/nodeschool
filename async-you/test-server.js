var http = require('http');
var url = require('url');

server = http.createServer(handleHttp);
server.listen('5000');
console.log('listening on port 5000...');


function handleHttp(request, response) {
  var params = url.parse(request.url, true);
  if (params.pathname.indexOf('/error') > -1) {
  	response.writeHead(500);
  	response.end('Internal server error');
  	console.error('Error');
  }
  else {
  	response.writeHead(200, {"Content-Type": "text/html"});
  	response.end(params.pathname);
  	console.log('replied with ' + params.pathname);	
  }
}

