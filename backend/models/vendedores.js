const mongoose = require("../config/conexion");

const Schemavendedores = new mongoose.Schema({

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
    type: Number,
    required: false
  }

});

const vendedor = mongoose.model("vendedores", Schemavendedores);

module.exports = vendedor;
