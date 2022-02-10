//String templates literals - es-6 - no need using concat

//before
// console.log("First line \nSecond line");
// console.log("Second line");

//after(templates literals)
/*
console.log(`First line
Second line`);
let x = `First line
Second line`;
console.log(x);
*/

//before
/*
let age = 21;
console.log("His age is" + age);

//after(templates literals)
console.log(`His age i ${age}`);
*/

/*
var a = 21
var b = 23
var result = `${a} + ${b} = ${a + b}`;
console.log(result);
*/