const mongoose = require('../config/conexion');

const Schemaventas= new mongoose.Schema({
    productosdelaventa:{
        type:String,
        required:true,
        
    },
    subtotaldelaventa:{
        type:String,
        required:true,
        default:"no registro"

    },
    fechadelaventa:{
        type:String,
        required:true,

    },
    impuesto:{
        type:Number,
        required:true,
    },
    totaldelaventa:{
        type:String,
        required:true,
    },
    clientequerealizalacompra:{
        type:imagen,
        required:true,
    },
    habilitado:{
        type:String,
        required:true,
    },
  

});