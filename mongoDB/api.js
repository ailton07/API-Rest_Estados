var bodyparser = require('body-parser');
var express = require('express');
var status = require('http-status');
var wagner = require('wagner-core');

// Arquivo igual ao implementado em noMongoDB
// Graças a dependecy injection

module.exports = function(wagner, pais) {

  var api = express.Router();
  api.use(bodyparser.json());

  // CRUD
  // READ

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

  // DELETE

  api.delete('/estados/:estado', function(req, res) {
      if(pais.estados.find(function(estado, index){
        if(estado.nome.toLowerCase()==req.params.estado.toLowerCase()){
          // Implementar DELETE
          pais.estados.splice(index, 1);
          return res.json({'Estado Deletado':estado});
        }
      })){}
      else
        return res.status(status.NOT_FOUND).json({ error: 'Não encontrado' });

  });

  return api;
};
