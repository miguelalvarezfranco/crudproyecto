const cliente = require('../models/cliente');
const router = require('../routes/enrutamiento.js');


//CLIENTES
exports.cliente = async(req, res)=>{
    let listacliente = await  cliente.find();
    console.log(listacliente);

    res.render( "listarclientes",{

        "cliente":listacliente,
    })

};
exports.mostrarcliente =(req, res)=>{ //render asocia un documento que contiene lo que va mostarr al usuario  //
    res.render('mostrarcliente');

}

exports.mostrarpagina =(req, res)=>{ //render asocia un documento que contiene lo que va mostarr al usuario  //
    res.render('paginaprincipal');

}



exports.agregarcliente= (req, res) => {
    const clientes =  new cliente({
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        ubicacion: req.body.ubicacion,
        centro: req.body.centro,
        totalcomprado: req.body.totalcomprado,
        historicodecompras: req.body.histoticoDeCompras, 

    });

    clientes.save()
    res.redirect('/api/v1/clientes');
    console.log('clientes');

};

exports.eliminar = async (req, res)=>{
    const nombre = req.params.nombre
    await cliente.findByIdAndDelete({'nombre':nombre});

    res.redirect('/api/v1/clientes');

};

exports.actualizarcliente = async(req,res) => {
    const filtro = {nombre: req.body.nombreactualizar};
    const update = {nombre: req.body.nombre, telefono: req.body.telefono, ubicacion: req.body.ubicacion, centro: req.body.centro, totalcomprado: req.body.totalcomprado, historicodecompras: req.body.historicodecompras};


    await cliente.findOneAndUpdate(filtro, update);

    res.redirect('/api/v1/clientes');
    
};






 //PRODUCTOS


