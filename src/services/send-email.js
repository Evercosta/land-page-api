'use strict';

var nodemailer = require('nodemailer');
// const dotenv = require('dotenv');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

var transporte = nodemailer.createTransport({
    // service: 'Gmail', // Como mencionei, vamos usar o Gmail
    host: 'smtp.gmail.com',
    port: 465,
    ignoreTLS: false,
    secure: false,
    auth: {
        user: process.env.SEND_EMAIL_USER, // Basta dizer qual o nosso usuário
        pass: process.env.SEND_EMAIL_PASS // e a senha da nossa conta
    } 
});
exports.send = async(to, subject, html) => {    
    // Após configurar o transporte chegou a hora de criar um e-mail
    // para enviarmos, para isso basta criar um objeto com algumas configurações
    var email = {
        from: process.env.SEND_EMAIL_USER, // Quem enviou este e-mail
        to, // Quem receberá
        subject,  // Um assunto ♥ 
        html // O conteúdo do e-mail
    };

    // Pronto, tudo em mãos, basta informar para o transporte
    // que desejamos enviar este e-mail
    transporte.sendMail(email, function(err, info){
        if(err)
            throw err; // Oops, algo de errado aconteceu.

        console.log('Email enviado! Leia as informações adicionais: ', info);
    });
}