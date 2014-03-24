/* Modules */
var fs = require('fs');
var path = require('path');

/* Initialization */
var dir = process.argv[2];
var ext = "." + process.argv[3];

/* Let's do it */
fs.readdir(dir, function callback(err, list) {
  for (i=0; i<list.length; i++)  {
      if (path.extname(list[i]) == ext) {
        console.log(list[i]);
      }
    }
});
