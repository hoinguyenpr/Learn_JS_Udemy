'use strict';

//primitives vs objects (primitive vs reference types)
let lastName = 'Williams';
let oldLastName = lastName;
lastName = "David";

console.log(lastName, oldLastName);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
};

const marriedJessica = jessica;
marriedJessica.lastName = 'David';
console.log('Before marrage:', jessica);
console.log('After marrage:', marriedJessica);
