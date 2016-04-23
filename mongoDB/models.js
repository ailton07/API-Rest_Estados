var mongoose = require('mongoose');
var pais = require('./estados-cidades');
var _ = require('underscore');

module.exports = function(wagner) {

  mongoose.connect('mongodb://localhost:27017/test');

  wagner.factory('db', function() {
    return mongoose;
  });

  var paisModel = mongoose.model('Pais', require('./pais'), 'pais');

  // Limpando BD
  paisModel.remove({}, function(error){
    if(error)
      console.log(error);
  });

  paisModel.nome = "Brasil" ;
  paisModel.estados = (pais.estados);

  // Restaurando o BD
  paisModel.create(paisModel, function(error){
    if(error)
      console.log(error);
  });

  var models = {
    // Listagem do par nome do modelo
    // e variável associada
    paisModel: paisModel
  };

  // To ensure DRY-ness, register factories in a loop
  // Principio DRY = Dont repeat yourself
  _.each(models, function(value, key) {
    wagner.factory(key, function() {
      return value;
    });
  });

  // console.log(paisModel.nome);
  // console.log(paisModel.estados[0].sigla);

};
