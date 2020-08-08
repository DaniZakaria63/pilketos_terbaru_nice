'use strict';

var mongoose=require('mongoose');

var schema = new mongoose.Schema({
    nama:String
});

var model=mongoose.model('Kelas',schema);

module.exports=model;