'use strict';

var nodemailer = require('nodemailer');
var transporte = nodemailer.createTransport({
    service: 'Gmail', // Como mencionei, vamos usar o Gmail
    auth: {
        user: 'customtrade.suporte@gmail.com', // Basta dizer qual o nosso usuário
        pass: 'Angular9'             // e a senha da nossa conta
    } 
});
exports.send = async(to, subject, html) => {    
    // Após configurar o transporte chegou a hora de criar um e-mail
    // para enviarmos, para isso basta criar um objeto com algumas configurações
    var email = {
        from: 'customtrade.suporte@gmail.com', // Quem enviou este e-mail
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