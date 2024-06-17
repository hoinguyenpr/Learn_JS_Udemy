'use strict'

// Declare Generators by keyword function*
function* generatorFunction() {
    yield 'Hello';
    yield 'World';
    yield 'Done';
}

// Using Generator
// Create a Generator Object
const generator = generatorFunction();

// Using next() method
console.log(generator.next()); //{ "value": "Hello", "done": false }
console.log(generator.next()); //{ "value": "World", "done": false }
console.log(generator.next()); //{ "value": "Done", "done": false }
console.log(generator.next()); //{ "value": undefined, "done": true }

console.log('------------------');

function* fibonacci() {
    let a = 0, b = 1;
    while(true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const sequence = fibonacci();

console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
