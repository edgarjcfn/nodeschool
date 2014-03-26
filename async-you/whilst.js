var http = require('http');
var async = require('async');

var url = process.argv[2];

var result = '';
var tries = 0;

async.whilst(
 resultIsNotMeerkat,
 tryAgain,
 onResult 
);


function resultIsNotMeerkat() {
  return result.trim() != 'meerkat';
} 

function tryAgain(callback) {
  tries++;
  result = '';

  http.get(url, function(response) {
    response.on('data', function(chunk){ 
      result += chunk;
    });
    response.on('end', function() {
      callback();
    });
  });
}

function onResult(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(tries);
}
