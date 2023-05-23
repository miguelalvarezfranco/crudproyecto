const mongoose = require('../config/conexion');

const Schemaproductos= new mongoose.Schema({
    referencia:{
        type:String,
        required:true,
        
    },
    nombre:{
        type:String,
        required:true,
        default:"no registro"

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
        required:true,
    },
    imagen:{
        type:imagen,
        required:true,
    },
    habilitado:{
        type:String,
        required:true,
    },
  

});