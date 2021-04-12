/*
everything  in js happen inside EX, js is executed in EX
mmry Comonent  and code component
mmry - fn and value are stored as key value pairs
a:10,
fn:{}
variable env

code-
executed 1 line at at tiimme
thread of execution
where whole js code is executed
one line at a time
synchronourd single threded languagr -line by line
single threaded- one line at time


video-2
var n =2;
function square(num){
    var ans = num*num;
    return ans;
}
var square2=sqaure(n)
var square4= sqaure(4);when you invokde a function a brand new executinn is created

*/
//episode-2
// var n = 2;

// function square(num) {
//     var ans = num * num;
//     return ans;
// }
// var square2 = sqaure(n);
// var square4 = sqaure(4);

//episode-3
//Hoisting in js--you can even access these variables and function even before it is actually inside your code.
//get the initialized values even before initialized
//even before the js code starts executing,memory is created to each n every value and function.
//basic
// var x = 10;

// function getName() {
//     console.log("aaaa");
// }
// console.log(x);
// getName();

//--next
//console.log(x); //output-undefined.....trying to get the initialized values even before initialized--allocate the memory with a placeholder undefined.
//console.log(y);  //ot defined-no defined in program but you are trying to access the value,
//js will throw an error when js engine try to find the variable even before declaration
// var x = 10;
// console.log(getName)
// getName();


// function getName() {
//     console.log("Javascript");
// }
// console.log(x);

//getName as the arrow function
// var x = 10;
// console.log(getName)
// getName();


// var getName = () => {
//     console.log("Javascript");
// }
//call stack
// var x = 7;

// function getName() {
//     console.log("call stack")
// }
// getName();
// console.log(x);
// console.log(getName)



/////////////////how function works in JS/////////////////////////////
// var x = 1;
// b();
// a();
// console.log(x); //output- 10,100,1

// function a() {
//     var x = 10;
//     console.log(x);
// }

// function b() {
//     var x = 10;
//     console.log(x);
// }

// shortest JS program///////--blank js file..empty file
//window is a gloabl object which is created along with the GEC,
//when any JS program in executed GEC is created,window object is created
//at the global level this===window,,,this is the global object
// x = 45;
// a = 10;
// b = 20; //this variable is attached with global object---window.x,,,,window.a
// var a = 10;

// function b() {
//     var x = 10;
// }
// console.log(window.a);
// console.log(a);
// console.log(window.x); //this.x===window.x

//*************episode 6*************** */
////////////undefined vs not defined//////////////////
//undefined- placeholder which is allocated to variable while creating memory in the JS
// console.log(x);
// var x = 10;
// console.log(x);
// console.log(y);
//js is loosely coupled..var x=10,x='ajay';so js is also called looely typed language.

///////////////////////scope and Lexical environment ep-7//////////////////
//ex-01
// function a() {
//     console.log(b); //js enginee first try to finndout b in local memory space if it does not find,then it will check in its parent env.

// }
// var b = 10;
// a();
//ex-02
// function a() {
//     c();

//     function c() {
//         console.log(b);
//     }
// }
// var b = 10;
// a();
//ex-03
// function a() {
//     var b = 10;
//     c();

//     function c() {
//         console.log(b);
//     }
// }
// a();

//ex-04!!!!!!!!!!!!!!!!!!!
//scope means where you can access variable or function
//lexical env-local memeory along with lexical env of its parent.lexical means in hierarchy or in sequence
//in this below function- lexcial env of c function is itself memory space plus lexical env of c's parent.
//if js does not find the variable in the local memory then it goes to the next level of scope chain.this whole chain is also called scope chain
// function a() {
//     var b = 10;
//     c();

//     function c() { //c function is lexically inside a function

//     }
// }
// a();
// console.log(b);

//**********let and const in js*******************//
//what is temporal deadzone?.........are let and const are hoisted in js?--yes......syntax error vs reference error vs type error?...//

//let n const are in TDZ
//TDZ the time after putting the undefined and before initialization the variable.(time from hoisted to initialization)
//to avoid tdz- put the declaration on the top
//reference error - the time when you try to access the variable in tdz it gives ref error.alos gives when you try to access unknnown variable.


//syntax error-
// let a = 10;//possible in var
// let a = 20;
//type error-
// const b = 1000;
// b=100000;
//////////-------Block scope & shadowing in JS----------------////////////////
//block- combining multiple statement into one group,we do it bcoz where JS expects one statement
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }
//can't access let,const outside the block scoped
//shadowing
// var a=10;//check with let and const also
// {
//     var a = 10;//this a variable shadow above a variable.
//     let b = 20;
//     const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }












// //function statement is same as fn declaration
// setTimeout(function() {
//     console.log("timer")
// }, 3000)
// console.log(w);
// var w;

// function a() {
//     console.log("a called");
// }
// a();
// //function expression
// var x = function() {
//     console.log("x called")
// }
// x();
// //fn declaration
// //anonymous function
// function s() {

// }
// //named function expression
// var s = function asd() {
//     console.log(asd);
// }
// s();

// //parameter and argument
// var d = function(params) { //params
//     console.log(params);
// }

// function sdf() {
//     console.log("function as an argument")
// }
// d(sdf); //arguments
// //first class function- the ability to use the js function as values, pass the function as an argument in the functions
// //first class citizen is same as first class function


// //arrow function
// var z = () => {
//     //console.log("arrow function");
//     return "hello";
// }
// console.log(z());


// //callback function - the function which we pass into another function
// //due to call back we can do async thing in JS
// //example of call back function
// function xy(param) {
//     console.log(param);
// }
// xy(function sdf() {
//     console.log("sdf");
// });

// // document.getElementById("btn").addEventListener("click", function sdes() {
// //     console.log("btn clicked");
// // });

// function a() {
//     console.log("a calling");
// }
// a();
// console.log("end");

// //web api - local storage,set Timeout(),console,location,fetch(),
// //call stack
// //microtask queue - add only those call back function which contain or return promise or mutable preserve
// //call back queue -other than else

// //core JS questions
// //ployfill for bind function
// let name = {
//     firstname: "Ajay",
//     lastname: "Kumar",

// }
// let printName = function(hometown, state) {
//     console.log(this.firstname + this.lastname + "," + hometown + state);
// }

// let printMyName = printName.bind(name, "hisar");
// printMyName("haryana");
// //own bind method
// function.prototype.myBind = function(...args) {
//     let obj = this;
//     params = args.slice(1);
//     return function(...args2) {
//         obj.call(args[0], [...params, ...args2]);
//     }
// }

// let printMyName2 = printName.myBind(name, "hisar");
// printMyName2("haryana");
//debouncing vs throttling
//used for optimization of web app- it happens by limiting the rate of particular function execution.
//debouncing- the difference between the two keystroke event is greater than some fixed time(>300ms), only then call the api.
//throttling - the difference between the two api call is greater than some fixed time(>300ms), only then call the api.
//example - search bar in e commerce or any other website


//