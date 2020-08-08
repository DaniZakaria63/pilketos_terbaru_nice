'use strict';

var express = require('express'),
    router = express.Router(),
    Pelaksanaan = require('../model/pelaksanaan'),
    Siswa=require('../model/siswa');

router.get('/', function (req, res) {
    Pelaksanaan.find({},function(err,pelaksanaan){
        if(err){
            return res.status(500).json({message:err})
        }
        res.status(200).json({pelaksanaan:pelaksanaan,message:"Berhasil"})
    })
});

router.post('/login',function(req,res){
    var nis=req.body.nis,nama=req.body.nama;
    Siswa.findOne({nis:nis,nama:nama},function(err,siswa){
        res.status(200).json({
            message:"berhasil",
            siswa:siswa
        })
    })
})

router.post('/',function(req,res){
    Pelaksanaan.create(req.body,function(err,admin){
        if(err) return res.json({message:err})
        res.status(200).json({message:"berhasil",pelaksanaan:admin})
    })
})

router.put('/admin/:id',function(req,res){
    var id=req.params.id,body=req.body;
    if(body && body._id != id){
        return res.status(500).json({message:'ID Tidak Sama'})
    }
    Pelaksanaan.findOneAndUpdate(
        {_id:id},
        {admin:{
            username:body.username,
            password:body.password
        }},
        function(err,admin){
            if(err) return res.status(500).json({message:err})
            res.json({message:"Berhasil",admin:admin})
        }
    )
})

router.put('/jadwal/:id',function(req,res){
    var id=req.params.id,body=req.body;
    if(body && body._id != id){
        return res.status(500).json({message:'ID Tidak Sama'})
    }
    Pelaksanaan.findOneAndUpdate(
        {_id:id},
        {waktu_pemilihan:body.jadwal},
        function(err,jadwal){
            if(err) return res.json({message:err}).status(500);
            res.status(200).json({message:"Berhasil",jadwal:jadwal})
        });
})
module.exports=router