var async = require('async');
var http = require('http');

async.series({
  requestOne:  httpGet(process.argv[2]),
  requestTwo:  httpGet(process.argv[3])
 },
 function (err, result) {
   console.log(result);
 }
);


function httpGet(url) {
  return function(callback) {
      http.get(url, function (response) {
       var contents = '';
       response.on('data', function(chunk) {
          contents += chunk
       });

       response.on('end', function() {
          callback(null, contents);
       });

       response.on('error', function(e) {
           callback(e);
       });
    });
  };
}
