var streamWriter = require('concat-stream');
var http = require('http');
var write = streamWriter(onStreamComplete);

http.get(process.argv[2], onHttpGet);

function onHttpGet(response) {
  response.pipe(write);
}

function onStreamComplete(data) {
  console.log(data.toString().length);
  console.log(data.toString());
}
