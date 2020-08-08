'use strict';

var express = require('express'),
    router = express.Router(),
    Kelas = require('../model/siswa');

    
router.get('/', function (req, res) {
    Kelas.find({},function(err,kelas){
        res.json({Kelas:kelas}).status(200);
    })
});

router.get('/:id',function(req,res){
    Kelas.findById(req.params.id,function(err,siswa){
        if(err){
            return res.status(500).json({err:err.message})
        }
        res.json({Kelas:siswa})
    })
})

router.post('/',function(req,res){
    Kelas.create(req.body,function(err,siswa){
        if(err){
            return res.status(500).json({err:err.message})
        }
        res.json({Kelas:siswa,message:'Created'})
    })
})

router.put('/:id',function(req,res){
    var id=req.params.id,body=req.body;
    if(body && body._id != id){
        return res.status(500).json({message:'ID Tidak Sama'})
    }
    Kelas.findByIdAndUpdate(id,body,function(err,siswa){
        if(err){
            return res.status(500).json({err:err.message})
        }
        res.json({message:'BERHASIL',Kelas:siswa})
    })
})

router.delete('/:id',function(req,res){
    var id=req.params.id,body=req.body;
    if(body && body._id != id){
        return res.status(500).json({message:'ID Tidak Sama'})
    }
    Kelas.findByIdAndDelete(id,function(err,siswa){
        if(err){
            return res.status(500).json({err:err.message})
        }
        res.json({message:'BERHASIL',Kelas:siswa})
    })
})




module.exports=router