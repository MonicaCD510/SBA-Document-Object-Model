const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let usernameError = document.getElementById("usernameError");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");

  // clear old errors
  usernameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  if (username === "") {
    usernameError.textContent = "Username is required";
  }

  if (email === "") {
    emailError.textContent = "Email is required";
  }

  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
  }
});