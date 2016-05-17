var bodyparser = require('body-parser');
var express = require('express');
var status = require('http-status');


module.exports = function(wagner, pais) {

  var api = express.Router();
  // http://enable-cors.org/server_expressjs.html
  api.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
  api.use(bodyparser.json());

  api.get('/estados/', function(req, res) {
      res.json(pais.estados);
  });

  api.get('/estados/:estado', function(req, res) {
      if(pais.estados.find(function(estado){
        if(estado.nome.toLowerCase()==req.params.estado.toLowerCase()){
          return res.json(estado);
        }
      })){}
      else
        return res.status(status.NOT_FOUND).json({ error: 'Não encontrado' });

  });

  api.get('/estados/:estado/sigla', function(req, res) {
      if(pais.estados.find(function(estado){
        if(estado.nome.toLowerCase()==req.params.estado.toLowerCase()){
          return res.json(estado.sigla);
        }
      })){}
      else
        return res.status(status.NOT_FOUND).json({ error: 'Não encontrado' });
  });

  api.get('/estados/:estado/cidades', function(req, res) {
      if(pais.estados.find(function(estado){
        if(estado.nome.toLowerCase()==req.params.estado.toLowerCase()){
          return res.json(estado.cidades);
        }
      })){}
      else
        return res.status(status.NOT_FOUND).json({ error: 'Não encontrado' });
  });


  return api;
};
