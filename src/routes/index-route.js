'use strict';

const express = require('express');
const router = express.Router();

const dotenv = require('dotenv');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

router.get('/', (req, res, next)=>{
    // console.log('teste: ', process.env.TESTE);
    res.status(200).send({
        title: "Node LandPage API",
        version: "1.0.0"
    })
});

module.exports = router;