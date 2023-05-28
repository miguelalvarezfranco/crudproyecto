
const productos = require('../models/productos')
const router = require('../routes/enrutamiento.js');



exports.producto = async(req, res)=>{
    let listaproducto = await  productos.find();
    console.log(listaproducto);

    res.render( "listarproductos",{

        "producto":listaproducto,
    })

};
exports.mostrarproducto =(req, res)=>{ //render asocia un documento que contiene lo que va mostarr al usuario  //
    res.render('mostrarproducto');

}

exports.agregarproducto= (req, res) => {
    const producto =  new productos({
        referencia: req.body.referencia,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        stock: req.body.stock,
        imagen: req.body.imagen,
        habilitado: req.body.habilitado, 



    });

    producto.save()
    res.redirect('/api/v1/productos');
    console.log('productos');

};