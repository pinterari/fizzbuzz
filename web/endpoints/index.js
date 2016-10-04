"use strict"

const express = require('express');
const endpoints = express();

const formatter = require('../formatter');
const FizzBuzzPrinter = require('../../fizzbuzz-printer');

endpoints.get('/api/list/', function(req, res){
    const { from, to } = req.query;
    const printer = new FizzBuzzPrinter({
        from: parseInt(from),
        to: parseInt(to)
    });
    const text = formatter(printer.print());
    res.type('text/plain').send(text);
});

module.exports = endpoints;