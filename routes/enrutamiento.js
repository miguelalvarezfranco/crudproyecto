const express = require('express');
const rutclien = require ('../controller/clientes')
const rutproduct = require ('../controller/productos')
const rutvende = require('../controller/vendedores')
const rutven = require('../controller/ventas')
const rutusu= require('../controller/usuarios') //se traen los documentos de la carpeta controlle//
 //se traen los documentos de la carpeta controlle//
const recup = require('../controller/nodemailer')
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
router.get('/eliminarproducto/:id', rutproduct.eliminarproducto);
router.post('/actualizarproducto',rutproduct.actualizarproducto);


//VENDEDORES
router.get('/vendedores',rutvende.vendedor);
router.post('/agregarvendedor',rutvende.agregarvendedor);
router.get('/mostrarvendedores',rutvende.mostrarvendedores);
router.get('/eliminarvendedor/:id', rutvende.eliminarvendedor);
router.post('/actualizarvendedor',rutvende.actualizarvendedor);



//VENTAS
router.get('/ventas',rutven.venta);
router.post('/agregarventa',rutven.agregarventa);
router.get('/mostrarventas',rutven.mostrarventas);
router.get('/eliminarventa/:id', rutven.eliminarventa);
router.post('/actualizarventas',rutven.actualizarventas);


//USUARIOS
router.get('/usuarios',rutusu.usuario);
router.post('/agregarusuario',rutusu.agregarusuario);
router.get('/mostrarusuarios',rutusu.mostrarusuarios);
router.get('/eliminarusuario/:id', rutusu.eliminarusuarios);
router.post('/actualizarusuario',rutusu.actualizarusuarios);




//PAGINA PRINCIPAL
router.get('/paginaprincipal',rutclien.mostrarpagina);



//NODEMAILER

router.get('/recuperar',recup.recuperar);


//DESCARGA EXCEL

router.get('/descargar',)


module.exports = router;