let signupForm = document.getElementById("signupForm");
let loginForm = document.getElementById("loginForm");

function showLogin() {
  signupForm.classList.remove("active");
  loginForm.classList.add("active");
}

function showSignup() {
  loginForm.classList.remove("active");
  signupForm.classList.add("active");
}
signupForm.addEventListener("submit", function (e) {
  e.preventDefault(); 
//   validateForm();
});

loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); 
//   validateloginForm();
});
function validateForm() {
   const firstname = document.getElementById("firstname").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (firstname === "" || surname === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
        // return false;
    }

    if (password !== confirmPassword) {
        alert("Incorrect email and password.");
        // return false;
    }

    const user = {
        firstname,
        surname,
        email,
        password,
   };
   localStorage.setItem("user", JSON.stringify(user));

    alert("Form submitted successfully!");
    window.location.href = "./calculator.html";
   
}

function validateloginForm() {
    const email = document.getElementById('email2').value;
    const password = document.getElementById('password2').value;

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return false;
    }
    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
    alert("No user found. Please sign up first.");
    return;
  }

   if (email === storedUser.email && password === storedUser.password) {
    alert("Login successful!");

    window.location.href = "./calculator.html"; 
  } else {
    alert("Incorrect email or password.");
  }
}