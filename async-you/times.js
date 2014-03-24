var http = require('http');
var async = require('async');

async.times(
  5,
  createUser,
  onAllusersCreated
);

function createUser(n, callback) {
  var user = {'user_id' : n+1};
  var options = {
    hostname: process.argv[2],
    port: process.argv[3],
    path: "/users/create",
    method: 'POST'
  };

  var req = http.request(options, function(response) {
    response.on('data', function(chunk) {
      //do nothing.
    });

    response.on('end', function() {
      callback(null, user);
    })

  });

  req.write(JSON.stringify(user));
  req.end();
};

function onAllusersCreated(err, users) {
  if (err) {
    console.log(err);
    return;
  }
  var options = {
    hostname: process.argv[2],
    port: process.argv[3],
    path: "/users/"
  };

  http.get(options, function(response) {
    var contents = '';
    response.on('data', function(chunk) {
      contents += chunk;
    });
    response.on('end', function() {
      console.log(contents);
    })
  });
}