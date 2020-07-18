'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/lead-repository');
const emailService = require('../services/send-email');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

exports.post = async(req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, 'O nome deve conter pelo menos 3 caracteres');
    contract.isEmail(req.body.email, 'E-mail inválido');
    contract.isRequired(req.body.phone, 'O preenchimento do telefone é obrigatório');
    contract.isRequired(req.body.origin, 'O preenchimento da origem é obrigatório');

    // Se os dados dorem inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;    
    }

    try {
        req.body.phone = req.body.phone.trim()
        await repository.create(req.body);
        // Enviando email
        emailService.send(
            process.env.SEND_EMAIL_TO, 
            'Atenção, novo Lead adicionado', 
            process.env.SEND_EMAIL_TMPL.replace('{0}', req.body.name)
        );
        res.status(201).send({ 
            message: 'Lead cadastrado com  sucesso!'
        });
    } catch (e) {
        console.log('erro', e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

