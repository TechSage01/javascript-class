// functions -- are block of scope that performs a specific task.

// 1. Regular/Named function-- thay are written by using the function keyword, followed by a (), and a {}.

function sayHi() {
    console.log('Hey!');
}
sayHi();  // invoking or calling or function.

// 2. Arrow function-- is a concise way or shorthand of writing a function.
// ()=>{}.

const greet = ()=>{
    console.log('hello world');
    
}

greet()

Math.floor(Math.random() * 56647478)
// 3.A  callback function

// setTimeout
// setInterval 

const myInterval =  setInterval(()=>{
    console.log('Ibrahim should buy me water');
}, 5000);
// clearInterval(myInterval) // used to clear interval 

let myTimeout = setTimeout(()=>{
    console.log('JavaScript is Logical');
    
}, 6000)


// Find Array

let fruits = ['carrot', 'orange', 'pawpaw', 'banana']
console.log(fruits);
console.log(fruits[0]);

let result =  fruits.find((items)=> items =='pawpaw')
console.log(result);

// Scope 
// it is THE Resuable value ofa function 
// it is also the Symmetrical arrangement of code 

// global scope variable--- are variables that are declared outside a function block and they are reused in any part of the code .

// 2. local scope variable--- are variables that are declared inside a function scope, and they are  limited within the scope.

let userName = 'Abdulsalam';   // g/obal scope
function getUsername(){
    console.log(userName);
    userName = 'Adijat'
    // console.log(userName);`
    
}
