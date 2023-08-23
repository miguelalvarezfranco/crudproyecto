const { mongoose } = require("mongoose");
const Ventas = require("../models/ventas");

exports.venta = async (req, res) => {
  const listaventa = await Ventas.find();
  console.log(listaventa);

  res.render("listarventas", {

    venta: listaventa
  });
};

exports.mostrarventas = (req, res) => { // render asocia un documento que contiene lo que va mostarr al usuario  //
  res.render("mostrarventas");
};

exports.agregarventa = (req, res) => {
  const venta = new Ventas({
    productosventa: req.body.productosventa,
    subtotalventa: req.body.subtotalventa,
    fechadelaventa: req.body.fechadelaventa,
    impuesto: req.body.impuesto,
    totalventa: req.body.totalventa,
    clientequerealizacompra: req.body.clientenquerealizalacompra,
    vendedorquedespachaventa: req.body.vendedorquedespachalaventa

  });

  venta.save();
  res.redirect("/ventas");
  console.log("ventas");
};

exports.eliminarventa = async (req, res) => {
  const id = req.params.id;
  await Ventas.findByIdAndDelete({ _id: id });
  res.redirect("/ventas");
};

exports.actualizarventas = async (req, res) => {
  const nuevo = { _id: new mongoose.Types.ObjectId(), impuesto: req.body.impuesto, productosventa: req.body.productosventa, subtotalventa: req.body.subtotalventa, fechadelaventa: req.body.fechadelaventa, totalventa: req.body.totalventa, clientequerealizacompra: req.body.clientenquerealizalacompra, vendedorquedespachaventa: req.body.vendedorquedespachalaventa };
  await Ventas.findOneAndRemove({ impuesto: req.body.impuesto });

  await Ventas.insertMany(nuevo);

  res.redirect("/ventas");
};
