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
        "centro":[longitud, latitud],
        "niveldezoom":Number
    },
    totalComprado:{
        type:String,
        required:true,
    },
    histoticoDeCompras:{
        type:String,
        required:true,
    }

});