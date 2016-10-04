"use strict"

const { expect } = require('chai');
const fizzBuzz = require('./index.js');

describe('FizzBuzz', function(){
    it("should return 1 when given 1", function(){
        expect(fizzBuzz(1)).to.eql('1');
    });

    it("should return 2 when given 2", function(){
        expect(fizzBuzz(2)).to.eql('2');
    });

    it("should return fizz when given 3", function(){
        expect(fizzBuzz(3)).to.eql('fizz');
    });

     it("should return buzz when given 5", function(){
        expect(fizzBuzz(5)).to.eql('buzz');
    });

    it("should return fizz when given 6", function(){
        expect(fizzBuzz(6)).to.eql('fizz');
    });

    it("should return buzz when given 10", function(){
        expect(fizzBuzz(10)).to.eql('buzz');
    });

    it("should return fizzbuzz when given 15", function(){
        expect(fizzBuzz(15)).to.eql('fizzbuzz');
    });

    it("should return fizzbuzz when given 30", function(){
        expect(fizzBuzz(30)).to.eql('fizzbuzz');
    });


});