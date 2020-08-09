'use strict';

var express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    apiSiswa=require('./api/siswa'),
    apiKelas=require('./api/kelas'),
    apiCalon=require('./api/calon'),
    apiPelaksanaan=require('./api/pelaksanaan'),
    port = process.env.PORT || 3001,
    app = express();

require('./database');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  
app.use('/api/siswa',apiSiswa);
app.use('/api/kelas',apiKelas);
app.use('/api/calon',apiCalon);
app.use('/api/pelaksanaan',apiPelaksanaan);

app.listen(port, function () {
    console.log("Berjalan di port "+ port);
})