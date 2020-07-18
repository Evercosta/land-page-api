'use strict';

const express = require('express');
const router = express.Router();

const dotenv = require('dotenv');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

router.get('/', (req, res, next)=>{
    console.log('teste FB_TYPE: ', process.env.FB_TYPE);
    console.log('teste FB_PROJECT_ID: ', process.env.FB_PROJECT_ID);
    console.log('teste FB_PRIVATE_KEY_ID: ', process.env.FB_PRIVATE_KEY_ID);
    console.log('teste FB_PRIVATE_KEY: ', process.env.FB_PRIVATE_KEY);
    console.log('teste FB_CLIENT_EMAIL: ', process.env.FB_CLIENT_EMAIL);
    console.log('teste FB_CLIENT_ID: ', process.env.FB_CLIENT_ID);
    console.log('teste FB_AUTH_URI: ', process.env.FB_AUTH_URI);
    console.log('teste FB_TOKEN_URI: ', process.env.FB_TOKEN_URI);
    console.log('teste FB_AUTH_PROVIDER_X509_CERT_URL: ', process.env.FB_AUTH_PROVIDER_X509_CERT_URL);
    console.log('teste FB_CLIENT_X509_CERT_URL: ', process.env.FB_CLIENT_X509_CERT_URL);
    console.log('teste FB_DATA_BASE_URL: ', process.env.FB_DATA_BASE_URL);
    res.status(200).send({
        title: "Node LandPage API",
        version: "1.0.0"
    })
});

module.exports = router;