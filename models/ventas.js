const mongoose = require('../config/conexion');

const SchemaVentas = new mongoose.Schema({
    productosventa:{
        type:String,
        required:true,
    },
    subtotalventa:{
        type:Number,
        required:true,
    },
    fechadelaventa:{
        type:Date,
        required:true,
    },
    impuesto:{
        type:Number,
        required:true,
    },
    totalventa:{
        type:Number,
        required:true,
    },
    clientequerealizacompra:{
        type:String,
        required:true,
    },
    vendedorquedespachaventa:{
        type:String,
        required:true,
    }

});

const ventas = mongoose.model('ventas', SchemaVentas)

module.exports = ventas;