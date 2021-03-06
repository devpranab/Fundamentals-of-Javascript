//Number:
// var number = 20 // A number with decimals
// var number = 20.56 // A number without decimals
// var number = 123e5 //or 123 * 10**5
// var number = 123e-5 //

/*
Floating Precision
Floating point arithmetic is not always 100% accurate:

let x = 0.2 + 0.1;

To solve the problem above, it helps to multiply and divide:

let x = (0.2 * 10 + 0.1 * 10) / 10;
*/

/*
let x = 10; //number
let y = 20;
let z = x + y;
*/

/*
let x = "10"; //string
let y = "20";
let z = x + y;
*/

// var sn = "21" + 12;
// console.log(sn); //2112

// var sn = 8 + 12 + "10";
// console.log(sn); //2010

// var sn = "result" + 12 + 10;
// console.log(sn); //result1210

//  var sn = "21" - 12;
//   console.log(sn); //9

//   var sn = "21" * 12;
//   console.log(sn); //252

//   var sn = "21" % 12;
//   console.log(sn); //

//   var sn = "21" + "12";
//   console.log(sn); //2112

//   var sn = 25 / 0;
//   console.log(sn); //infinity

// var hex = 0xBB
// console.log(hex); //187

/*
var n = 187; // convert to string
var res = n.toString();
console.log(res);
*/

/*
// toString()
var n = 18.7;
var res = n.toString();
console.log(res);
*/

//convert decimal to binary
// var dec = 187;
// var res = dec.toString(2);
// console.log(res); //10111011

//convert decimal to octal
//  var dec = 187;
//  var res = dec.toString(8);
//  console.log(res); //273

 //convert decimal to hexadecimal
//  var dec = 187;
//  var res = dec.toString(16);
//  console.log(res); //bb

//toPrecision() - convert string
// var pre = 2.34122;
// var res = pre.toPrecision();
// var res = pre.toPrecision(1);
// var res = pre.toPrecision(4);
//  console.log(res);

// parseInt() - covert string to number
// var sn = "34";
// var res = parseInt(sn);
//  console.log(res);

// parseInt() - covert string to number
// var sn = "34.1";
// var res = parseInt(sn);
//  console.log(res);

// parseFloat() - covert string to number with . part
// var sn = "34.1";
// var res = parseFloat(sn);
//  console.log(res);

/* multi method use in one
var x = 12.2;
x.toString(); //"12.2"
parseFloat(x.toString()); //12.2

//isFinite
let a = 85;
let num = isFinite(a)
console.log(num) - true

//isInteger
let a = 85;
let num = isInteger(a)
console.log(num)

//Exponential
let x = 123e5 = 123,00000
x = 123 * 10 ** 5
let x = 9.656;
x.toExponential(2);
x.toExponential(4);
x.toExponential(6);

//toFixed
let a = 23.45632
let num = a.toFixed(2);
    num = a.toFixed(3);
console.log(num)

//valueOf() - returns a number as a number
let x = 123;
x.valueOf();
console.log(x);
(123).valueOf();
console.log(x);
(100 + 23).valueOf();
console.log(x);

//number object
let x = new Number(237);
console.log(x)

//Number property
//MAX_VALUE
//MIN_VALUE
//POSITIVE_INFINITY
//NEGETIVE_INFINITY
*/

//isNan
// var n = 10;
// var n = "10";
// var n = "number";
// var n = "123number";
// var re = isNaN(n);
// console.log(re);

// let x = 123;
// But numbers can also be defined as objects with the keyword new:
// let y = new Number(123);

//compare two object
// let x = new Number(500);
// let y = new Number(500);
// (x == y) true or false? ans:false


//String:
//JavaScript strings are for storing and manipulating text.
// var str = "pranab";
// var str = "pranab is 'programmer'"; //ok
// var str = "pranab is "programmer""; //no
// var str = 'pranab is "programmer"'; //ok 
// console.log(str);

/*
document.getElementById("demo").innerHTML =
"Hello Dolly!";
*/

/*
Property Access
ECMAScript 5 (2009) allows property access [ ] on strings:
Example
let text = "HELLO WORLD";
let char = text[0];
*/

//string operator
//escape charecter
// console.log("10" - "20"); //10
// console.log("10" + "20"); //2020
// console.log(5 + 15 "world"); //20world
// console.log(5 + "world"); //5world
// console.log("world" + 5); //world5
// console.log("  world"); //white space
// console.log(Hi + "" + world); //concat
// console.log("Hi \" world"); //get"
// console.log("Hi \\ world"); //get \
// console.log("Hi \t world"); //space tab
// console.log("Hi \n world"); //next line with space
// console.log("Hi \nworld"); //next line with no space

