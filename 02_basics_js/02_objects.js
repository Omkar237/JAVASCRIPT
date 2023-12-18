//----------------------Object Literals------------------//

//->symbols
const mysymbol =  Symbol();
//->objects
const JsUser = {
    name: "Omkar",
    [mysymbol]: "one",
    "Full_name": "Omkar Kshirsagar",
    age: 21,
    location: "Pune",
    email: "ok@google.com",
    isLoggedin: false,
    lastLogedin: ["Monday", "Tuesday"]
}
JsUser.age = 22;
Object.freeze(JsUser);//cant change any thing
JsUser.age = 19
//console.log(JsUser);

//->next example
const JsUser2 = {
    name: "Omkar",
    [mysymbol]: "one",
    "FirstLastname": "Omkar Kshirsagar"
}

JsUser2.greetings = function(){
    console.log("Hello user");
}
JsUser2.greetings2 = function(){
    console.log(`Hello Js user, ${this.name}`)
}
//console.log(JsUser2.greetings2());
//------------------------------Object Singleton-----------------------//

//const new_user = new Object()//first way
const new_user2 = {}// second way

new_user2.id = "12333ab"
new_user2.name = "Omkar"
new_user2.age = 18
//console.log(new_user2);



//->assign two objects to one
const obj1 = {1:"one", 2:"two"}
const obj2 = {3:"three", 4:"four"}
const obj3 = Object.assign({}, obj1, obj2)//target({}),source(obj1, obj2)
//console.log(obj3);

//->another way
const obj4 = {...obj1, ...obj2, ...obj3}
//console.log(obj4);

//-> array of objects

const array_object = [
    {
        id: "onee101",
        name:"omkar"
    },
    {
        id: "two202",
        name: "maheswari"
    },
    {
        id: "thre302",
        name: "sandeep"
    },
]

console.log(Object.keys(array_object));
console.log(Object.values(array_object));
console.log(Object.entries(array_object));