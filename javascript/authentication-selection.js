/** This js file implements the transition between login panel and the signup panel on the shooping cart page. Note that the panels
will appear only when the checkout btn is clicked */

const checkoutBtn = document.querySelector(".order-proceed__checkout-btn");
const dialogCover = document.querySelector(".dialog-cover");
const authPanel = document.querySelector(".auth-panel");
const authOptions = document.querySelectorAll(".auth-header__selection");
const credentialInputs = document.querySelectorAll(".credential__input input");
const body = document.body;

checkoutBtn.addEventListener("click", (e) => {
  /* ensures inputs are clean and empty when the auth panel is opened */
  credentialInputs.forEach((input) => {
    input.value = "";
  });
  /* ensures errors/validation texts from the last time disappear when re-open */
  document.querySelector(".auth-error").classList.remove("auth-error--display");
  dialogCover.classList.remove("content__hide");
  authPanel.setAttribute("open", "");
  body.style.overflow = "hidden";
});

/* quits the login/sign-up panel after clicking outside the panel */
dialogCover.addEventListener("click", (e) => {
  if (e.target === dialogCover) {
    e.target.classList.add("content__hide");
    authPanel.removeAttribute("open");
    body.style.overflow = "auto";
  }
});

/* determines which panel (login or signup) panel to display depending on which panel is being requested by the user */
authOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    document.querySelector(".auth-header__selected").classList.remove("auth-header__selected");
    e.target.classList.add("auth-header__selected");
    credentialInputs.forEach((input) => {
      input.value = "";
    });
    /* reset error messages */
    document.querySelector(".auth-error").classList.remove("auth-error--display");
    document.querySelectorAll(".auth-error li").forEach((err) => {
      err.classList.remove("auth-error--display")
    });

    const pswConfirmInput = document.querySelector(".credential__password-confirm");
    const recoverPassword = document.querySelector(".recover__password");
    const authPanelHeader = document.querySelector(".auth-input__title span");
    const credentialKey = document.querySelector(".credential__verify");

    /* if login panel is requested */
    if (e.target === document.querySelector(".auth-header__login")) {
      pswConfirmInput.classList.add("content__hide");
      recoverPassword.classList.remove("content__hide");
      authPanelHeader.innerText = "LOGIN";
      credentialKey.innerText = "Sign In";
    } else {
      pswConfirmInput.classList.remove("content__hide");
      recoverPassword.classList.add("content__hide");
      authPanelHeader.innerText = "SIGN UP";
      credentialKey.innerText = "Sign Up";
    }
  })
});


