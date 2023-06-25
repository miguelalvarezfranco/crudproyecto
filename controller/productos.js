
const { Mongoose, default: mongoose } = require('mongoose');
const producto = require('../models/productos');
const productos = require('../models/productos')
const router = require('../routes/enrutamiento');



exports.producto = async(req, res)=>{
    let listaproducto = await  productos.find({});
   // console.log(listaproducto);

    res.render( "listarproductos",{

        "producto":listaproducto, 
    })

};
exports.mostrarproducto =(req, res)=>{ //render asocia un documento que contiene lo que va mostarr al usuario  //
    res.render('mostrarproducto');

}

exports.agregarproducto= (req, res) => {
    const producto =  new productos({
        _id : req.body.id,
        referencia: req.body.referencia,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        stock: req.body.stock,
        imagen: req.body.imagen,
        habilitado: req.body.habilitado, 

    });

    producto.save()
    res.redirect('/api/v1/productos');
    //console.log('productos');

};

exports.eliminarproducto = async (req, res)=>{
    const id= req.params.id
    await productos.findByIdAndDelete({'_id':id});

    res.redirect('/api/v1/productos');

};

exports.actualizarproducto = async(req,res) => {

    const nuevo = {_id: new mongoose.Types.ObjectId(), referencia: req.body.referencia, nombre: req.body.nombre, descripcion: req.body.descripcion,  precio: req.body.precio, stock: req.body.stock, habilitado: req.body.habilitado, imagen: req.body.imagen};
    await productos.findOneAndRemove({referencia: req.body.referencia});

    await productos.insertMany(nuevo);
    
    res.redirect('/api/v1/productos');
    
};


// GENERAR TABLA EXCEL DE LOS DATOS SOBRE LOS PRODUCTOS ----------------------------------------



/*const xl = require('excel4node');
const path = require('path')
const fs = require('fs');


exports.descargarExcel = async(req, res) => {
    //configuramos el excel4node

    //creamos un nuevo documento
    const wb = new xl.Workbook();
    //definimos el nombre con el cual se descargara el archivo 
    const nombreArchivo = 'TablaProductos';
    //se define el nombre 
    var ws = wb.addWorksheet(nombreArchivo);

    //definimos estilos
    const columnaEstilo = wb.createStyle({
        font: {
            name: 'Arial',
            color: '#AB2002',
            size: 12,
            bold: true,
        }
    });

    const contenidoEstilo = wb.createStyle({
        font: {
            name: 'Arial',
            color: '#565656',
            size: 11,
        }
    });

    //definimos el nombre de las columnas
    ws.cell(1, 1).string('referencia').style(columnaEstilo);
    ws.cell(1, 2).string('nombre').style(columnaEstilo);
    ws.cell(1, 3).string('descripcion').style(columnaEstilo);
    ws.cell(1, 4).string('precio').style(columnaEstilo);

    //llamamos a la base de datos
    const listaProductos = await productos.find()

    // definimos un contador que empiece en 2 
    let fila = 2;

    //agregamos el contenido de la base de datos con un for o un forEach para llamar todos los datos 
    
    listaProductos.forEach(datoProducto => {
    ws.cell(fila, 1).string(datoProducto.referencia).style(contenidoEstilo);
    ws.cell(fila, 2).string(datoProducto.nombre).style(contenidoEstilo);
    ws.cell(fila, 3).string(datoProducto.descripcion).style(contenidoEstilo);
    ws.cell(fila, 4).number(datoProducto.precio).style(contenidoEstilo);
    
    fila = fila +1;
    });

    const rutExcel = path.join(__dirname,'excel'+ nombreArchivo +'.xlsx');

    //escribir y guardar en el documento 
    //se le inclulle la ruta y una funcion 
    wb.write(rutExcel, function(err,stars){

        //capturamos y mostramos en caso de un error
        if(err)console.log(err);
        //creamos una funcion que descargue el archibo y lo elimine 
        else{

            //guardamos el documento en la carpeta para excel para poder descargarla en el pc
                res.download(rutExcel);
                
                console.log('documento descargado correctamente');

                //Eliminamos el documento de la carpeta excel
                fs.rm(rutExcel, function(err){
                    if(err)console.log(err);
                    else console.log('Archivo descargado y borrado del servidor correctamente');
                });
                
        }
    });

    
}*/