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
  const nuevo = { _id: new Mongoose.Types.ObjectId(), ventasdespachadas: req.body.ventasdespachadas, nombre: req.body.nombre, documento: req.body.documento };
  await Vendedores.findOneAndRemove({ ventasdespachadas: req.body.ventasdespachadas });

  await Vendedores.insertMany(nuevo);

  res.redirect("/api/v1/vendedores");
};
