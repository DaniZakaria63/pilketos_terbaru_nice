'use strict';

var express = require('express'),
    router = express.Router(),
    Calon = require('../model/calon');

    
router.get('/', function (req, res) {
    Calon.find({},function(err,calon){
        res.json({calon:calon})
    })
});

router.get('/:id',function(req,res){
    Calon.findById(req.params.id,function(err,calon){
        if(err){
            return res.status(500).json({err:err.message})
        }
        res.json({Calon:calon})
    })
})

router.post('/',function(req,res){
    Calon.create(req.body,function(err,calon){
        if(err){
            return res.status(500).json({err:err.message})
        }
        res.json({Calon:calon,message:'Created'})
    })
})

router.put('/:id',function(req,res){
    var id=req.params.id,body=req.body;
    if(body && body._id != id){
        return res.status(500).json({message:'ID Tidak Sama'})
    }
    Calon.findByIdAndUpdate(id,body,function(err,calon){
        if(err){
            return res.status(500).json({err:err.message})
        }
        res.json({message:'BERHASIL',Calon:calon})
    })
})

router.delete('/:id',function(req,res){
    var id=req.params.id,body=req.body;
    if(body && body._id != id){
        return res.status(500).json({message:'ID Tidak Sama'})
    }
    Calon.findByIdAndDelete(id,function(err,calon){
        if(err){
            return res.status(500).json({err:err.message})
        }
        res.json({message:'BERHASIL',Calon:calon})
    })
})




module.exports=router