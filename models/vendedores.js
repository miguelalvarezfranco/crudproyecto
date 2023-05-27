const mongoose = require('../config/conexion');

const Schemaproductos= new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        default:"no registro"
    },
    documento:{
        type:String,
        required:true,
        

    },
    ventasdepachadas:{
        type:String,
        required:true,

    },


});