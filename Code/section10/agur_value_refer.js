'use strict'

const flight = 'LH234';
const jonas = {
    name: 'Jonas Schedtmann',
    passport: 123456789,
}

// flightNum => primitive type =>  value ( a copy of original value)
// passenger => referrence
const checkIn = function(flightNum, passenger) {
    flightNum = 'LH990';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 123456789) {
        alert('Check in');
    } else {
        alert('Wrong password!');
    }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);



