var http = require('http');
var url  = require('url');

var port = '5000';
var server = http.createServer(handleHttp);
server.listen(port);
console.log('listening on port ' + port);

function handleHttp(request, response) {
  var take = Math.round( Math.random() * 100);
  if ((take % 3) == 0) {
    response.end('meerkat');
  }
  else {
    response.end('walrus');
  }
} 
