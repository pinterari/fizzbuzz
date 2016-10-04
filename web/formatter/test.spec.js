"use strict"

const format = require('./index.js');
const { expect } = require('chai');

describe('web formatter', function(){

    it('should separate number and value with a dash', function(){
        const input = [{number: 1, value: '1'}];
        const result = format(input);
        expect(result).to.eql('1 - 1');
    });

    it('should separate lines with a new line', function(){
        const input = [{number: 2, value: '2'}, {number: 3, value: 'fizz'}];
        const result = format(input);
        expect(result).to.eql('2 - 2\n3 - fizz');
    })
    

});