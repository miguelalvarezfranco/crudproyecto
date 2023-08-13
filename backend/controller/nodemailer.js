const nodemailer = require('nodemailer');

const usuarios = require('../models/usuarios');


exports.recuperar = async (req, res) => {

    let user =  await usuarios.findOne({email: req.body.correo});

    console.log(user);

    if(user){
        let transporter = nodemailer.createTransport({
            service: 'gmail',  //Se define que servicio de correo se va a utilizar para enviar el mensaje
            auth: {
                user: 'maalvarez7441@misena.edu.co', //se pone el correo que va a enviar el mensaje
                pass: 'cofcrgzcirlxsdtv' //Contraseña de aplicación generada
            }
        });
    
        let mailOptions = {
            from: 'maalvarez7441@misena.edu.co', //Correo que va a enviar el mensaje
            to: req.body.correo, //correo que lo va a recibir
            subject: 'recuperar Contraseña', //asunto del correo
            text: user.password //texto del correo /
        };
    
    
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        }); 
    } else{
        console.log('Este usuario no existe');
    }
    
}

exports.cargarc = (req, res) => {
    res.render('recuperarC');
}
