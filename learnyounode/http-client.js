var http = require('http');

http.get(process.argv[2], onHttpGet);

function onHttpGet(response) {
  response.setEncoding('utf8');
  response.on('data', onResponseUpdate);
  response.on('error', onResponseError);
}

function onResponseUpdate(data) {
  console.log(data);
}

function onResponseError(err) {
  console.log('Error!!');
  console.log(err);
}
