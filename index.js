const express = require('express');
const app= express();
const morgan = require('morgan');  //para gestionar las request procesadas//
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 2000
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'));
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


const Mrouter =require('./routes/enrutamiento');
app.use('/api/v1',Mrouter);


app.listen(PORT, ()=>{
    console.log(`el servidro esta en linea ...!! ${PORT}`);
})  










