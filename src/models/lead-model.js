'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    _id: false,
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    origin: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Lead', schema);