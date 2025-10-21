let guessArr =[];
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

    let savedGuess = 5;

    function checkGuess(){
      if(guessInp.value === ''){
        alert('Enter a guess')
      }

      let comp = {
        userGuess: Number(guessInp.value),
        guessNum: '',
        trials: '',
      }
      comp.guessNum = randomNumber;
      comp.trials = savedGuess - 1;
      savedGuess = comp.trials;
      guessArr.push(comp);

      
      if(comp.userGuess < comp.guessNum && comp.trials > 0){
        alert(`Oops, try a greater number, you have ${comp.trials} guesses left`)
      }else if(comp.userGuess > comp.guessNum && comp.trials > 0){
         alert(`Oops, try a lesser number, you have ${comp.trials} guesses left`)
      }else if(comp.userGuess === comp.guessNum && comp.trials > 0) {
        alert ('You wins!');
        guessArr =[];
        savedGuess = 5; 
      }else if(comp.trials == 0 && comp.userGuess !== comp.guessNum) {
        alert(`You lose! The number was ${comp.guessNum}`);
        guessArr = [];
        document.getElementById('guessInp').disabled = true;
        document.getElementById('btnGuess').disabled = true;
      }
      console.log(guessArr);
    }

   
    //   document.getElementById("guess").value = "";
    // }