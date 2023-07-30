const mongoose = require('../config/conexion');

const SchemaUsuario = new mongoose.Schema({
    
    nombre:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:Number,
        required:true,
    },
    rol:{
        type:String,
        required:true,
    },
    habilitado:{
        type:String,
        required:false
    
    },


})

const usuario= mongoose.model('usuarios', SchemaUsuario)

module.exports = usuario;