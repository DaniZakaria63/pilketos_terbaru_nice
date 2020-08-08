
'use strict';

var mongoose=require('mongoose');

var schema = new mongoose.Schema({
    ketua:String,
    wakil:String,
    visi:String,
    misi_1:String,
    misi_2:String,
    misi_3:String,
    jumlah:Number,
    gambar:String
});

var model=mongoose.model('Calon',schema);

module.exports=model;