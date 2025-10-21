let nameArr = [];
let nameTable = document.getElementById("nameTable");
function addName() {
  let nameInput = document.getElementById("nameInput");
  let nameTable = document.getElementById("nameTable");
  let message = document.getElementById("message");

  let inputName = nameInput.value.trim();
  let lowerName = inputName.toLowerCase();
  if (inputName === "") {
    message.textContent = "Please enter a name.";
    return;
  }

  let nameExists = nameArr.some(
    (item) => item.toLowerCase() === lowerName
  );

  if (nameExists) {
    message.textContent = "This name has already been used.";
    return;
  }

  message.textContent = "";
  nameArr.push(inputName);
  nameTable.style.display = "table";
  updateTable(); 

  nameInput.value = "";
}

function updateTable() {
  let tableBody = document.getElementById("tableBody");
 
  tableBody.innerHTML = "";

  nameArr.forEach((item, index) => {
    tableBody.innerHTML += `
      <tr class="fade-in">
        <td>${index + 1}</td>
        <td>${item}</td>
        <td>
          <button onclick="del(${index})" 
            style="background-color: red; padding: 12px 15px; border: none; border-radius: 5px; color: white;">
            Delete
          </button>
        </td>
      </tr>
    `;
  });

}

function del(index) {
  nameArr.splice(index, 1);
  updateTable();
}
