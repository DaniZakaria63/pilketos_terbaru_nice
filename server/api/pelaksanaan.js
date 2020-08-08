'use strict';

var express = require('express'),
    router = express.Router(),
    Pelaksanaan = require('../model/pelaksanaan'),
    Kelas=require('../model/kelas'),
    Calon=require('../model/calon'),
    Siswa=require('../model/siswa');

router.get('/', function (req, res) {
    Pelaksanaan.find({},function(err,pelaksanaan){
        if(err){
            return res.status(500).json({message:err})
        }
        res.status(200).json({pelaksanaan:pelaksanaan,message:"Berhasil"})
    })
});

router.put('/vote/:id_siswa/:id_calon',function(req,res){
    var id_siswa=req.params.id_siswa,
        id_calon=req.params.id_calon,
        body=req.body;

    if(body && body._id_calon != id_calon && body._id_siswa != id_siswa){
        return res.status(500).json({message:'ID Tidak Sama'})
    }

    Calon.findById(id_calon,function(err,calon){
        if(err) return res.json({message:err})
        Calon.findOneAndUpdate(
            {_id:id_calon},
            {jumlah:(calon.jumlah)+1},
            function(err,data){
                if(err) return res.json({message:"error kedua"})
                Siswa.findOneAndUpdate(
                    {_id:id_siswa},
                    {status:true},
                    function(err,siswa){
                        if(err) return res.json({message:"Error Ketiga"})
                        res.json({message:"Berhasil",siswa:siswa})
                    }
                )
            }
        )
    })

})

router.post('/login',function(req,res){
    var nis=req.body.nis,nama=req.body.nama;
    Siswa.findOne({nis:nis,nama:nama},function(err,siswa){
        res.status(200).json({
            message:"berhasil",
            siswa:siswa
        })
    })
})

router.get('/kelas',function(req,res){
    Kelas.find({},function(err,kelas){
        if(err) return res.json({message:err}).status(500)
        res.status(200).json({kelas:kelas})
    })
})

router.get('/kelas/:id',function(req,res){
    var id=req.params.id;
    Kelas.findById(id,function(err,kelas){
        if(err) return res.json({message:err})
        res.json({kelas:kelas}).status(200);
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