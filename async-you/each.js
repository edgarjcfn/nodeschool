var http = require('http');
var async = require('async');

async.each([process.argv[2], process.argv[3]], httpGet, onResponseError);

function httpGet(url, callback) {
  var req = http.get(url);
  req.on('error', function(err) {
    callback(err);
  });
};

function onResponseError(err) {
  if (err) {
    console.log(err);
  }
}