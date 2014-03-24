var fs = require('fs');
var filePath = process.argv[2];

var fileBuffer = fs.readFile(filePath, callback);

function callback(err, data)
{
  var fileContent = data.toString();
  console.log(fileContent.split('\n').length - 1);
}
