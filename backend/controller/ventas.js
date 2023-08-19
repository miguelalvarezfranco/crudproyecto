const { Mongoose, default: mongoose } = require("mongoose");
const ventas = require("../models/ventas");
const router = require("../routes/enrutamiento.js");

exports.venta = async (req, res) => {
  const listaventa = await ventas.find();
  console.log(listaventa);

  res.render("listarventas", {

    venta: listaventa
  });
};

exports.mostrarventas = (req, res) => { // render asocia un documento que contiene lo que va mostarr al usuario  //
  res.render("mostrarventas");
};

exports.agregarventa = (req, res) => {
  const venta = new ventas({
    productosventa: req.body.productosventa,
    subtotalventa: req.body.subtotalventa,
    fechadelaventa: req.body.fechadelaventa,
    impuesto: req.body.impuesto,
    totalventa: req.body.totalventa,
    clientequerealizacompra: req.body.clientenquerealizalacompra,
    vendedorquedespachaventa: req.body.vendedorquedespachalaventa

  });

  venta.save();
  res.redirect("/api/v1/ventas");
  console.log("ventas");
};

exports.eliminarventa = async (req, res) => {
  const id = req.params.id;
  await ventas.findByIdAndDelete({ _id: id });
  res.redirect("/api/v1/ventas");
};

exports.actualizarventas = async (req, res) => {
  const nuevo = { _id: new mongoose.Types.ObjectId(), impuesto: req.body.impuesto, productosventa: req.body.productosventa, subtotalventa: req.body.subtotalventa, fechadelaventa: req.body.fechadelaventa, totalventa: req.body.totalventa, clientequerealizacompra: req.body.clientenquerealizalacompra, vendedorquedespachaventa: req.body.vendedorquedespachalaventa };
  await ventas.findOneAndRemove({ impuesto: req.body.impuesto });

  await ventas.insertMany(nuevo);

  res.redirect("/api/v1/ventas");
};
