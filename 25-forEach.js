//forEach f()
//array iterating using forEach f()

//let namesFd = ["P", "S", "V", "W", "X", "K"];

//1st parameter: item
//2nd parameter: index
//3rd parameter: array
/*
namesFd.forEach(function(v,i){
console.log(`index: ${i} & value: ${v}`);
});
*/

//or
let namesFd = ["P", "S", "V", "W", "X", "K"];
let keep = function(v,i){
    console.log(`index: ${i} & value: ${v}`);
};
namesFd.forEach(keep);