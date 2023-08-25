
const Usuarios = require("../models/usuarios");
const productos = require("../models/productos");

// USUARIO
exports.usuario = async (req, res) => {
  const listausuario = await Usuarios.find();
  console.log(listausuario);

  res.render("listarusuarios", {
    usuario: listausuario,
  });
};
exports.mostrarusuarios = (req, res) => {
  // render asocia un documento que contiene lo que va mostarr al usuario  //
  res.render("mostrarusuarios");
};

exports.agregarusuario = (req, res) => {
  const usuario = new Usuarios({
    _id: req.body.id,
    nombre: req.body.nombre,
    email: req.body.email,
    password: req.body.password,
    rol: req.body.rol,
    habilitado: req.body.habilitado,
  });

  usuario.save();
  res.redirect("/usuarios");
  console.log("usuarios");
};

exports.eliminarusuarios = async (req, res) => {
  const id = req.params.id;
  await Usuarios.findByIdAndDelete({ _id: id });

  res.redirect("/usuarios");
};

exports.actualizarusuarios = async (req, res) => {
  const filtro = { _id: req.body.idactualizar };
  const update = {
    nombre: req.body.nombre,
    email: req.body.email,
    password: req.body.password,
    rol: req.body.rol,
    habilitado: req.body.habilitado,
  };

  await usuario.findOneAndUpdate(filtro, update);

res.redirect("/usuarios");

};

exports.infoUsuario = async (req, res) => {
const infoUsu = await Usuarios.findOne({ email: req.body.Correo });

const catalogo = await productos.find();

console.log(infoUsu);

const contraUsuario = req.body.password

if(infoUsu.password === contraUsuario){
  console.log(true);
}

if(infoUsu.rol === 'vendedor' ){
  res.render("inicio");
}else if(infoUsu.rol === 'clientes'){
  res.render('paginaprincipal' ,{producto: catalogo});
}

};
