const mongoose = require('../config/conexion');

const SchemaCliente = new mongoose.Schema({
    _id:{
        type: Number,
        required:true,
        min:0,
        max:1000
    
    },
    nombre:{
        type:String,
        required:true,
    

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