

class carrito{
    Añadirproducto(e){
        e.preventDefault();
        if(e.target.classlist.contains('Agregar-carrito')){
            const productos = e.target.parentElement.parentElement;
            this.leerDatos(productos);
        }
    }
}


