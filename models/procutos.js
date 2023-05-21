const mongoose = require('../config/conexion');

const SchemaProductos = new mongoose.Schema({
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
    imagen:{
        type:Image
    },
    habilitado:{
        type:String,
    }

})

const productos = mongoose.model('productos', SchemaProductos)

module.exports = productos;


