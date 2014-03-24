var fs = require('fs');
var path = require('path');

function filterByExtension(dir, ext, callback) {
  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err);

    if (ext[0] != ".")
      ext = "." + ext;

    var files = [];
    for (i=0; i<list.length; i++)  {
      if (path.extname(list[i]) == ext) {
        files.push(list[i]);
      }
    }

    return callback(null, files);
  });
}

module.exports = filterByExtension;
