/** This js file implements features that prevent invalid input into each section (e.g. no alphabets in numeric input section) */

const emailInput = document.querySelector(".credential__email");
const passwordInput = document.querySelector(".credential__password");
const confirmationInput = document.querySelector(".credential__password-confirm");
const loginRequiredInputs = [emailInput, passwordInput];
const registerRequiredInputs = [emailInput, passwordInput, confirmationInput];
const credentialSubBtn = document.querySelector(".credential__verify");
/* constants */
const SIGN_IN = "Sign In";
const SIGN_UP = "Sign Up";

/* checks for input validation in auth section */
credentialSubBtn.addEventListener("click", (e) => {
  let inputCandidates;
  /* check which proceeding btn is being clicked */
  if (credentialSubBtn.innerText === SIGN_IN) {
    inputCandidates = loginRequiredInputs;
  } else if (credentialSubBtn.innerText === SIGN_UP) {
    inputCandidates = registerRequiredInputs;
  }

  /* checks if all the required fields are filled */
  inputCandidates.forEach((input) => {
    const regex = /^credential__/g;
    const inputType = input.classList[0].replace("credential__", "");
    if (input.value.length === 0) {
      document.querySelector(".auth-error").classList.add("auth-error--display");
      document.querySelector(`.error__${inputType}`).classList.add("auth-error--display");
      e.preventDefault();
    } else {
      document.querySelector(`.error__${inputType}`).classList.remove("auth-error--display");
    }
  })

  /* checks if confirm password and password are the same in the sign up section */
  if (passwordInput.value.length > 0 && confirmationInput.value.length > 0) {
    if (!(passwordInput.value === confirmationInput.value)) {
      document.querySelector(".error__password-inconsistent").classList.add("auth-error--display");
      e.preventDefault();
    } else {
      document.querySelector(".error__password-inconsistent").classList.remove("auth-error--display");
    }
  }
})



