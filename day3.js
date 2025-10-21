let apple = 16;

let currentYear = apple++;
console.log(currentYear);
console.log(apple);

let previousYear = --apple;
console.log(previousYear);

let year24 = previousYear--;
console.log(year24);
console.log(previousYear);

let year23 = ++previousYear;
console.log(year23);
 
// iv. comparision operators 

let firstColor = 'green';
let secondColor ='blue';
let thirdColor = 'green';
let forthColor = 'red';

let num1 = 10;
let num2 = '10';
let num3 = 20;
console.log( num1 == num2 );
console.log(num1 === num2);

console.log(num1 > num2);
console.log(num1 >= num2);

console.log(num1 <= num2);
console.log(num1 < num2);

console.log(num1 != num2);
console.log(num1 !== num2);

console.log(firstColor == secondColor);
console.log(firstColor == thirdColor );
console.log(firstColor === thirdColor);

// v. logical operators 

console.log(true && false);
console.log(false && false);
console.log(false && true);
console.log(true && true);

console.log(true || false);
console.log(false || true);
console.log(false|| false);
console.log(true|| true);

// vi. ternary operator
let age = 18;
let isOldEnough = age >= 108 ? "Yes, she can vote!" : "wait till you're old enough";
console.log(isOldEnough);

// console.log(age, isOldEnough);


let userObj = {
    name: 'Banjo',
    age: 46,
    gender: 'male',
    isAlive: true ? "yes he is Alive" : "no he his dead"
    
}
console.log(userObj.isAlive);


// vii. conditional statement
// if(), else if() and else

let salamColor = 'black';
let belloColor = 'charcoal';

if (salamColor != 'yellow' || 'black'){
    console.log('true');
    
} else {
    console.log('false');
    
}


let carModel1 = 'Benz';
let carModel2 = 'Ford';
let carModel3 = 'BMW';

if(carModel1 == 'mercedez'){
    console.log(carModel1);
    console.log('Stop sleeping');
} else if(carModel2 == 'Ford'){
    console.log('I am Ford');
} else{
    console.log("I don't know");
}


// Assignment
// write a function that checks if a user is eligible to vote , to drive if the age of the user is 20 and they are 6ft tall 
// 2. write a function that returns  the sum of two number 