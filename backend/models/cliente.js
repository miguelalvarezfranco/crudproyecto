const mongoose = require("../config/conexion");

const SchemaCliente = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
    min: 0,
    max: 1000

  },
  nombre: {
    type: String,
    required: true

  },
  telefono: {
    type: Number

  },
  ubicacion: {
    type:String,

  },
  totalComprado: {
    type: Number,
    default :0,

  },
  historicoDeCompras: {
    type: Number,
    default :0,

  },
  email:{
    type:String
  },
  password:{
    type:String
  }

});

const cliente = mongoose.model("cliente", SchemaCliente);

module.exports = cliente;
