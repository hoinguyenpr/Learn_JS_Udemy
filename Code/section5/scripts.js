'use strict'

// const measureKelvin = function() {
//     const measurement = {
//         type: 'temp',
//         unit: 'celsius',
//         value: prompt('Degrees celsius')
//     }

//     const kelvin = Number(measurement.value) + 273;
//     return kelvin;
// }

// console.log(measureKelvin());


//Challege #1
let forecastedMaxTemp1st = [17, 21, 23];
let forecastedMaxTemp2nd = [12, 5, -5, 0, 4];

const printForecast = function(forecastedMaxTemp) {
    //Normal
    let result1 = "... ";
    for(let i = 0; i < forecastedMaxTemp.length; i++) {
        result1 += forecastedMaxTemp[i] + "°C in " + (i + 1) + " days ... ";
    }
    console.log(result1);

    //Using string literals
    let result2 = "... ";
    for(let i = 0; i < forecastedMaxTemp.length; i++) {
        result2 = result2 + `${forecastedMaxTemp[i]}°C in ${i + 1} days ... `;
    }
    console.log(result2);
}

printForecast(forecastedMaxTemp1st);
printForecast(forecastedMaxTemp2nd);
