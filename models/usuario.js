const mongoose = require('../config/conexion');

const SchemaUsuario = new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
    
    },
    telefono:{
        type:Number,
        required:true,
    
    },
    email:{
        type:email,
        required:true,
    },

    rol:{
        type:String,
        required:true,
    }


})

const cliente = mongoose.model('cliente', SchemaCliente)

module.exports = cliente;