const mongoose = require("../config/conexion");

const Schemavendedores = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
    min: 0,
    max: 1000
  },
  nombre: {
    type: String,
    required: true,
    default: "no registro"
  },
  documento: {
    type: Number,
    required: true

  },
  ventasdespachadas: {
    type: Number
  }

});

const vendedor = mongoose.model("vendedores", Schemavendedores);

module.exports = vendedor;
