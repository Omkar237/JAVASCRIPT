//object destructure


 const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
 }

const {courseInstructor: instructor} = course
console.log(instructor);
const {price: p} = course
console.log(p);