//line break
// document.getElementById("demo").innerHTML = "\
// hello pranab!";

//length -property so no need()
// var str = "pranab sarkar";
// var str = "pranabsarkar";
// var result = str.length;
// console.log(result);

//indexOf()
// let str = "Please locate where 'locate' occurs!";
// str.indexOf("locate");

//lastIndexOf();
// let str = "Please locate where 'locate' occurs!";
// str.lastIndexOf("locate");

// let str = "Please locate where 'locate' occurs!";
// str.lastIndexOf("locate", 15);

// toString() Get the content of the text:
// let text = "Hello World!";
// let result = text.toString();
// console.log(result);

// var str = "pranab sarkar".length;
// console.log(str);

//access by index
// var index = str[1];
// var index = str[15]; //undefined
// console.log(index);

//uses of string methods
//lastIndexOf() - Search for the last occurrence of "planet"
// let text = "a great planet.";
// let result = text.lastIndexOf("planet");
// console.log(result);

// var str = "Pranab sarkar";
//toUpperCase
// var result = str.toUpperCase();
// console.log(result);

//toLowerCase
// var result = str.toLowerCase();
// console.log(result);

//trim
// var str = "  Prana b sarkar";
// var result = str.trim();
// console.log(result);

//TrimStart - remove start space
//TrimEnd - remove end space


//slice
// var str = "Pranab sarkar";
// var result = str.slice(2,6);
// var result = str.slice(-2,6);
// console.log(result);

//substr() - index to length
//  var str = "Pranab sarkar";
//  var result = str.substr(3);
//  console.log(result);

//replace()
// var str = "Pranab sarkar";
// var result = str.replace("ra", "ej");
// console.log(result);

//concat() - like +
// var str = "Pranab sarkar";
// var result = str.concat(" das", " gupta ", 20);
// console.log(result);

//padStart - 1st para=how many length 2nd para=add
// let a = '2';
// let b = '3';
// console.log(a.padStart(5, "0"));
// console.log(a.padStart(5)); //no 2nd para so separate by space
// console.log(a.padStart(5, "01"));

//padEnd - add at end
//  console.log(a.padEnd(5, "01"));

//split() - convert into array
// let text = "How are you doing today?";
// const myText = text.split(" "); //,
// console.log(myText);
// text.split(",")    // Split on commas
// text.split(" ")    // Split on spaces
// text.split("|")    // Split on pipe

//includes()
// let text = "Hello world, welcome to the universe.";
// let result = text.includes("world");
// console.log(result); //return yes/true

//charArt() - index of single char
// let text = "HELLO WORLD";
// let letter = text.charAt(1);
// console.log(letter);

//Get the Unicode of the first character in a string:
// let text = "HELLO WORLD";
// let unicode = text.charCodeAt(0);
// console.log(unicode);

//startsWith()
// let text = "HELLO WORLD";
// let letter = text.startsWith("HELLO");
// console.log(letter);

//endsWith()
// let text = "HELLO WORLD";
// let letter = text.endsWith("WORLD");
// console.log(letter);

//match() - will find
// let text = "The rain in SPAIN stays mainly in the plain";
// let result = text.match(/ain/);
// console.log(result);

//search()
// let text = "Mr. Blue has a blue house";
// let position = text.search("blue");
// console.log(position);

//Literal vs object constructor
// let a = "something"; - Literal syntax
// let a = String("something"); - object constructor syntax

//convert string to date
// let date = new Date();
// console.log(date.toString());
// console.log(date.toUTCString());


//Boolean - return true or false
// var x = true;
// var y = false;

/*
var a = 5;
var b = 5;
if(a == b){
    console.log("cond: true");
}else{
    console.log("cond: false");
}
*/

// var x = "Pranabs";
// var re = Boolean(x)
// console.log(re);   //true

// var x = null;
// var re = Boolean(x)
// console.log(re);   //false

// var x = 0;
// var re = Boolean(x)
// console.log(re);   //false

// var x = NaN;
// var re = Boolean(x)
// console.log(re);   //false

// var x;
// var re = Boolean(x)
// console.log(re);   //false

//NaN-not a number - a type of data type
// var x = 10/"p";
// var x = "10" - "p";
// console.log(x);
// console.log(isNaN(x));
'
// let x = NaN;
// let y = 5;
// let z = x + y;
// console.log(z);


//Array
// let arrLists = ["pranab", "kishor", "doyal", "sourav"]
// console.log(arrLists);

//Object:
