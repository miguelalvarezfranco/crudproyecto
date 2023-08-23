const Cliente = require("../models/cliente");
const productos = require("../models/productos");
const usuario = require("../models/usuarios");

// CLIENTES
exports.cliente = async (req, res) => {
  const listacliente = await Cliente.find();
  console.log(listacliente);

  res.render("listarclientes", {

    cliente: listacliente
  });
};
exports.mostrarcliente = (req, res) => { // render asocia un documento que contiene lo que va mostarr al usuario  //
  res.render("mostrarcliente");
};

exports.mostrarpagina = async (req, res) => { // render asocia un documento que contiene lo que va mostarr al usuario  //
  const producto = await productos.find();
  res.render("paginaprincipal", { producto });
};

exports.agregarcliente = (req, res) => {
  const clientes = new Cliente({
    _id: req.body.id,
    nombre: req.body.nombre,
    telefono: req.body.telefono,
    email: req.body.Correo,
    password: req.body.password,
    ubicacion: req.body.ubicacion,
    centro: req.body.centro,
    totalComprado: req.body.totalcomprado,
    historicoDeCompras: req.body.historicodecompras

  });

  clientes.save();

  const usuarios = new usuario({
      nombre: clientes.nombre,
      email: clientes.email,
      password: clientes.password,
      rol: 'clientes',
      habilitado: true,
  });

  usuarios.save();

  res.redirect("/clientes");
  console.log("clientes");
};

exports.eliminar = async (req, res) => {
  const id = req.params.id;
  await Cliente.findByIdAndDelete({ _id: id });

  res.redirect("/clientes");
};

exports.actualizarcliente = async (req, res) => {
  const filtro = { _id: req.body.idactualizar };

  const update = { nombre: req.body.nombre, telefono: req.body.telefono, email: req.body.Correo, password: req.body.password, ubicacion: req.body.ubicacion, totalcomprado: req.body.totalcomprado, historicodecompras: req.body.historicodecompras };

  await Cliente.findOneAndUpdate(filtro, update);

  res.redirect("/clientes");
};

// PRODUCTOS
