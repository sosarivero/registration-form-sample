let pwd = document.querySelector("#password");
let pwdRepeat = document.querySelector("#confirm_password");
let errorMsg = document.createElement("span");

errorMsg.textContent = "* Password does not match";
errorMsg.classList.add("error");

pwdRepeat.addEventListener("keyup", () => {
  if (pwdRepeat.value != pwd.value) {
    pwdRepeat.setCustomValidity("Passwords must match!");
    // Appends the error message to the <li> element that holds the input.
    pwdRepeat.parentNode.appendChild(errorMsg);
  } else {
    pwdRepeat.setCustomValidity("");
  }
});
