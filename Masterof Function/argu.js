//arguments
//arguments object - array like object
/*
function addNumber(a, b){
   return a + b;
}
let result = addNumber(7,5); //7,5 is arguments
console.log(result);
*/

function addNumber(a, b){
    //console.log(arguments); //arguments object
    let sum = 0;
    for(let i=0; i<arguments.length; i++){
        let num = arguments[i];
        //console.log(num);
        sum = sum + num;
    }
    return sum;
 }
 let result = addNumber(7,5,6,8,10); 
 console.log(result);

 //otherwise we can use spread operator