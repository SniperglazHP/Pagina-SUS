// models/user.js
const mongoose = require('mongoose');
const MateriasSchema = new mongoose.Schema({
  name: { type: String, required: true, description:'Tipo De Platillo' },
  description:{type: String, description:'Nombre del Platillo' },
  cred: { type: Number, required: true, description:'Precio' },
  hp: { type: Number, description:'Descripcion' },
  ht: { type: Date, description:'Extras' },
});

module.exports = mongoose.model('Menu', MateriasSchema);
