const usuario = require("../models/usuarios");
const Usuarios = require("../models/usuarios");

// USUARIO
exports.usuario = async (req, res) => {
  const listausuario = await Usuarios.find();
  console.log(listausuario);

  res.render("listarusuarios", {

    usuario: listausuario
  });
};
exports.mostrarusuarios = (req, res) => { // render asocia un documento que contiene lo que va mostarr al usuario  //
  res.render("mostrarusuarios");
};

exports.agregarusuario = (req, res) => {
  const usuario = new Usuarios({
    _id: req.body.id,
    nombre: req.body.nombre,
    email: req.body.email,
    password: req.body.password,
    rol: req.body.rol,
    habilitado: req.body.habilitado

  });

  usuario.save();
  res.redirect("/api/v1/usuarios");
  console.log("usuarios");
};

exports.eliminarusuarios = async (req, res) => {
  const id = req.params.id;
  await Usuarios.findByIdAndDelete({ _id: id });

  res.redirect("/api/v1/usuarios");
};

exports.actualizarusuarios = async (req, res) => {
  const filtro = { _id: req.body.idactualizar };

  const update = { nombre: req.body.nombre, email: req.body.email, password: req.body.password, rol: req.body.rol, habilitado: req.body.habilitado };

  await usuario.findOneAndUpdate(filtro, update);

  res.redirect("/api/v1/usuarios");
};

exports.infoUsuario = async (req, res) => {
  const infoUsu = await Usuarios.findOne({ email: req.body.Correo });

  if (req.body.email === infoUsu.password) {
    res.redirect("paginaprincipal");
  } else {
    console.log("el usuario no existe");
  }
};
