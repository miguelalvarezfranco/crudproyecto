const mongoose = require('../config/conexion');

const SchemaUsuario = new mongoose.Schema({
    
    nombre:{
        type:String,
        required:true,
    
    },
    documento:{
        type:Number,
        required:true,
    },
    habilitado:{
        type:String,
        required:false
    
    },
    email:{
        type:String,
        required:true,
    },

    rol:{
        type:String,
        required:true,
    }


})

const usuario= mongoose.model('usuarios', SchemaUsuario)

module.exports = usuario;