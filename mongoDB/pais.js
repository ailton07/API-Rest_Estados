var mongoose = require('mongoose');

var paisSchema = {
  nome: {
    type: String,
    required: true
  },
  estados: [{
    sigla: {
      type: String,
      required: true
    },
    nome: {
      type: String,
      required: true
    },
    cidades: [{
      type: String,
      required: true
    }]
  }]
};

module.exports = new mongoose.Schema(paisSchema);
module.exports.categorySchema = paisSchema;
