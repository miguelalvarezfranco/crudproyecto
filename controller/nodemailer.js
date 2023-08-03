const nodemailer = require('nodemailer');

exports.recuperar = () => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',  //Se define que servicio de correo se va a utilizar para enviar el mensaje
        auth: {
            user: 'maalvarez7441@misena.edu.co', //se pone el correo que va a enviar el mensaje
            pass: 'cofcrgzcirlxsdtv' //Contraseña de aplicación generada
        }
    });

    let mailOptions = {
        from: 'maalavrez7441@misena.edu.co', //Correo que va a enviar el mensaje
        to: 'maalvarez7441@misena.edu.co', //correo que lo va a recibir
        subject: 'recuperar Contraseña', //asunto del correo
        text: 'su nueva contraseña es 1234' //texto del correo
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    }); 
}