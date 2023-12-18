//dates
let myDate = new Date("01-14-2023")
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
//console.log(myDate.toLocaleString());

//->timestamp
let timestamp = Date.now()
//console.log(timestamp);


console.log(myDate.toLocaleString('default', {
    month: 'long'
}));