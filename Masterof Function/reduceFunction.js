//reduce function

let arr = [4, 8, 1, 9, 14, 5];

// let sum = arr.reduce(function(prev, curr){
//     return prev + curr;
// },100)
// console.log(sum);

// let max = arr.reduce(function(prev, curr){
//     return Math.max(prev, curr)
// },0)
// console.log(max);

//implimention
function myReduce(arr, eb, ace){
    for(let i=0; i<arr.length; i++){
     acc = eb(ace,arr[i])
    }
    return acc;
}