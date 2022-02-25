//Operator:
//arithmatic operator:
//operand operator operand
//ex- 2+3
//ex- 2-3

// + - * / %
/*
console.log(4+5);
console.log(4-5);
console.log(4*5);
console.log(4/5);
console.log(4%5);
console.log(4**5); //exponential
*/

//increment
// var a = 10;
// a++
//deccrement
// a--
// console.log(a);

//increment
/*
var a = 5;
var b = 7;
a++;
++b;
console.log(a); //6
console.log(b); //8
*/

/*
var a = 5;
var b = 7;
var c, d;
c = a++;
d = ++b;
console.log(c); //5
console.log(a); //6
console.log(d); //8
console.log(b); //8
*/
/*
var a = 5;
var b = 7;
var c, d;
c = a--;
d = --b;
console.log(c); //5
console.log(a); //6
console.log(d); //8
console.log(b); //8
*/

//priority of operators - () means first
// let opr =(3 -5) * 5 /7;
// console.log(opr);


//comparison operator: 
/*
 ==
 ===
 != not equal

 var a = 5;
 var b = 5;
 var resCom = a == b;
 console.log(resCom); //true
 */

 /*
 var a = 5;
 var b = 6;
 var resCom = a == b;
 console.log(resCom); //false
 */

/*
 var a = 5;
 var b = "5";
 var resCom = a === b;
 console.log(resCom); //false
*/

/*
 var a = 5;
 var b = 6;
 var resCom = a != b;
 console.log(resCom); //true
*/

/*
 var a = 5;
 var b = 5;
 var resCom = a != b;
 console.log(resCom); //false
*/

/*
 var a = 5;
 var b = "5";
 var resCom = a !== b;
 console.log(resCom); //true
*/

/*
 var a = 5;
 var b = 6;
 var resCom = a < b;
 console.log(resCom); //true
*/

/*
 var a = 5;
 var b = 6;
 var resCom = a > b;
 console.log(resCom); //false
*/

/*
 var a = 5;
 var b = 10;
 var resCom = a >= b;
 console.log(resCom); //false
*/

/*
 var a = 5;
 var b = 5;
 var resCom = a >= b;
 console.log(resCom); //true
*/

/*
 var a = 1;
 var b = 1;
 var resCom = a <= b;
 console.log(resCom); //true
*/

/*
 var a = 1;
 var b = -3;
 var resCom = a <= b;
 console.log(resCom); //false
*/

//logical operator:   
/*  ||
true || true = true
true || false = true
false || true = true
false || false = false
*/

/* &&
true || true = true
false || true = false
true || false = false
false || false = false
*/

/*
if((4>6) || (1<6)){
    console.log("cond. is true");
}else{
    console.log("cond. is false");
} //true
*/

/*
if((4>6) || (1>6)){
    console.log("cond. is true");
}else{
    console.log("cond. is false");
} //false
*/

/*
if((4<6) && (1<6)){
    console.log("cond. is true");
}else{
    console.log("cond. is false");
} //true
*/

/*
if((4>6) && (1<6)){
    console.log("cond. is true");
}else{
    console.log("cond. is false");
} //false
*/

/* ! -opposit
!false = true
*/
/*
if(!(4>6) && (1<6)){
    console.log("cond. is true");
}else{
    console.log("cond. is false");
} //true for ! -opposit
*/


//conditional operator(shorthand):
/*
var cp = (1<2) ? "Hi" : "Hello";
console.log(cp); //true

var cp = (1>2) ? "Hi" : "Hello";
console.log(cp); //false
*/


//assignment operator:
// var a = 12;
// a = a + 10; //or
// a += b //same
// a -= b 
// a *= b 
// a /= b 
// a %= b 

// name = name + "world"; //or
// name += "world";


//ternery operator-es-6: shorthand of conditioon
//rules: condition ? trueside : falseside

// let age = 18;
// let result = (age >= 18) ? "yes" : "no";
// console.log(result);

//ternery operator can be nested
// let age = 18;
// let age = 17;
// let result = (age >= 18) ? "adult"
//                          : (age < 10)
//                          ? "child" : "young";
// console.log(result);
//it's complex to showing, use only for short condition

//typeOf operator:comes data type
//var tp = "pranab";

//don't
let isLoggedin = true;
let resultAccess = isLoggedin ? true : false;
// console.log(resultAccess)

//do
// let isLoggedin = true;
// let resultAccess = isLoggedin;
// console.log(resultAccess);

//don't
let a = 5;
let resultAccess = a > 5 ? true : false;
// console.log(resultAccess);

//don't
let a = 5;
let resultAccess = a > 5;
// console.log(resultAccess);

//delete operator
//delete main value in array
// let arr = ["a", "b"];
// delete arr[0];
// console.log(arr);

//instanceof operator - returns true if an object is created by a given constructor:
// const fruits = ["Banana", "Orange", "Apple"];
// fruits instanceof Array;
// console.log(fruits);

//comma operator
let x = 1;
x = (x++, x)
console.log(x);

//delete operator
// JavaScript Array delete()
// Warning !
// Array elements can be deleted using the JavaScript operator delete.
// Using delete leaves undefined holes in the array.
// Use pop() or shift() instead.

//bitwise operator:
