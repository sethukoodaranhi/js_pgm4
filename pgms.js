// square of a number using named function

// function square(n){
//     var rslt;
//     rslt=Math.pow(n,2)
//     return rslt;
// }
// console.log(square(4))

// square of a number using anonymous function

// var square=function(n){
//     var rslt;
//     rslt=Math.pow(n,2);
//     return rslt;
// }
// console.log(square(2));


// square of a number using constructor

// var square=new Function("n","console.log('in constructor function');return n*n")
//  console.log(square(2))

// square of a number using self invoking function

// (function(n){
//     var rslt;
   
//     rslt=Math.pow(n,2)
//     console.log(rslt)
//     return rslt;
    
// })(7);