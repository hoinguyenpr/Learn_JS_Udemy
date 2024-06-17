'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({
        time = '',
        address = '',
        mainIndex = 0,
        starterIndex = 0
    }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    }
}

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});

// retrive by properties
let {name, categories, starterMenu} = restaurant;
console.log(name, categories, starterMenu)

// change name of properties & default value
console.log('Change name of properties')
let {
    menu = [1,2,3],
    name: restaurantName, 
    categories: resCategories, 
    starterMenu: resMenu,
    openingHours: resOpen
} = restaurant;

console.log(menu, restaurantName, resCategories, resMenu)

// Mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

// using () cover {}, if not js understand {} as a block code
({a, b} = obj);
console.log(a, b);

// Nested objects
console.log('Nested objects: ')
const {
    fri: {open: o, close: c},
} = resOpen;

console.log(o, c);
