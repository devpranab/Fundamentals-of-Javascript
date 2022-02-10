//Control flow -
//loop

// for loop - repeatable working
// var i = 0;
// for(var i = 0; i<=10; i++){
// console.log(i);
// }

// var i = 10;
//  for(var i = 10; i>=1; i--){
//  console.log(i);
//  }

/*
let numbers = [4,6,1,8,4,6,7];
for(var i = 0; i<numbers.length; i++){
    var element = numbers[i];
    console.log(element);
}
*/

// while loop
/*
var number = 0;
while(number <= 15){
// number = number + 1
// or
number++
console.log(number);
}
*/

// do while loop
/*
var i = 1;
do{
    console.log("value of i" + i);
    i++
}while(number <= 5)
*/

//more while loop
//print 1 to 10
/*
var i = 1;
while(i <= 10){
    console.log(i);
    i++
}
*/

//use if in loop
/*
var i = 1;
while(i <= 10){
    if(i == 4){
    console.log("value of i " + i);  
    }
    console.log(i); 
    i++
}
*/

//sum of 1 to 10
/*
var i = 1;
var sum = 0;
while(i <= 10){
    //console.log(i);
    sum = sum + i;
    i++; 
}
console.log(sum); //55
*/

//sum of 1 to 10
/*
var i = 1;
var sum = 1;
while(i <= 10){
    //console.log(i);
    sum = sum * i;
    i++; 
}
console.log(sum); //3628800
*/

//Nested loop
// for(let a=1; a<=5; a++){
//     for(let b=1; b<=a; b++){
//         console.log(b + "");      
// }
// console.log("<br>");
// }

// for(let a=5; a>=1; a--){
//     for(let b=a; b>=1; b--){
//         console.log(b + "");      
// }
// console.log("<br>"); 
// }

//new shortcut way to iterating
//for in -get index-value - string,array,object
//for of -get index- string,array

// let str = "i am a good programmer";
// let arr = ["p", "s", "m", "k"];
// let obj = {
//     name: "pranab",
//     from: "india"
// }
/*
for (const key in str) {
console.log(`index ${key} and value ${str[key]}`);        
}
*/
/*
for (const key of str) {
    console.log(`index ${key}`);        
    
}
*/
/*
for (const key in arr) {
    console.log(`index ${key} and value ${arr[key]}`);        
}
*/

/*
for (const key in obj) {
    console.log(`property ${key} and value ${obj[key]}`);        
}
*/
/*
for (const key of obj) {
    console.log(`property ${key} and value ${obj[key]}`);        
}
*///error


//Infinity
// console.log(5/0);

//negetive infinity
// console.log(-5/0);