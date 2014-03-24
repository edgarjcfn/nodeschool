var http = require('http');
var async = require('async');

async.map([process.argv[2], process.argv[3]], httpGet, onMapFinished);

function httpGet(url, callback) {
  var req = http.get(url, function(response) {
    var contents = '';
    response.on('data', function(chunk) {
      contents += chunk;
    });

    response.on('end', function() {
      callback(null, contents);
    })
  });

  req.on('error', function(err) {
    callback(err);
  });
};

function onMapFinished(err, results) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(results);
}