var http = require('http');
var async = require('async');

async.each([process.argv[2], process.argv[3]], httpGet, onResponseError);

function httpGet(url, callback) {
  http.get(url, function(response) {
    response.on('data', function(chunk) {
    });

    response.on('end', function() {
      callback();
    });
  });
};

function onResponseError(err) {
  if (err) {
    console.log(err);
  }
}