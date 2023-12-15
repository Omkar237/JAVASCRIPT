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
const heros = ["batman", "flash", "mario", "superman"]

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
//******************************************************/


//memory -> Stack(primitive) and heapa(non-primitive)

let one1 = "onemoreshot"
let new1 = one1
new1 = "second shot"
console.log(new1);

//in heap references are stored of the object

let userone ={
    email: "omkar@google.com",
    phn: 45544444
}
let usertwo = userone
usertwo.email = "new_omkar@google.com"//<-this value is refernce to both the variable and will have same value because both pointing to same refernce

console.log(userone.email);
