const mongoose = require('../config/conexion');

const SchemaVentas = new mongoose.Schema({
    _id:{
        type: Object,
        required:true,

    },
    productosventa:{
        type:String,
        required:false,
    },
    subtotalventa:{
        type:Number,
        required:false,
    },
    fechadelaventa:{
        type:Date,
        required:false,
    },
    impuesto:{
        type:Number,
        required:false,
    },
    totalventa:{
        type:Number,
        required:false
    },
    clientequerealizacompra:{
        type:String,
        required:false,
    },
    vendedorquedespachaventa:{
        type:String,
        required:false,
    }

});

const venta = mongoose.model('ventas', SchemaVentas)

module.exports = venta;