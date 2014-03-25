var http = require('http');
var url  = require('url');

var port = '5000';
var server = http.createServer(handleHttp);
server.listen(port);
console.log('listening on port ' + port);

function handleHttp(request, response) {
  var params = url.parse(request.url, true);
  var numbers = {
    'one' : '1',
    'two' : '2',
    'three': '3'
  };

  for (var key in numbers) {
    if (params.pathname.indexOf(key) > -1) {
      response.end(numbers[key]);
    }
  }

  response.end(params.pathname);
}

