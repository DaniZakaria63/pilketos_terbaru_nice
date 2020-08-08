'use strict';

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    nis: Number,
    nama: String,
    kelas: String,
    status: Boolean
});

var model = mongoose.model('Siswa', schema);

module.exports = model;