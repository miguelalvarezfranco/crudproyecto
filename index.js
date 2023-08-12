const express = require('express');
const app= express();
const morgan = require('morgan');  //para gestionar las request procesadas//
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 2000
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'./frontend/views'));
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 



app.get('/carrito', (req, res) => {
    res.render('carrito')
})

app.get('/grafica', (req, res) => {
    res.render('grafica')
})

app.get('/datatable', (req, res) => {
    res.render('datatable')
})




/*app.post('/descargarexcel')*/

const Mirouter =require('./backend/routes/enrutamiento');
app.use('/api/v1',Mirouter);



app.listen(PORT, ()=>{
    console.log(`el servidor esta en linea ...!! ${PORT}`);
})















