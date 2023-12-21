// array specific loops

//for of loop
// let arr1 = [1, 2, 4, 5, 6]
// for(let val1 of arr1){
//     console.log(`value is ${val1}`);// }

// let name1 = "Omkar"
// for(let v of name1){
//     console.log(`name is ${v}`);
// }

// const map = new Map()//unique value
// map.set('IN', 'India')
// map.set('USA', 'United States')
// //console.log(map);

// for(let [key, value] of map){
//     console.log(key);
// }



//->for in loop directly gives keys not values
// const obj = {
//     js: "javascript",
//     cpp: "c++",
//     rb: "ruby"
// }
// for (const key in obj) {
//     console.log(obj[key]);
// }

// const prog = ["c", "c++", "java", "js", "python"]
// for (const key in prog) {
//     console.log(prog[key]);
// }

//-> for each loop
// const coding = ["c", "c++", "java", "js", "python"]

// coding.forEach(function (item){
//     console.log(item);
// })

// const arrobj = [
//     {
//     langname: "javascript",
//     langfilename: "js"
//     },
//     {
//         langname: "python",
//         langfilenme: "py"
//     },
//     {
//         langname: "java",
//         langfilenme: "java"
//     }
// ]
// arrobj.forEach((items)=>{
//     console.log(items.langname)
// })



//-> filters
const myNums = [1, 2, 3, 4, 5, 6, 7]
const val = myNums.filter((num)=> num > 2 )
//console.log(val);
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let selected = books.filter((bk)=> {
    return bk.genre==="History" && bk.edition > 2000
  })
  console.log(selected);