const express = require('express');
const rutclien = require ('../controller/clientes')
const rutproduct = require ('../controller/productos')
const rutvende = require('../controller/vendedores')
const rutven = require('../controller/ventas') //se traen los documentos de la carpeta controlle//
const reutemail = require('../controller/nodemailer')
//const rutExcel = require('../controller/productos.')//
const router = express.Router();




//clientes
router.get('/clientes',rutclien.cliente);
router.post('/agregar',rutclien.agregarcliente);
router.get('/mostrarcliente',rutclien.mostrarcliente);
router.get('/eliminar/:id', rutclien.eliminar);
router.post('/actualizar',rutclien.actualizarcliente);




//PRODUCTOS
router.get('/productos',rutproduct.producto);
router.post('/agregarproducto',rutproduct.agregarproducto);
router.get('/mostrarproducto',rutproduct.mostrarproducto);
//router.get('/eliminarproducto/:idc', rutproduct.eliminarproducto);
//router.post('/actualizarproducto',rutproduct.actualizarproducto);


//VENDEDORES
router.get('/vendedores',rutvende.vendedor);
router.post('/agregarvendedor',rutvende.agregarvendedor);
router.get('/mostrarvendedores',rutvende.mostrarvendedores);



//VENTAS
router.get('/ventas',rutven.venta);
router.post('/agregarventa',rutven.agregarventa);
router.get('/mostrarventas',rutven.mostrarventas);



//PAGINA PRINCIPAL
router.get('/paginaprincipal',rutclien.mostrarpagina);


//NODEMAILER

router.get('/enviarcorreo',reutemail.enviaremail);


//DESCARGA EXCEL

router.get('/descargar', )


module.exports = router;