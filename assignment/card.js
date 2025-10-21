
let cardArr = [];
let randomNumber;

let codeInp = document.getElementById("codeInp");
let rechargeInput = document.getElementById("rechargeInput");
let network = document.querySelector("select[name='network']");
let amount = document.querySelector(".select-div");


function generateCode() {
  randomNumber = Math.floor(100000000000000 + Math.random() * 900000000000000);
  codeInp.value = randomNumber; 
}

function savePin() {
  if (codeInp.value.trim() === "") {
    alert("Generate a pin first");
    // return; 
  }

  let user = {
    network: network.value,
    amount: amount.value,
    pin: "",
    status: "Not used yet",
    dateCreated: new Date().toLocaleDateString(),
    dateUsed: "Unused",
  };

  if (network.value === "mtn") {
    user.pin = `*555*${codeInp.value}#`;
  } else if (network.value === "glo") {
    user.pin = `*777*${codeInp.value}#`;
  } else if (network.value === "airtel") {
    user.pin = `*126*${codeInp.value}#`;
  } else if (network.value === "9mobile") {
    user.pin = `*222*${codeInp.value}#`;
  } else {
    alert("Select a valid network");
    return;
  }

  cardArr.push(user);
  console.log(cardArr);

  updateUI();

  codeInp.value = "";
}

function updateUI() {
  let tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  cardArr.forEach((item, index) => {
    tableBody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${item.network.toUpperCase()}</td>
        <td>${item.amount}</td>
        <td>${item.pin}</td>
        <td>${item.status}</td>
        <td>${item.dateCreated}</td>
        <td>${item.dateUsed}</td>
        <td>
          <button onclick="del(${index})" style="background-color: red; padding: 5px 10px; border: none; border-radius: 5px; color: white;">Delete</button>
        </td>
      </tr>
    `;
  });
}

function del(index) {
    cardArr.splice(index,1)
    updateUI();
}

// function rechargeCard(){
//     let enteredPin = rechargeInput.value.trim();
//     let found = false;
// }



function rechargeCard() {
  let enteredPin = rechargeInput.value.trim();
  let found = false;

  cardArr.forEach((item) => {
    if (item.pin === enteredPin && item.status === "Not used yet") {
      item.status = "Used";
      item.dateUsed = new Date().toLocaleDateString();
      found = true;
      alert(`Recharge successful on ${item.network} for ${item.amount}`);
    } else if (item.pin === enteredPin && item.status === "Used") {
      found = true;
      alert("This pin has already been used!");
    }
  });

  if (!found) {
    alert("Invalid recharge pin");
  }

  rechargeInput.value = "";
  updateUI();
}
