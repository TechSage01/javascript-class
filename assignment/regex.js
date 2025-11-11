//regex is a regular expression

// /^\\/  it is a regex

let name = 'ben';
console.log(name);


name = /^ben$\\/
console.log(name);

let phoneReg = /^\+234[0-9]\d{9}$/;
let emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

let phoneInp = document.getElementById('phonenumber');
console.log(phoneInp);

let emailInp = document.getElementById('email');
let passwordInp = document.getElementById('password');


function getDetails() {
  let errorMessage = document.getElementById('error');
  if (!passwordInp.value || !emailInp.value || !phoneInp.value) {
    errorMessage.textContent = 'All fields are required';
    return false;
  }if (phoneReg.test(phoneInp.value) && emailReg.test(emailInp.value) && passwordReg.test(passwordInp.value)) {
    errorMessage.innerHTML = 'Valid details';
    errorMessage.style.color = 'green';
    // return true;
  }
  else {
    errorMessage.innerHTML = 'Invalid details';
    errorMessage.style.color = 'red';
    // return false;
  }
}