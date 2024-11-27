// models/user.js
const mongoose = require('mongoose');
const ProfesorSchema = new mongoose.Schema({
  nip: { type: String, required: true, description:'Rango' },
  name: { type: String, required: true, description:'Nombre' },
  email: { type: String, required: true, unique: true, description:'Telefono' },
  curp: { type: String, description:'Nip' },
  ingres_date: { type: Date, description:'Fecha de Ingreso' },
  grade: { type: String, enum: ['gerente', 'jefe', 'intendente'], description:'Tipo' },
  profileImage: {
    type: String, // Almacena la ruta de la imagen
    default: 'https://via.placeholder.com/100', // Puedes tener una imagen predeterminada
    description:'Imagen de perfil'
  },
});

module.exports = mongoose.model('gerentes', ProfesorSchema);
