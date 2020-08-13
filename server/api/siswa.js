'use strict';

var express = require('express'),
    router = express.Router(),
    Siswa = require('../model/siswa');

    
router.get('/kelas/:nama',function(req,res){
    Siswa.find({kelas:req.params.nama},function(err,siswa){
        if(err) return res.json({message:err}).status(500);
        res.status(200).json({siswa:siswa});
    })
});

router.get('/', function (req, res) {
    Siswa.find({},function(err,siswa){
        res.json({siswa:siswa})
    })
});

router.get('/:id',function(req,res){
    Siswa.findById(req.params.id,function(err,siswa){
        if(err){
            return res.status(500).json({err:err.message})
        }
        res.json({Siswa:siswa})
    })
})

router.post('/',function(req,res){
    Siswa.create(req.body,function(err,siswa){
        if(err){
            return res.status(500).json({err:err.message})
        }
        res.json({Siswa:siswa,message:'Created'})
    })
})

router.put('/:id',function(req,res){
    var id=req.params.id,body=req.body;
    if(body && body._id != id){
        return res.status(500).json({message:'ID Tidak Sama'})
    }
    Siswa.findByIdAndUpdate(id,body,function(err,siswa){
        if(err){
            return res.status(500).json({err:err.message})
        }
        res.json({message:'BERHASIL',Siswa:siswa})
    })
})

router.delete('/:id',function(req,res){
    var id=req.params.id,body=req.body;
    if(body && body._id != id){
        return res.status(500).json({message:'ID Tidak Sama'})
    }
    Siswa.findByIdAndDelete(id,function(err,siswa){
        if(err){
            return res.status(500).json({err:err.message})
        }
        res.json({message:'BERHASIL',Siswa:siswa})
    })
})




module.exports=router