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

  if (params.query.number) {
    for (var key in numbers) {
      if (key == params.query.number) {
        response.end(numbers[key]);
      }
    }
  }
  response.end();
}

