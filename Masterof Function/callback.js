//callback function
//use a function as a parameter in a another function


function explainCallback(name, age, task){
    console.log("Hello", name);
    console.log("Your", age);
    task();
}

function washHand(){
    console.log("U wash hand");
}
function takeShower(){
    console.log("U take shower");
}

//call
explainCallback("Pranab", 21, washHand);
explainCallback("Rajav", 22, takeShower);




/*
setTimeout(function(){
    console.log("Hello programmer");
}/, 5000);
*/
