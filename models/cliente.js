const mongoose = require('../config/conexion');

const SchemaCliente = new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        default:"no registro"
    },
    telefono:{
        type:Number,
    

    },
    ubicacion:{
    
            centro:{
                type:Array,
            },
            zoom:{
                type:Number
            }
    
    },
    totalComprado:{
        type:Number,
        
    },
    histoticoDeCompras:{
        type:Number,
        
    }

})

const cliente = mongoose.model('cliente', SchemaCliente)

module.exports = cliente;