const express = require('express');
const rutclien = require ('../controller/clientes')
const rutproduct = require ('../controller/productos')
const rutvende = require('../controller/vendedores')
const rutven = require('../controller/ventas') //se traen los documentos de la carpeta controlle//
const router = express.Router();



//clientes
router.get('/clientes',rutclien.cliente);
router.post('/agregar',rutclien.agregarcliente);
router.get('/mostrarcliente',rutclien.mostrarcliente);
//router.get('/eliminar', rutclien.eliminar);
//router.post('/actualizar',rutclien.actualizarcliente);




//PRODUCTOS
router.get('/productos',rutproduct.producto);
router.post('/agregarproducto',rutproduct.agregarproducto);
router.get('/mostrarproducto',rutproduct.mostrarproducto);


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


module.exports = router;