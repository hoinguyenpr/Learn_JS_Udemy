'use strict'

//Challenge #1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage(100, 100, 300);

let scoreKoalas = calcAverage(65, 54, 49); 

const checkWinner = function (avgDolphins, avgKoalas) {
    let result = `No team wins...`;

    if ((avgDolphins / avgKoalas) >= 2) {
        result = `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    } else if ((avgKoalas / avgDolphins) >= 2) {
        result = `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    }

    console.log(result);
}

checkWinner(scoreDolphins, scoreKoalas);

//Challenge #2

const calcTip = (bill) => bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

let bills = [125, 555, 44];
let tips = [];
let totals = [];

bills.forEach(function(bill) {
    tips.push(calcTip(bill))
});

tips.forEach(function(tip){
    console.log(tip)
});

bills.forEach(function(bill) {
    totals.push(bill + calcTip(bill));
});

totals.forEach(function(total){
    console.log(total);
});

//Challenge #3

let mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

let john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi =  this.mass / (this.height * this.height);
        return this.bmi;
    }
}


/**
 * call mark.calcBMI() for return the bmi value and assign to bmi.
 */

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
} else if (mark.bmi < john.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
} else {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is equal with ${john.fullName}'s (${john.bmi})!`)
}

//Challenge #4

let bill2s = [22, 295, 176, 40, 37, 105, 10, 1100, 86, 52];
let tip2s = [];
let total2s = [];

bill2s.forEach(function(bill2) {
    tip2s.push(calcTip(bill2));
    total2s.push(calcTip(bill2) + bill2);
})

const calcAverageArr = function(array) {
    let sum = 0;
    array.forEach(function(element){
        sum += element;
    })
    return sum / array.length;
}

console.log(calcAverageArr(total2s));