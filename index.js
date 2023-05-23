const express = require('express');
const app= express();
const PORT = process.env.PORT || 2000



app.listen(PORT, ()=>{
    console.log(`el servidro esta en linea ...!! ${PORT}`);
})  










