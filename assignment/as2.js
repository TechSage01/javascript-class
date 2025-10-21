    let myCurrentValue = 0;
    console.log(myCurrentValue);

    function canCalculate(){
        let firstInp = Number(document.getElementById('inp1'). value);
        let operator = document.getElementById('operator');
        let secondInp = Number(document.getElementById('inp2'). value);
        let answer = document.getElementById('answer');
        let clear1 = document.querySelector('.clear1');
        let clear2 = document.querySelector('.clear2');
        let currentValue = document.getElementById('currentValue');

        if(operator.value == '+') {
            result = firstInp + secondInp;
            
        }else if(operator.value == '-'){
            result = firstInp - secondInp;

        }else if(operator.value == 'x'){
            result = firstInp * secondInp;
        }else if(operator.value == '÷'){
            result = firstInp / secondInp;
        }else{
            alert('invalid operation')
        }
        answer.value = result;

        myCurrentValue = myCurrentValue + result;

        currentValue.innerHTML = `currentValue: ${myCurrentValue}`
        console.log("Current Value:", myCurrentValue);        
        clear1.value = '';
        clear2.value = '';
    }
    function changeUI(){
        let myBtn = document.getElementById("btn");
        console.log(myBtn);
        myBtn.textContent = 'Hello';

        myBtn.style.backgroundColor = 'red';
        myBtn.style.padding= '6px 30px';
        myBtn.style.color='white';

        let myBody = document.getElementById('body')
        console.log(myBody);
        // myBody.style.backgroundColor = 'blue'
        if (myBody.style.backgroundColor == 'red') {
            myBody.style.backgroundColor = 'white';
        }else {
            myBody.style.backgroundColor = 'red';
        }
    }