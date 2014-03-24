var filter = require('./filter-ext-module.js');

filter(process.argv[2], process.argv[3], function(err, data) {
  if (err)
    console.log(err);

  for (i=0; i < data.length; i++)
  {
    console.log(data[i]);
  }
});

