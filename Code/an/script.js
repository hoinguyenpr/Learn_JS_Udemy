'use strict'

function getValue() {
    var a = 1;
    var b = 2;
    return a + b;
}

var val = getValue();
//console.log(val);

function f1() {
    var N = 0;
    //console.log(N);
    function f2() {
        N += 1;
        //console.log('-->>', N);
    }
    return f2;
}

var result = f1();

// result();
// result();
// result();

let n = 0;

const justLog = function(){
    n += 1;
    console.log(`Hello no ${n}`);
}

const mainFn = function(fn) {
    console.log('Inside main');
    fn()
}

mainFn(justLog);