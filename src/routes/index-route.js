'use strict';

const express = require('express');
const router = express.Router();
const emailService = require('../services/send-email');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

router.get('/', (req, res, next)=>{
    const nome = 'Nome Teste 2';
    emailService.send(
        process.env.SEND_EMAIL_TO, 
        'Atenção, novo Lead adicionado',
        '<p><strong>'+nome+'</strong> acabou de se cadastrar no sistema.</p>'
    );
    res.status(200).send({
        title: "Node LandPage API",
        version: "1.0.0"
    })
});

module.exports = router;