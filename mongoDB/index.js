var wagner = require('wagner-core');
var express = require('express');

require('./models')(wagner);

var pais = wagner.invoke(function(paisModel){
  return paisModel;
});

var app = express();
app.use('/api/v1', require('./api')(wagner, pais));

app.listen(3000);
console.log('Listening on port 3000!');


// wagner.invoke(function(db){
//   db.connection.close()
// });
