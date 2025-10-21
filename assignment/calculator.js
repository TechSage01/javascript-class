 
let firstDisplay = document.getElementById('display');
let secondDisplay = document.getElementById('display2');
let oper = '';
let firstValue = '';

function append (value){
    firstDisplay.value += value;
    // secondDisplay.value += value;
}

function deleteLast() {
  firstDisplay.value = firstDisplay.value.slice(0, -1);
  secondDisplay.value = secondDisplay.value.slice(0, -1);
}
function clearDisplays(){
    firstDisplay.value = '';
    secondDisplay.value = '';
    oper = '';
    firstValue = '';
}
function clearinputDisplay() {
    firstDisplay.value = '';    
}


function operator(operators){
    oper = operators;
    firstValue = Number(firstDisplay.value); 
    secondDisplay.value = firstDisplay.value + operators;
    firstDisplay.value = '';
}

function canCalculate(){
    let secondValue = Number(firstDisplay.value);
    let result;

    if (oper == '+') {
    result = firstValue + secondValue;
    } else if (oper == '-') {
    result = firstValue - secondValue;
    }else if (oper == 'x' || oper === '*') {
        result = firstValue * secondValue;
    } else if (oper == '÷' || oper === '/') {
        result = firstValue / secondValue;
    } else if (oper == '%') {
        result = firstValue % secondValue;
    } else if (oper == '√'){
        result = Math.sqrt(Number(secondValue));
    }else if (oper == 'x²'){
        result = Number(secondValue) **2;
    }else if(oper == '1/'){
        result = (Number(secondValue)=== 0) ? 'Error': 1/ Number(secondValue);
        // console.log('hiiiii');
    }else if(oper == '±'){
        result = -Number(secondValue)
    }

  secondDisplay.value = `${firstValue} ${oper} ${secondValue} =`;
  firstDisplay.value = result;

}























// let firstDisplay = document.getElementById('display');
// let secondDisplay = document.getElementById('display2');

// function append(value) {
//   firstDisplay.value += value;
//   secondDisplay.value += value;
// }

// function clearDisplay() {
//   firstDisplay.value = '';
//   secondDisplay.value = '';
// }

// function deleteLast() {
//   firstDisplay.value = firstDisplay.value.slice(0, -1);
//   secondDisplay.value = secondDisplay.value.slice(0, -1);
// }

// function canCalculate() {
//   try {
//     const result = eval(firstDisplay.value);
//     secondDisplay.value = `${firstDisplay.value} = ${result}`;
//     firstDisplay.value = result;
//   } catch {
//     secondDisplay.value = 'Error';
//     firstDisplay.value = '';
//   }
// }






































// const display = document.getElementById('display-2');

// function append(value) {
//   display.value += value;
// }

// function clearDisplay() {
//   display.value = '';
// }

// function deleteLast() {
//   display.value = display.value.slice(0, -1);
// }

// function calculate() {
//   try {
//     display.value = eval(display.value);
//   } catch {
//     display.value = 'Error';
//   }
// }
