const mongoose = require('../config/conexion');

const SchemaProducto = new mongoose.Schema({
    
    referencia:{
        type:String,
        required:true,
    },
    nombre:{
        type:String,
        required:true,
    },
    descripcion:{
        type:String,
        required:true,
    },
    precio:{
        type:Number,
        required:true,
    },
    stock:{
        type:String,
    },
    habilitado:{
        type:String,
    }, 
    imagen:{
        type:String
    }


});

const producto = mongoose.model('productos', SchemaProducto)

module.exports = producto;


