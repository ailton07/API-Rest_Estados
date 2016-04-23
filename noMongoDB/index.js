var wagner = require('wagner-core');
var express = require('express');
var pais = require('./estados-cidades');


//console.log(pais.estados);
//pais.estados.forEach(function(estado){ console.log(estado.sigla);});

var app = express();

app.use('/api/v1', require('./api')(wagner, pais));

app.listen(3000);
console.log('Listening on port 3000!');
