let Inp = prompt();

if((Inp >= 'a' && Inp <= 'z')){
    if ('aeiou'.includes(Inp)) {
        console.log('it is a vowel');
    }else{
        console.log('it is a consanant');
    }
}else if(Inp >= 0 && Inp <= 9){
    console.log(`${Inp} is a Number`);
}else{
    console.log('it is a character');
}

// console.log(vowel);
