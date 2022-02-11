//Array [] - a collection of items

//data type
//const fruits = ["Banana", "Orange", "Apple"];
// let type = typeof fruits;
// console.log(type);

// var fdAge = [18, 20, 19];
// console.log(fdAge);
// console.log(fdAge[0]);
// console.log(fdAge[1]);
// console.log(fdAge[2]);

// keep ele in extra var
//access by indexing
// var souravAge = fdAge[0];
// var souravAge = fdAge[1];
// var souravAge = fdAge[2];
// var souravAge = fdAge[6]; //undefined
// console.log(souravAge);

// accessing the Last Array Element
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits[fruits.length - 1];
// console.log(fruit);

// value set-update in array
// fdAge[1] = 21;
// console.log(fdAge);

//delete main value in array using delete operator
// let arr = ["a", "b"];
// delete arr[0];
// console.log(arr);

// indexOf() - find position no index
// var position = fdAge.indexOf(20);
// console.log(position);

// no find so comes -1
//  var position = fdAge.indexOf(22);
//  console.log(position);

//Access the Full Array
// With JavaScript, the full array can be accessed by referring to the array name:
// const cars = ["Saab", "Volvo", "BMW"];
// document.getElementById("demo").innerHTML = cars;

// const arrayNumber = [10, 15, 20, 25];
// push: add the last ele - 
// const arrayNumber = [10, 15, 20, 25];
// arrayNumber.push(30);
// console.log(arrayNumber);

// lenght
// console.log(arrayNumber.length);

// new value set by lenght
// var ashisAge = fdAge[4] = 21;
// console.log(arrayNumber.length);

//or as a dynamic
// const arrayNumber = [10, 15, 20, 25];
// arrayNumber[arrayNumber.length] = 25;
// console.log(arrayNumber.length);

// pop() - delete the last ele
// arrayNumber.pop();
// console.log(arrayNumber);

//const studentNames = ["pranab", "rajat", "rajav", "tarun"];
// shift - delete the 1st ele
// studentNames.shift();
// console.log(studentNames);

// unshift()
// studentNames.unshift();
// console.log(studentNames);

// slice()
// var sl = studentNames.slice(1, 3);
// console.log(sl); //don`t change original array

//splice() - start-deletecount-inject
/*
let se = [1,3,4,5,6,7,8];
//let remove = se.splice(2,3);
let remove = se.splice(2,3,6);
console.log(remove);
*/

//declare empty array
/*
var arr = [];
console.log(arr);
arr.push(10);
arr.push(10, "ok");
console.log(arr);
*/

//split() - string to array
/*
var x = "Pranab Sarkar";
var result = x.split("");
var result = x.split(" ");
console.log(result);
*/

// var x = "Pronab Sarkar is coder";
// var result = x.split("a");
// var result = x.split("o");
// console.log(result);

//toString()
// var as = ["india", "bd", "china"];
// var result = as.toString();
// console.log(result);

//join
/*
var result = as.join("/");
var result = as.join(",");
var result = as.join(" ");
var result = as.join(":");
console.log(result);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
*/

//concat
//string + array = string(full)
//array + array = array(full)
/*
var x = "pranab";
var y = ["is", "code"];
var result = x.concat(y);
console.log(result);

var x = ["pranab", "sarkar"];
var y = ["is", "code"];
var result = x.concat(y);
console.log(result);
*/

//sort - change the main array(acending)
/*
let countries = ["India", "US", "BD", "China"];
var result = countries.sort();
console.log(result); 
*/

//reverse - opposit of sort(decending)
/*
let countries = ["India", "US", "BD", "China"];
var result = countries.reverse();
console.log(result);
*/

//some() - Check if any values are over 18

// const ages = [3, 10, 18, 20];

// ages.some(checkAdult);
// function checkAdult(age) {
//   return age > 18;
// }


//every()
//console.log(result);


//isArray()
//let arr = "b";
//let result = Array.isArray(arr)// true
//let result = Array.isArray(arr)// false
//console.log(result);


//reduce()


//fil() - Fill all the elements with a value(Kiwi):
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.fill("Kiwi");
// console.log(fruits);

//array constant
//use const in array - best practice
//because will use unique array, no need to change, we will work with changing property value

//filter()
//console.log(result);

//from() - creating array from string
//console.log(Array.from("ABCDEFG"));

//includes()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.includes("Banana", 3);
// console.log(fruits); //false because positing is wrong

//valueOf()
// fruits.valueOf() returns the same as fruits:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const myArray = fruits;

//Array object - array is object
// let arr = ["a", "b", "c", "d"];
// console.log(typeof arr);

//object constructor - don't use it, use literal syntax
// let a = new Array(); //object constructor
// a[0] = "Hello"; //value add
// a[1] = "World"; //value add
// console.log(a);

//Multidimensional array
// let mult_arr = [["a", "b"], ["1", "2"]];
// console.log(mult_arr[0][0]); //acces a
// console.log(mult_arr[1][0]); //access 1
