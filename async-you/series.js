var async = require('async');
var http = require('http');

async.series({
  requestOne: function(callback) {
    http.get(process.argv[2], function (response) {
     var contents = '';
     response.on('data', function(chunk) {
        contents += chunk
     });

     response.on('end', function() {
         callback(null, end);
     });

     response.on('error', function(e) {
         callback(e);
     });
  })},
  requestTwo: function(callback) {
      http.get(process.argv[3], function (response) {
       var contents = '';
       response.on('data', function(chunk) {
          contents += chunk
       });

       response.on('end', function() {
           callback(null, end);
       });

       response.on('error', function(e) {
           callback(e);
       });
    })}
  },
 function (err, result) {
   console.log(result);
 }   
);