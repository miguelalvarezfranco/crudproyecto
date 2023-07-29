const { Mongoose, default: mongoose } = require('mongoose');
const usuario = require('../models/usuarios');
const usuarios = require('../models/usuarios')

const router = require('../routes/enrutamiento.js');




//USUARIO
exports.usuario = async(req, res)=>{
    let listausuario = await  usuarios.find();
    console.log(listausuario);

    res.render( "listarusuarios",{

        "usuario":listausuario,
    })

};
exports.mostrarusuarios =(req, res)=>{ //render asocia un documento que contiene lo que va mostarr al usuario  //
    res.render('mostrarusuarios');

}

exports.agregarusuario= (req, res) => {
    const usuario =  new usuarios({
        _id : req.body.id,
        nombre: req.body.nombre,
        documento: req.body.documento,
        telefono: req.body.telefono,
        email: req.body.email,
        rol: req.body.rol,

    });

    usuario.save()
    res.redirect('/api/v1/usuarios');
    console.log('usuarios')


};

exports.eliminarusuarios = async (req, res)=>{
    const id = req.params.id
    await usuarios.findByIdAndDelete({'_id':id});

    res.redirect('/api/v1/usuarios');

};

exports.actualizarusuarios = async(req,res) => {

    const filtro = {_id: req.body.idactualizar};

    const update = {nombre: req.body.nombre, documento: req.body.telefono, telefono: req.body.telefono,  email: req.body.email, rol: req.body.rol};
    
    await usuario.findOneAndUpdate(filtro, update);
    
    res.redirect('/api/v1/usuarios');
    
};