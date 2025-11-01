
// for loop is used to iterate or loop through an array, or object, or string
// initialization use the key ford for, initialize, condition, 
for(let i = 1; i<= 10; i++){
    console.log(i);
    
};  

let arr = [1,2,3,4,5,6,7,8,9,10];

// for(let index = 10; index >= 1; index--){
//     console.log(index);
    
// }
for(let index = 1; index <= arr.length; index++) {
    console.log(index);
    
}
for(let index = 10; index >= 1; index--){
    console.log(index);
    
}
// Nested loop follows the iteration of the big loop
for(let i = 1; i <= 12; i++){
    for(let j = 1; j <= 12; j++) {
        // console.log(`This is i ${i} This isj  ${j}`);
        console.log(`${i} x ${j} = ${i * j}`);
        
    }
}
// for of 
let str = 'Salam is a black Crock'
console.log(str);
for(let value of str ){
    console.log(value);
}

// for in 
let obj = {
    name: ' Motunrayo',
    age: 17,
    school: 'UniOsun',
    maritalstatus: 'Married'
}
for(let key in obj) {
    console.log(key);
    console.log(obj[key]);
    
    
}
