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
    _id: req.body.id,
    nombre: req.body.nombre,
    documento: req.body.documento,
    ventasdespachadas: req.body.ventasdespachadas
  });

  vendedor.save();
  res.redirect("vendedores");
  // console.log('vendedores');
};

exports.eliminarvendedor = async (req, res) => {
  const id = req.params.id;
  await Vendedores.findByIdAndDelete({ _id: id });
  res.redirect("vendedores");
};

exports.actualizarvendedor = async (req, res) => {
  const filtro = { _id: req.body.idactualizar };

  const update = { ventasdespachadas: req.body.ventasdespachadas, nombre: req.body.nombre, documento: req.body.documento };

  await Vendedores.findOneAndRemove(filtro, update);

  res.redirect("vendedores");
};
