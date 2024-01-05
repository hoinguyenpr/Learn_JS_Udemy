'use strict'

//Challenge #1

let markMass = 78;
let markHeight = 1.69;
let JohnMass = 92
let JohnHeight = 1.95;

let BMIMark = markMass / (markHeight * markHeight);
let BMIJohn = JohnMass / (JohnHeight * JohnHeight)

let markHigherBMI = BMIMark >  BMIJohn ? true : false;

console.log(BMIMark);
console.log(BMIJohn);
console.log(markHigherBMI)

//Challenge #2

if (markHigherBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than John's!");
}

if (markHigherBMI) {
    console.log(`Mark's BMI ${Math.round(BMIMark*10) / 10} is higher than John's ${Math.round(BMIJohn*10) / 10}!`);
} else {
    console.log(`John's BMI ${Math.round(BMIJohn*10) / 10} is higher than Mark's ${Math.round(BMIMark*10) / 10}!`);
}

//Challenge #3

let scoreDolphins = (96 + 108 + 89) / 3;
 
let scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy");
}

//Challenge #4

let bill = 275;

let tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
