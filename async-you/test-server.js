var http = require('http');
var url = require('url');

server = http.createServer(handleHttp);
server.listen('5000');
console.log('listening on port 5000...');


function handleHttp(request, response) {
  var params = url.parse(request.url, true);
  response.end(params.pathname);
  console.log('replied with ' + params.pathname);
}

