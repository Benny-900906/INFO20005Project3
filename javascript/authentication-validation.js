/** This js file implements features that prevent invalid input into each section (e.g. no alphabets in numeric input section) */

const emailInput = document.querySelector(".credential__email");
const passwordInput = document.querySelector(".credential__password");
const confirmationInput = document.querySelector(".credential__password-confirm");
const credentialSubBtn = document.querySelector(".credential__verify");
const authError = document.querySelector(".auth-error");
const errorMsg = document.querySelector(".auth-error span");

/* constants */
const SIGN_UP = "Sign Up";
const MIN_PASSWORD_LENGTH = 8;
const EMAIL_FORMAT = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/g;
const PASSWORD_FORMAT = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

/* checks for input validation in auth section */
credentialSubBtn.addEventListener("click", (e) => {
  let messages = [];

  if (!emailInput.value.match(EMAIL_FORMAT) || emailInput.value.length === 0) {
    messages.push("Please enter a valid Email Address.");
    e.preventDefault();
  }
  if (!passwordInput.value.match(PASSWORD_FORMAT) || passwordInput.value.length < MIN_PASSWORD_LENGTH) {
    messages.push("Your password needs to be at least " + MIN_PASSWORD_LENGTH + " characters with at least one uppercase letter, one lowercase letter and one number.");
    e.preventDefault();
  }

  if (credentialSubBtn.innerText === SIGN_UP) {
    if (confirmationInput.value !== passwordInput.value) {
      messages.push("Your password in Confirm Password should be the same as your password in Password.");
      e.preventDefault();
    }
  }

  if (messages.length > 0) {
    errorMsg.innerText = messages.join("\n");
    authError.classList.add("auth-error--display");
    e.preventDefault();
  }
})

