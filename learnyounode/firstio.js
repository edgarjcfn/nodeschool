var fs = require('fs');
var filePath = process.argv[2];

var fileBuffer = fs.readFileSync(filePath);
var fileContent = fileBuffer.toString();

var newLines = fileContent.split('\n').length - 1;

console.log(newLines);
