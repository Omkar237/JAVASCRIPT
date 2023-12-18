//->arrays//
let newArr = [0, 12, 34, 22, 1]
let newArr2 = new Array(12, 223, 22, 21, 1)
newArr.push(33)
newArr.pop()
newArr.pop()
//console.log(newArr);



//->unshift to insert to start rest will shift to right
//->shift to remove first element
newArr.unshift(10)
//console.log(newArr);
newArr.shift()
//console.log(newArr);


//-> join convert array in string
let newarr = newArr.join()
// console.log(newarr);
// console.log(newArr);


//->slice 
// console.log("A ", newArr);
// let newa1 = newArr.slice(1, 3)
// console.log(newa1);
// console.log("B ", newArr);
// console.log("-----------------------");
// //->splice
// console.log("A ", newArr);
// let newa2 = newArr.splice(1, 3)
// console.log(newa2);
// console.log("B ", newArr);


//->more on array
const marvel = ["spiderman", "Ironman", "spiderman", "thor"]
const dc = ["superman", "Batman", "Flash"]
//marvel.push(dc)
// console.log(marvel[4][2]);


//->concat
const newArr3 = marvel.concat(dc);
//console.log(newArr3);

//->spread mostly used over concat

const all_array = [...marvel, ...dc]
//console.log(all_array);


//->array
const array_list = [1, 2, 3, [4, 2, 1, 6, 7], [3, 6, 5,[2, 3]]]
const new_array_list = array_list.flat(Infinity)
//console.log(new_array_list);


/*->getting data from website data is in the form of object or anything
to convert into array*/
//console.log(Array.from("omkar"));
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
console.log(Array.of("ok"));