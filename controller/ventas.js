const ventas = require('../models/ventas')
const router = require('../routes/enrutamiento.js');

exports.venta = async(req, res)=>{
    let listaventa = await  ventas.find();
    console.log(listaventa);

    res.render( "listarventas",{

        "venta":listaventa,
    })

};

exports.mostrarventas =(req, res)=>{ //render asocia un documento que contiene lo que va mostarr al usuario  //
    res.render('mostrarventas');

}

exports.agregarventa = (req, res) => {
    const venta =  new ventas({
        productosventa: req.body.productosventa,
        subtotalventa: req.body.subtotalventa,
        fechadelaventa: req.body.fechadelaventa,
        impuesto: req.body.impuesto,
        totalventa: req.body.totalventa,
        clientequerealizacompra: req.body.clientequerealizacompra,
        vendedorquedespachaventa: req.body.vendedorquedespachaventa,
        
    });

    venta.save()
    res.redirect('/api/v1/ventas');
    console.log('ventas');
}