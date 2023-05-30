const vendedores = require('../models/vendedores')
const router = require('../routes/enrutamiento.js');

exports.vendedor = async(req, res)=>{
    let listavendedor = await  vendedores.find();
    console.log(listavendedor);

    res.render( "listarvendedores",{

        "vendedor":listavendedor,
    })

};

exports.mostrarvendedores =(req, res)=>{ //render asocia un documento que contiene lo que va mostarr al usuario  //
    res.render('mostrarvendedores');

}

exports.agregarvendedor = (req, res) => {
    const vendedor =  new vendedores({
        nombre: req.body.nombre,
        documento: req.body.documento,
        ventasdespachadas: req.body.ventasdespachadas,

    });

    vendedor.save()
    res.redirect('/api/v1/vendedores');
    console.log('vendedores');
}