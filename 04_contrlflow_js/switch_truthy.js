// const month = 3


// switch (month) {
//     case 1:
//         console.log("Month is january");
//         break;

//     case 2:
//         console.log("February");
//         break;

//     case 3:
//         console.log("March");
//         break;

//     default:
//         console.log("Nothing");
//         break;
// }
//---------------------------------------------------------//

//->truthy
const mainValue = "omkar.google"
if(mainValue){
    console.log("COntain data ");
}else{
    console.log("bye");
}
/*->fasley values false, 0, -0, Bigint 0n, "", null, undefined, Nan
*///->Gives false 

/*truthy-> "0", 'false', " ", [], {}, function(){} */

// const emptyArray = []
// if(emptyArray.length === 0){
//     console.log("Empty array");
// }

const obj = {}
if(Object.keys(obj.keys)=== 0){
    console.log("Empty object");
}