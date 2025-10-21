let cardArr = [];
let randomNumber;


let codeInp = document.getElementById('codeInp');
let rechargeInput = document.getElementById('rechargeInput');
let  network = document.getElementById("select");
let amount = document.querySelector(".select-div")

function generateCode() {
    randomNumber = Math.floor(100000000000000 + Math.random() * 900000000000000);
    codeInp.value = randomNumber;
    // console.log(codeInp);
}
function savePin(){
    if(codeInp.value.trim() === ""){
        alert('input a pin')
    }
    let user = {
        network : network.value,
        amount: amount.value,
        pin: '',
        status: 'not used yet',
        dateCreated: new Date(). toLocaleDateString(),
        dateUsed : 'unused',
    };

    if(network.value === "mtn") {
        user.pin === `*555*${codeInp.value} #`;
    }else if(network.value === "glo") {
        user.pin === `*777*${codeInp.value} #`;
    }else if(network.value === "airtel") {
        user.pin === `*126*${codeInp.value} #`;
    }else if(network.value === "9mobile") {
        user.pin === `*222*${codeInp.value} #`;
    }else{
        alert('select a valid network');
        return;
    }

    cardArr.push(user);
    console.log(cardArr);

    updateUI();

    codeInp.value ="";
}
function updateUI() {
    let tableBody = document.getElementById("tableBody")
    tableBody.innerHTML = '';
    
    cardArr.forEach((item, index) => {
        tableBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.network.toUpperCase()}</td>
                <td>${item.amount}</td>
                <td>${item.pin}</td>
                <td>${item.status}</td>
                <td>${item.dateCreated}</td>
                <td>${item.dateUsedn}</td>
                <td>
                    <button onclick="del(${index})" style="background-color: red; padding: 5px 10px; border: none; border-radius: 5px; color: white;">Delete</button>
                </td>
            </tr>
        `
    });
}
function del(index){
    cardArr.splice(index,1)
    updateUI();
}

function rechargeCard(){
    let enteredPin = rechargeInput.value.trim();
    let found = false;
    if (item.pin === enteredPin && item.status == 'not used yet') {
        item.status === "Used";
        item.dateUsed === new Date().toLocaleDateString();
        found = true;
        alert(`Recharge Succesful on ${item.network} of ${item.amount}`)
    }
}