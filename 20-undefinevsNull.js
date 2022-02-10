//undefined vs null

// 1st way to getting undefined value
/*
let x;
console.log(x);
*/

// 2nd way to getting undefined value
/*
function sum(x, y){
console.log(x + y);
}
const result = sum(6,7);
console.log(result);
*/

// 3rd way to getting undefined value
/*
function sum(x, y){
console.log(x + y);
return
}
const result = sum(6,7);
console.log(result);
*/

// 4th way to getting undefined value
/*
function sum(x, y){
console.log(x, y);
}
const result = sum(6);
console.log(result);
*/

// 5th way to getting undefined value
/*
const person = {
    name: "pranab",
    from: "india",
    proff: "programmer"
}
console.log(person.gf);
*/

// 6th way to getting undefined value
/*
let fun = undefined;
console.log(fun);
*/



// null
/*
let keep = null;
*/

//null == undefined
//true //true as a value but not data type

//null === undefined
//false

//null == "" - false
//undefined == "" - false

//null == NaN - false