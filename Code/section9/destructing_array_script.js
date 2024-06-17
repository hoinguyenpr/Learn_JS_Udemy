'use strict';


const restauant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
}

//swap value
let [main, , secondary] = restauant.categories;
console.log(main, secondary); // Italian Vegetarian

[main, secondary] = [secondary, main];
console.log(main, secondary); // Vegetarian Italian



//destructing multi array
const nested = [2, 4, [5, 6, 7]];

let [first, second] = [nested[0], nested[2][2]];
let [i, , [,,j]] = nested;

console.log(first, second); //2 7
console.log(i, j);// 2 7

// default value
const testArr = [1, 2, 3, 4, 5, 6];

let [a = 0, b= 0, , c = 0,, ,, ,, f = 0] = testArr;

console.log(a, b, c, f)

