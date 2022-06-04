/** This js file implements the validation check feature that checks for empty inputs on the checkout page */

const checkoutBtn = document.querySelector(".proceed-payment-btn");
const billingError = document.querySelector(".billing-error");
const errorMsg = document.querySelector(".billing-error span");
const fNameInput = document.querySelector("#first-name");
const lNameInput = document.querySelector("#last-name");
const emailInput = document.querySelector("#email");
const requiredInputs = document.querySelectorAll("input[required='required']");
const requiredSelects = document.querySelectorAll("select[required='required']");

/* constants */
const EMAIL_FORMAT = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/g;
const INVALID_NAME_INPUT = /[\W\d]+/g;

/* the listener checks if all the required inputs and selections are filled in before proceeding */
checkoutBtn.addEventListener("click", (e) => {
  let message = [];
  /* checks if all the selects/drop down are selected */
  for (select of requiredSelects) {
    if (select.value.length === 0) {
      message.push("Please fill in all the required sections.");
      e.preventDefault();
      break;
    }
  }

  /* checks if all the required fields are filled in. Push the error message only when every required selects are selected, otherwise there will be duplicated error messages */
  for (input of requiredInputs) {
    if (input.value.length === 0) {
      if (message.length > 0) {
        break;
      }
      message.push("Please fill in all the required sections.");
      e.preventDefault();
      break;
    }
  }

  /* checks if first name does not contain invalid characters like numbers */
  if (fNameInput.value.match(INVALID_NAME_INPUT)) {
    message.push("Please enter a valid First Name.");
    e.preventDefault();
  }
  /* checks if last name does not contain invalid characters like numbers */
  if (lNameInput.value.match(INVALID_NAME_INPUT)) {
    message.push("Please enter a valid Last Name.");
    e.preventDefault();
  }
  /* checks if email is in the correct format */
  if (emailInput.value.length > 0 && !emailInput.value.match(EMAIL_FORMAT)) {
    message.push("Please enter a valid Email Address.");
    e.preventDefault();
  }
  /* display the error messages if and only if there is invalid input or empty input in the required fields, otherwise keep proceeding */
  if (message.length > 0) {
    errorMsg.innerText = message.join("\n");
    billingError.classList.add("billing-error--display");
    e.preventDefault();
  }
})