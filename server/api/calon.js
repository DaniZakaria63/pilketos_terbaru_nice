'use strict';

const { EDESTADDRREQ } = require('constants');

var express = require('express'),
    router = express.Router(),
    multer = require('multer'),
    path = require('path'),
    Calon = require('../model/calon');

const storage = multer.diskStorage({
    destination: path.join('./images'),
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage }).single('picture');

router.put('/image/:id', function (req, res) {

    var id = req.params.id;

    upload(req, res, err => {
        if (err) throw err
        Calon.findOneAndUpdate(
            { _id: id },
            { gambar: req.file.filename },
            function (err, calon) {
                res.json({ message: "Berhasil", filename: req.file.filename });
            }
        );
    });
});

router.get('/', function (req, res) {
    Calon.find({}, function (err, calon) {
        res.json({ calon: calon })
    })
});

router.get('/:id', function (req, res) {
    Calon.findById(req.params.id, function (err, calon) {
        if (err) {
            return res.status(500).json({ err: err.message })
        }
        res.json({ Calon: calon })
    })
})

router.post('/', function (req, res) {
    Calon.create(req.body, function (err, calon) {
        if (err) {
            return res.status(500).json({ err: err.message })
        }
        res.json({ Calon: calon, message: 'Created' })
    })
})

router.put('/:id', function (req, res) {
    var id = req.params.id, body = req.body;
    if (body && body._id != id) {
        return res.status(500).json({ message: 'ID Tidak Sama' })
    }
    Calon.findByIdAndUpdate(id, body, function (err, calon) {
        if (err) {
            return res.status(500).json({ err: err.message })
        }
        res.json({ message: 'BERHASIL', Calon: calon })
    })
})

router.delete('/:id', function (req, res) {
    var id = req.params.id, body = req.body;
    if (body && body._id != id) {
        return res.status(500).json({ message: 'ID Tidak Sama' })
    }
    Calon.findByIdAndDelete(id, function (err, calon) {
        if (err) {
            return res.status(500).json({ err: err.message })
        }
        res.json({ message: 'BERHASIL', Calon: calon })
    })
})




module.exports = router