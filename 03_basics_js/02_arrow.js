const user = {
    name: "Omkar",
    passwors: 9033,
    WelcomeMessage: function() {
        console.log(`${this.name}, welcome in user`);
        console.log(this);//current values 
    }
}

// user.WelcomeMessage()
// user.name = "sam"
// user.WelcomeMessage()

//console.log(this);//holds window

// function one(){
//     const username = "omkar"
//     console.log(this.username);
// }


// const one = ()=>{
//     let username = "Omkar"
//     console.log(this.username);
// }

//->implicit return
const addone = (num1, num2)=>  (num1 + num2)//return function
const addTwo = (num1, num2)=>  ({username: "one"})// return object
console.log(addTwo(3, 4))
 