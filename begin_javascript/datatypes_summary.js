// primitive

// 7 types -> String, number, Boolean, null, undefined, Symbol, Bigint

//Reference (Non primitive)

//Arrays, Objects, Function

/* js dynamic type language

beacuse value can be changed dont need to specify type
of var js recognize type at run time not compile time

*/
const one = Symbol('123')
const two = Symbol('123')

console.log(one === two);

//Array
const heros = ["batman", "flash", "mario", "superman"];

//objects
let myObj ={
    name: "Omkar",
    age: 22,
}

//function
const myFunction = function(){
    console.log("Hello");
} 

console.log(typeof myObj);