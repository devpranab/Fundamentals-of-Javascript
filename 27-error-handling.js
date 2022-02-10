// Error handling:
//steps:
//try - what`s error
//catch - what type of error
//finally - finally code run inside
//throw - custom error generate
// test(); // test is not defined -error

/*
console.log("before error");
try{
    test();
}catch(err){
    //console.log(err);
    console.log(err.message);
    console.log(err.type);
    console.log(err.name);
}finally{
    console.log("finally code run inside");
}
console.log("after error");
*/


//custom error generate
/*
let a = 20;

try{
    if(a>9) throw "Too Big"
    if(a<9) throw "Too Small"
}catch(err){
    console.log(err);
}
*/