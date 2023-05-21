const mongoose = require('../config/conexion');

const SchemaCliente = new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        default:"no registro"
    },
    telefono:{
        type:Number,
        required:true,
        min:0,
        maximo:1000

    },
    ubicacion:{
        type:String,
        required:true,

    },
    longitud:{
        type:String,
        required:true,
    },
    latitud:{
        type:String,
        required:true,
    },
    nivelZoom:{
        type:String,
        required:true,
    },
    totalComprado:{
        type:String,
        required:true,
    },
    histoticoDeCompras:{
        type:String,
        required:true,
    }

})

const cliente = mongoose.model('cliente', SchemaCliente)

module.exports = cliente;