'use strict';

var mongoose = require('mongoose'),
    host = 'localhost',
    projectName = 'pilketos';


mongoose.connect('mongodb://'+host+'/'+projectName, { useNewUrlParser: true },function(err){
    if(err){
        console.log("Connection Falied");
    }else{
        console.log("Connection Succesfuly");
    }
})