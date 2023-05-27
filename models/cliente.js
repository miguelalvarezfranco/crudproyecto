const mongoose = require('../config/conexion');

const SchemaCliente = new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        default:"no registro",
    },
    telefono:{
        type:Number,
        required:true,


    },
    ubicacion:{
        type:String,
        required:true,
    
    },
    centro:{
        type:String,
        required:true,
    },
    totalcomprado:{
        type:Number,
        required:true,
    },
    historicodecompras:{
        type:String,
        required:false,
    },

});

const cliente= mongoose.model('cliente', SchemaCliente);

module.exports = cliente;