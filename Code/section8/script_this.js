'use strict';

console.log(this)

const calcAge1 = function(birthYear) {
    console.log(2024 - birthYear);
    console.log(this);
}

const calcAge2 = birthYear => {
    console.log(2024 - birthYear);
    console.log(this);
}

console.log("calcAge1 is calling");
calcAge1(1997);

console.log("calcAge2 is calling");
calcAge2(1997);


const david = {
    year: 1997,
    calcAge: function () {
        console.log(this);
        console.log(2024 - this.year);
    }
}

console.log("David is comming");
david.calcAge();

// mark borrow function from david
const mark = {
    year: 1991
}

mark.calcAge = david.calcAge;

console.log("Mark is comming");
mark.calcAge();

// borrow function to variable
const coppyDavid = david.calcAge;
const coppyMark = mark.calcAge;

