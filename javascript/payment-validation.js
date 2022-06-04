/** This js file implements the payment input validations (no-allow empty input or alphabets in numerical input sections) 
on the payment page */

const cardNumInput = document.querySelector("#card-number");
const cardHolderInput = document.querySelector("#card-holder");
const cardExpiryInput = document.querySelector("#card-expiry");
const cardCvvInput = document.querySelector("#security-code");
const paymentBtn = document.querySelector(".payment__submit-btn");
const requiredInputs = document.querySelectorAll("input[required='required']");
const paymentError = document.querySelector(".payment-error");
const errorMsg = document.querySelector(".payment-error span");

/* constants */
const CREDIT_CARD_NUMBER_DIGITS = 16;
const CVV_CODE_DIGITS = 3;
const EXPIRY_DATE_FORMAT = /\d{2}\/\d{2}/g;
const FULL_NAME_FORMAT = /^[a-zA-Z ,.'-]+$/g;

const concatInput = (inputType, targetIndex) => {
  inputType.value = inputType.value.substring(0, targetIndex);
} 

const preventInvalidInput = (e, inputType) => {
  const data = Number.parseInt(e.data);
  if (isNaN(data) && e.data !== null) {
    concatInput(inputType, inputType.value.indexOf(e.data));
  }
}

/* the pattern attribute in the html input tag will only check for validation when the information is submitted. So add an event listener to prevent invalid input in the first place */
cardNumInput.addEventListener("input", function(e) {
  preventInvalidInput(e, this);
})

/* the pattern attribute in the html input tag will only check for validation when the information is submitted. So add an event listener to prevent invalid input in the first place */
cardExpiryInput.addEventListener("input", function(e) {
  const data = Number.parseInt(e.data);
  if (isNaN(data) && e.data !== null && e.data !== "/") {
    concatInput(this, this.value.indexOf(e.data));
  }
})

/* the pattern attribute in the html input tag will only check for validation when the information is submitted. So add an event listener to prevent invalid input in the first place */
cardCvvInput.addEventListener("input", function(e) {
  preventInvalidInput(e, this);
})

/* checks if all the required inputs are filled in. also checks if the inputs are valid and reasonable */
paymentBtn.addEventListener("click", (e) => {
  let message = [];
  /* checks if credit card input has 16 digits */
  if (cardNumInput.value.length < CREDIT_CARD_NUMBER_DIGITS) {
    message.push("A valid Credit Card Number should contain 16 digits.");
  } 
  /* checks if card holder section is filled in */
  if (cardHolderInput.value.length === 0) {
    message.push("Card Holder Name is a required field.");
  }
  /* checks if the card holder name is vaid, which it should not contain non-alpha characters */
  if (!cardHolderInput.value.match(FULL_NAME_FORMAT)) {
    message.push("Please enter a valid card holder name.");
  }
  /* checks if the expiry date is in the given format MM/YY */
  if (!cardExpiryInput.value.match(EXPIRY_DATE_FORMAT)) {
    message.push("Please enter in a valid card expiration date format.");
  }
  /* checks if the cvv code input has 3 digits */
  if (cardCvvInput.value.length < CVV_CODE_DIGITS) {
    message.push("A valid Credit Card CVV should contain 3 digits.");
  }
  /* display the error messages if and only if there is invalid input or empty input in required fields, otherwise keep proceeding */
  if (message.length > 0) {
    errorMsg.innerText = message.join("\n");
    paymentError.classList.add("payment-error--display");
    e.preventDefault();
  }
})