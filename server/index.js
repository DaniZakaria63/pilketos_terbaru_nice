'use strict';

var express = require('express'),
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
//  app.use(express.static(__dirname + '/frontend'));

app.use('/api/siswa',apiSiswa);
app.use('/api/kelas',apiKelas);
app.use('/api/calon',apiCalon);
app.use('/api/pelaksanaan',apiPelaksanaan);

app.listen(port, function () {
    console.log("Berjalan di port "+ port);
})