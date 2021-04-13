//closures examples
// function outer() {
//     var a = 10;

//     function inner() {
//         console.log(a);
//     }
//     inner();
// }
// outer();

//setTimeout+closures example
function x() {
    for (var i = 1; i <= 5; i++) { //replace let with var
        setTimeout(function() {
            console.log(i);
        }, i * 1000)
    }
    console.log("closures")
}
x();