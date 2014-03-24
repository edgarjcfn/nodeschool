var http = require('http');
var concat = require('concat-stream');

var sentRequests = [];
var orderedResponses = [];

for (var i=2; i < process.argv.length; i++) {
  var req = http.get(process.argv[i], function(response) {
    response.setEncoding('utf8');
    response.pipe(concat(function(data) {
        var index = sentRequests.indexOf(response.req);
        orderedResponses.splice(index, 0, data);
        checkFinished();
    }));
  });

  sentRequests.push(req);
}

function checkFinished() {
  if (orderedResponses.length == sentRequests.length) {
    printAllResponses();
  }
}

function printAllResponses()
{
  for (var i = 0; i < orderedResponses.length; i++) {
    var responseData = orderedResponses[i];
    console.log(responseData);
  }
}