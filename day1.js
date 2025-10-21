// There are 3 ways in returnng an output in js
//  1. console.log();
//  2. alert()
//  3. return
//  4.prompt

// alert ('Good morning js nijas')
// varaibkes are containers for storing infirmation
// Naming a avariable , we have diffrent ways of naming our variables
// 1. Hungarian case 
// 2. pascal case e.g user_name
// 3. hebab case 123username, User_Name
// 4.Snake case 
// 5. camel case which is the best method of naming a variable e.g userName, myName,userDetails, fruitArray

// Declaration of Variables
// there are 3 ways of declaring a avariables

// 1.1 using keyword let -- the variable can be redclread and can be re assigned 
let myName;
console.log(myName);

myName= 'Abdulsalam';
console.log(myName);

myName = 'Fav';
console.log(myName);

myName = 'Adijat';
console.log(myName);

// using the keyword const-- you can not redeclae neither can u reassign
const fruit = 'Orange';
console.log(fruit);

console.log(myName);
// 3. using the keyword var 

// DATA TYPES 
// 2 Categories 
// 1. Primitive 

// 1 String

let hisName = 'I am Abdulsalam loves building things that work';
console.log(hisName);

console.log(typeof hisName);
let day = '30';
console.log(day);
console.log(typeof day);

// 2. Number this are float, integer, decimals, whole and even number

let ages = 10;
console.log(ages);
console.log(typeof ages);

userDetails = 'His name is Jackson.' + ' ' + 'He lives at Apata, he is ' + ' ' + ages + ' '
+ ' years old' 
console.log(userDetails);
console.log(typeof userDetails);

let newAge = 30;
let sum = ages + newAge;
console.log(sum);

// Template Literal 

userDetails = `my name is ${myName}, I live at Apata. I am ${newAge} years old.`;
console.log(userDetails);

// iii. Boolean 
let hisAlive = true;
console.log(hisAlive);
console.log(typeof hisAlive);

// iv. null or void

let hisAge = null;
console.log(hisAge);
console.log(typeof hisAge);

hisAge = 1889;
console.log(hisAge);

hisAge = '';
console.log(hisAge);

// v. undefined

let hisDetails;
console.log(hisDetails);



// 2. non Primitive Data types 

// i. Object : these are collections of key value pairs or key pair- values.

let userObj = {
    name: 'Azizarhhh',
    age: 23,
    sheisAlive: true,
    dob: new Date().toLocaleDateString(),
    address: {
        city: 'Manchester',
        country: 'United Kingdom'
    }
};
console.log(userObj);
console.log(typeof userObj);

// 2 ways of manipulaying an object
// 1. using dot notation
// 2. using bracket notation[]

console.log(userObj.name);
// console.log(userObj['name']);
console.log(userObj.age);
console.log(userObj.sheisAlive);
console.log(userObj['dob']);
// console.log(userObj.dob);
// console.log(userObj.address['city']);
console.log(userObj['address']['city']);
// console.log(userObj['address']['country']);
console.log(userObj['address'].country);

// Data DEstructuring 
const {name, age, sheisAlive, dob, address} = userObj;

console.log(name);
console.log(age);

console.log(dob);

console.log(address.city);

console.log(address.country);





// Array are containers for storing values. It is bigger than an object . Arrays have length and indexes. 

let arr = []
console.log(arr);
console.log(typeof arr);

let fruitArr =['orange', 'mango', 'apple', 'cashew', 'watermelon', 'pawpaw' ];

console.log(fruitArr);
fruitArr.push(userObj);
console.log(fruitArr);
console.log(fruitArr[0]);
console.log(fruitArr[0][2]);
console.log(fruitArr[2][3]);
console.log(fruitArr[5]);


