"use strict"

const FizzBuzz = require('../fizzbuzz');

class FizzBuzzPrinter {

    constructor(range) {
        this._range = range;
    }

    print() {
        const result = [];
        for(var i = this._range.from; i <= this._range.to; ++i) {
            result.push({
                number: i,
                value: FizzBuzz(i)
            });
        }
        return result;
    }
}

module.exports = FizzBuzzPrinter;