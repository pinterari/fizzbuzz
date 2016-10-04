"use strict"

const endpoints = require('./endpoints');

const server = endpoints.listen(3000, function(){
    console.log('ok');
});