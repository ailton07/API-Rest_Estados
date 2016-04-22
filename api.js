var bodyparser = require('body-parser');
var express = require('express');
var status = require('http-status');
var pais = require('./estados-cidades');

module.exports = function(wagner) {

  var api = express.Router();
  api.use(bodyparser.json());

  api.get('/estados/', function(req, res) {
      res.json(pais.estados);
  });

  api.get('/estados/:estado', function(req, res) {
      if(pais.estados.find(function(estado){
        if(estado.nome.toLowerCase()==req.params.estado.toLowerCase()){
        //if(estado.nome.toLowerCase()=='amazonas'){
          return res.json(estado);
        }
      })){}
      else
        return res.status(status.NOT_FOUND).json({ error: 'Não encontrado' });

  });

  api.get('/estados/:estado/sigla', function(req, res) {
      if(pais.estados.find(function(estado){
        if(estado.nome.toLowerCase()==req.params.estado.toLowerCase()){
        //if(estado.nome.toLowerCase()=='amazonas'){
          return res.json(estado.sigla);
        }
      })){}
      else
        return res.status(status.NOT_FOUND).json({ error: 'Não encontrado' });
  });

  api.get('/estados/:estado/cidades', function(req, res) {
      if(pais.estados.find(function(estado){
        if(estado.nome.toLowerCase()==req.params.estado.toLowerCase()){
        //if(estado.nome.toLowerCase()=='amazonas'){
          return res.json(estado.cidades);
        }
      })){}
      else
        return res.status(status.NOT_FOUND).json({ error: 'Não encontrado' });
  });


  return api;
};
