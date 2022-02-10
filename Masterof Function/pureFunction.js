//pure function vs side effect
/*What is pure function
it's return the same result if given the same arguments
it's doesn't cause any observable side effects
*/

// function sqrt(n){
//     return n*n
// }
// let result = sqrt(6); //always print same result that's why it's pure function
//     result = sqrt(6);
// console.log(result);

var n = 5;
function change(){
    n = 6
}
change(); //heppening side effect thats means change, so it's not pure function
//console.log(n);