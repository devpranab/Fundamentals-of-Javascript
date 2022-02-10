//switch statement - for more condition
/*
var choice = "b";
var text;
switch(choice){
    case "a" : text = "option 1 selected"
        break;
    case "b" : text = "option 2 selected"
        break;
    case "c" : text = "option 3 selected"
        break;
    case "d" : text = "option 4 selected"
        break;
        default:text = "no option selected"
}
console.log(text);
*/


//Exercise:Calculator tasks
console.log(`Select an option:
01.sum,
02.subtract,
03.multiply,
04.divide`);

let n1 = prompt("Input 1st number");
let n2 = prompt("Input 2st number");
let option = prompt("Input option");
var result = null;

n1 = parseInt(n1);
n2 = parseInt(n2);
option = parseInt(option);

let n1Cond = isNaN(n1);
let n2Cond = isNaN(n2);
let optionCond = isNaN(option);

if(n1Cond || n2Cond || optionCond){
    console.log("Invalid input");
}else{
    switch(option){
       case 1: result =  n1 + n2;
       break;
       case 2: result =  n1 - n2;
       break;
       case 3: result =  n1 * n2;
       break
       case 4: result =  n1 / n2;
       break;
       default:
       break;
    }
    if(result == null){
      console.log("No result");
    }else{
        console.log(result);
    }
}