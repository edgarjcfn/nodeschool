var http = require('http');
var url = require('url');

server = http.createServer(handleHttp);
server.listen('5000');

function handleHttp(request, response) {
  var params = url.parse(request.url, true);
  response.end(params.pathname);
}

