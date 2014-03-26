var http = require('http');
var async = require('async');

var url = process.argv[2];

async.reduce(
  ['one', 'two', 'three'],
  0,
  reduceNext,
  onReduceComplete
);

function reduceNext(memo, item, callback) {
  var path = url + "?number=" + item;
  http.get(path, function(response) {
    var content = '';

    response.on('data', function(chunk) {
      content += chunk;
    });

    response.on('error', function(e) {
      callback(e);
    });

    response.on('end', function() { 
      callback(null, memo + Number(content));
    });
  });
}


function onReduceComplete(err, result) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(result);
}
