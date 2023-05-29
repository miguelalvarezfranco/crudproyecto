const express = require('express');
const rutclien = require ('../controller/clientes')
const rutproduct = require ('../controller/productos')
const rutvende = require('../controller/vendedores') //se traen los documentos de la carpeta controlle//
 //se traen los documentos de la carpeta controlle//

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
router.get('/agregarvendedor',rutvende.vendedor);
router.get('/mostrarvendedor',rutvende.mostrarvendedor);


//PAGINA PRINCIPAL
router.get('/paginaprincipal',rutclien.mostrarpagina);

module.exports = router;