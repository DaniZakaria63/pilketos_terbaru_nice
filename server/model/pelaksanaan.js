'use strict';

var mongoose=require('mongoose');

var schema = new mongoose.Schema({
    admin:Object,
    waktu_pemilihan:String
});

var model=mongoose.model('Pelaksanaan',schema);

module.exports=model;