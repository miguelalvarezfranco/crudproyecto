const { Mongoose } = require("mongoose");
const Vendedores = require("../models/vendedores");

exports.vendedor = async (req, res) => {
  const listavendedor = await Vendedores.find();
  console.log(listavendedor);

  res.render("listarvendedores", {

    vendedor: listavendedor
  });
};

exports.mostrarvendedores = (req, res) => { // render asocia un documento que contiene lo que va mostarr al usuario  //
  res.render("mostrarvendedores");
};

exports.agregarvendedor = (req, res) => {
  const vendedor = new Vendedores({
    nombre: req.body.nombre,
    documento: req.body.documento,
    ventasdespachadas: req.body.ventasdespachadas

  });

  vendedor.save();
  res.redirect("/api/v1/vendedores");
  // console.log('vendedores');
};

exports.eliminarvendedor = async (req, res) => {
  const id = req.params.id;
  await Vendedores.findByIdAndDelete({ _id: id });
  res.redirect("/api/v1/vendedores");
};

exports.actualizarvendedor = async (req, res) => {
  const filtro = { _id: req.body.idactualizar };

  const update = { ventasdespachadas: req.body.ventasdespachadas, nombre: req.body.nombre, documento: req.body.documento };
  await Vendedores.findOneAndRemove(filtro, update);

  res.redirect("/api/v1/vendedores");
};

// exports.actualizarcliente = async (req, res) => {
//   const filtro = { _id: req.body.idactualizar };

//   const update = { nombre: req.body.nombre, telefono: req.body.telefono, ubicacion: req.body.ubicacion, totalcomprado: req.body.totalcomprado, historicodecompras: req.body.historicodecompras };

//   await Cliente.findOneAndUpdate(filtro, update);

//   res.redirect("/api/v1/clientes");
// };