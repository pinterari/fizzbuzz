"use strict"

const FizzBuzzPrinter = require('./index.js');
const { expect } = require('chai');

describe('FizzBuzz Printer', function() {

    describe('when given one element range', function(){
        it('should return a list with that one element and its fizzbuzz', function(){
            const range = { from: 1, to: 1};
            const printer = new FizzBuzzPrinter(range);
            const result = printer.print();
            expect(result).to.eql([
                {number: 1, value: '1'}
            ]);
        })
    });

    describe('when given regular range', function(){
        it('should map every number to its fizzbuzz buddy', function(){
            const range = { from: 1, to: 4};
            const printer = new FizzBuzzPrinter(range);
            const result = printer.print();
            expect(result).to.eql([
                {number: 1, value: '1'},
                {number: 2, value: '2'},
                {number: 3, value: 'fizz'},
                {number: 4, value: '4'}
            ]);
        })
    })

});