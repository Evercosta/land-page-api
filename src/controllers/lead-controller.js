'use strict';

// const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/lead-repository');

exports.post = async(req, res, next) => {
    // let contract = new ValidationContract();
    // contract.hasMinLen(req.body.title, 3, 'O título deve conter pelo menos 3 caracteres');
    // contract.hasMinLen(req.body.slug, 3, 'O slug deve conter pelo menos 3 caracteres');
    // contract.hasMinLen(req.body.description, 3, 'A descrição deve conter pelo menos 3 caracteres');

    // Se os dados dorem inválidos
    // if (!contract.isValid()) {
    //     res.status(400).send(contract.errors()).end();
    //     return;    
    // }

    try {
        await repository.create(req.body);
        res.status(201).send({ 
            message: 'Lead cadastrado com  sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

