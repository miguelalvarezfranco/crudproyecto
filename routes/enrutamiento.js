const express = require('express');
const rutclien = require ('../controller/clientes') //se traen los documentos de la carpeta controlle//

const router = express.Router();

router.get('/clientes',rutclien.cliente);
router.post('/agregar',rutclien.agregarcliente);
router.get('/mostrarcliente',rutclien.mostrarcliente);
router.get('/eliminar', rutclien.eliminar);
router.post('/actualizar',rutclien.actualizarcliente);
router.get('/productos',rutclien.producto);
router.post('/agregar',rutclien.agregarproducto);
router.get('/mostrarproducto',rutclien.mostrarproducto);

router.get('/paginaprincipal',rutclien.mostrarpagina);





module.exports = router;