'use strict';

//var here belongs to global object => window
var firstName = "Manila";

const david = {
    firstName: 'David',
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2024 - this.year);

        // Pass this of david to isManila1 by self
        const self = this;
        const isManila1 = function () {
            console.log(2030 - self.year);
        }
        console.log("Manila1 is calling");
        isManila1();

        // Pass this of david to isManila2 
        // using arrow function (this is parrent scope = david)
        const isManila2 = () => {
            console.log(2030 - self.year);
        }
        console.log("Manila2 is calling");
        isManila2();
    },
 
    // arrow function
    // this => global object (because arrow function do not have their own this context)
    greetGlobal: () => console.log(`Hey ${this.firstName}`),

    // regular function
    // this => refer to object itself
    greetDavid: function () {
        console.log(`Hey ${this.firstName}`)
    }
}

// => BP: never ever use an arrow function as a method of object

david.greetGlobal(); //Manila
david.greetDavid(); //David

//
david.calcAge();


// argument keyword
console.log("Argument keyword:")
const addExpr = function(a, b) {
    console.log(arguments);
    return a + b;
}
console.log(addExpr(2, 5, 8, 12));

const arrowAddExpr = (a, b) => {
    // cannot using arguments keyword here!
    //console.log(arguments);
    return a + b;
}
console.log(arrowAddExpr(2, 5, 8, 12));


// this in arrow function
    // => refer parent object
// this in regular function
    // => refer current object