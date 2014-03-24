var http = require('http');
var fs   = require('fs');
var async = require('async');

var file = process.argv[2];

async.waterfall( [
 readFile,
 readUrl,
 printUrlContents
]);

function readFile(callback) {
  fs.readFile(file, function(err, data) {
    if (err) {
     callback(err);
     return;
    }
    callback(null, data.toString());
  });
}

function readUrl(url, callback) {
  http.get(url, function (response) {
    var contents = "";
    
    response.on('data', function(chunk) {
      contents += chunk;
    });

    response.on('end', function() {
      callback(null, contents);
    });

    response.on('error', function(e) {
      callback(e);
    });
  });
}

function printUrlContents(contents) {
  console.log(contents);
}

