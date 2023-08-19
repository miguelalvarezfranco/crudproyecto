const { Mongoose, default: mongoose } = require("mongoose");
const vendedores = require("../models/vendedores");
const router = require("../routes/enrutamiento.js");

exports.vendedor = async (req, res) => {
  const listavendedor = await vendedores.find();
  console.log(listavendedor);

  res.render("listarvendedores", {

    vendedor: listavendedor
  });
};

exports.mostrarvendedores = (req, res) => { // render asocia un documento que contiene lo que va mostarr al usuario  //
  res.render("mostrarvendedores");
};

exports.agregarvendedor = (req, res) => {
  const vendedor = new vendedores({
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
  await vendedores.findByIdAndDelete({ _id: id });
  res.redirect("/api/v1/vendedores");
};

exports.actualizarvendedor = async (req, res) => {
  const nuevo = { _id: new mongoose.Types.ObjectId(), ventasdespachadas: req.body.ventasdespachadas, nombre: req.body.nombre, documento: req.body.documento };
  await vendedores.findOneAndRemove({ ventasdespachadas: req.body.ventasdespachadas });

  await vendedores.insertMany(nuevo);

  res.redirect("/api/v1/vendedores");
};
