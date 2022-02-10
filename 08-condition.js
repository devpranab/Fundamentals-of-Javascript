//Control flow - control the code execute
//condition
//if 
/*
if(true){
console.log("if statement executed");
}
*/

//if else
/*
if(3<5){
console.log("comes true");
}else{
console.log("comes false");
}
*/

//if, if else, else
/*
var age = prompt("tell yr age");
if(age >= 50){
console.log("ur old");
}else if(age < 50 && age >= 30){
console.log("ur under 50");
}
else if(age < 30 && age >= 18){
console.log("ur young");
}else{
console.log("no result for invalid input");
}
*/


//problem:find the largest number
/*
var n1 = prompt("First number:");
var n2 = prompt("Second number:");
var n3 = prompt("Third number:");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

if(n1 >= n2 && n1 >=n3){
    console.log(n1 + "is largest number");
}else if(n2 >= n1 && n2 >=n3){
    console.log(n2 + "is largest number");
}else{
    console.log(n3 + "is largest number");
}
*/
//now use on this - Nested if
/*
var n1 = prompt("First number:");
var n2 = prompt("Second number:");
var n3 = prompt("Third number:");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

if(n1 >= n2){
    if(n1 >= n3){
        console.log(n1 + "is largest number");
    }
    else{
        console.log(n3 + "is largest number");
    }
}else{
    if(n2 >= n3){
        console.log(n2 + "is largest number");
    }
    else{
        console.log(n3 + "is largest number");
    }
}
*/

//Exercise:Result
/*
var percentage = 60;
percentage = parseInt(percentage);

if(percentage >= 80 && percentage <=100){
    console.log("Start marks");
}else if(percentage >= 60 && percentage <=80){
    console.log("1st division");
}else if(percentage >= 40 && percentage <=60){
    console.log("2nd division");
}else if(percentage >= 30 && percentage <=40){
    console.log("Normal pass");
}else{
    console.log("No results");
}
*/

//bonus: of condition short carkit evaluation
//check true
//don't
//let a = true;
// if(a == true){
//     console.log(a);
// }
//or
// if(a){
//     console.log(a);
// }

//short carkit evaluation
//it's ised before comming es-6 (default parameter)
// let a = 5;
// a && console.log("5 is true");

//use as default parameter in function
/*
let a;
a || (a = 5);
console.log(a);
*/