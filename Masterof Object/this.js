//this keyword

const myObj = {
    name: "pranab",
    getFullName: function(){
        //console.log(this);
        return "Me." + this.name;
    }
}
// console.log(myObj);
// console.log(myObj.getFullName());



const anotherObject = {
  name: "rajav"
}
anotherObject.getFullName = myObj.getFullName;
console.log(anotherObject.getFullName);



console.log(myObj.getFullName());
console.log(anotherObject.getFullName());



/*
//detect window
function add(a, b){
    console.log(this); //detect window
    return a+b;
}
add(5, 6);

anotherObj.sum = add;
console.log(sum);         //call depend on obj
*/