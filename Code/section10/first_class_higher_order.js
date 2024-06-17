'use strict'

//First class higher order function
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher-order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`); // Original string: JavaScript is the best
    console.log(`Transformed string: ${fn(str)}`);  // Transformed string: JAVASCRIPT is the best
    console.log(`Transformed by: ${fn.name}`); // Transformed by: upperFirstWord

}

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

//Functions Accepting Callback Functions
console.log('Callback session');

const high5 = function() {
    console.log('You are touching me! Keep going!');
}

document.body.addEventListener('click', high5);


var a1 = 'a1111111111111';
let a2 = 'a22222222222222';
const b3 = 'a33333333333333';

function test123(str) {
    console.log(`Hello ${str}`);
}

console.log(this);
console.log(window)
