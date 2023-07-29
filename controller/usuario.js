const usuario = require('../models/usuario');
const router = require('../routes/enrutamiento');




//USUARIO
exports.usuario = async(req, res)=>{
    let listausuario = await  usuario.find();
    console.log(listausuario);

    res.render( "listarusuario",{

        "usuario":listausuario,
    })

};
exports.mostrarusuario =(req, res)=>{ //render asocia un documento que contiene lo que va mostarr al usuario  //
    res.render('mostrarusuario');

}

exports.agregarusuario= (req, res) => {
    const usuarios =  new usuario({
        _id : req.body.id,
        nombre: req.body.nombre,
        documento: req.body.documento,
        telefono: req.body.telefono,
        email: req.body.email,
        rol: req.body.rol,

    });

    usuarios.save()
    res.redirect('/api/v1/usuarios');
    console.log('usuarios');

};

exports.eliminar = async (req, res)=>{
    const id = req.params.id
    await cliente.findByIdAndDelete({'_id':id});

    res.redirect('/api/v1/clientes');

};

exports.actualizarcliente = async(req,res) => {

    const filtro = {_id: req.body.idactualizar};

    const update = {nombre: req.body.nombre, telefono: req.body.telefono, ubicacion: req.body.ubicacion,  totalcomprado: req.body.totalcomprado, historicodecompras: req.body.historicodecompras};
    
    await cliente.findOneAndUpdate(filtro, update);


    res.redirect('/api/v1/clientes');
    
};