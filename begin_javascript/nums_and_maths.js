
//->precison focus in input numbers 
const othernumber  = 123.6666
//console.log(othernumber.toPrecision(4));
//---------------++++++++++++++++++----------------

//->local string represent 1,000,000
const num1 = 10000000
//console.log(num1.toLocaleString('en-IN'));//in INdia

//++++++++++++++++++++++++++++maths++++++++++++++++++++++++++

//->abs negative to positive
//console.log(Math.abs(-4));

//->round, ceil(uper value), floor(lower value)
// console.log(Math.round(4.9999));//o/p 5
// console.log(Math.ceil(4.8));
// console.log(Math.floor(4.10));

//->Max(higher in given) && Min(lower in given)
// console.log(Math.min(10, 8, 99, 12));
// console.log(Math.max(12, 34, 66, 34));


//-> random value(between 0 & 1) gives value
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min)) + max);