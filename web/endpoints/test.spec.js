"use strict"

const request = require('supertest');
const endpoints = require('./index.js');

describe('fizzbuzz web /api/list endpoint', function(){
    it('should respond with 200 status code', function(done){
        request(endpoints)
            .get('/api/list?from=2&to=3')
            .expect(200)
            .end(done);
    });

    it('should respond with text/plain', function(done){
        request(endpoints)
            .get('/api/list?from=2&to=3')
            .expect('Content-Type',/text\/plain/)
            .end(done);
    });

    it('should respond with fizzbuzz numbers', function(done){
        request(endpoints)
            .get('/api/list?from=2&to=3')
            .expect('2 - 2\n3 - fizz')
            .end(done);
    })
});