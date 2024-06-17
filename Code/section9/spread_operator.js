'use strict'

//Spread in Arrays
    //1. Copying an array
    const originalArray = [1, 2, 3];
    const copiedArray = [...originalArray];
    console.log(copiedArray); // [1, 2, 3]

    //2. Concatenating arrays:
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const concatenatedArray = [...array1, ...array2, ...[7, 8 ,9]];
    console.log(concatenatedArray); // [1,2,3,4,5,6,7,8,9]

    //3. Using spread with function arguments:
    function sum(x, y, z) {
        return x + y + z;
    }

    const numbers = [1, 2, 3];
    console.log(sum(...numbers));

//Spread in Objects
console.log('Spread in Objects')
    //1. Copying an object
    const originalObject ={
        a: 1,
        b: 2
    }

    const copiedObject = {...originalObject};
    console.log(copiedObject); // { "a": 1, "b": 2 }
    
    //2. Merging objects
    const obj1 = {
        a: 1,
        b: 2
    };
    const obj2 = {
        c: 3,
        d: 4
    };

    const mergedObj = {...obj1, ...obj2};
    console.log(mergedObj);  // { "a": 1, "b": 2, "c": 3, "d": 4 }

    //3. Overwriting properties in objects
    const defaultSettings = {
        theme: "dark",
        showNotification: true
    };
    const userSetting = {
        showNotification: false
    };
    const settings = {
        ...defaultSettings,
        ...userSetting
    };

    console.log(settings);
    //{ "theme": "dark", "showNotification": false }