const numberPhone = document.getElementById("phone-number");
const pass = document.getElementById("password");
const confirmPass = document.getElementById("confirm-password");
const signUp = document.getElementById("sign-up");

const checkPhone = (input) => {
  const regex = /^\+?[1-9][0-9]?\s?\d{9}$/;
  if (!regex.test(input)) {
    numberPhone.classList.add("error-border");
    numberPhone.classList.remove("success-border");
    return false;
  } else {
    numberPhone.classList.remove("error-border");
    numberPhone.classList.add("success-border");
    return true;
  }
};

const checkConfirmPassword = (p1, p2) => {
  if (p1 !== p2) {
    confirmPass.classList.add("error-border");
    confirmPass.classList.remove("success-border");
    return false;
  } else {
    confirmPass.classList.remove("error-border");
    confirmPass.classList.add("success-border");
    return true;
  }
};

signUp.addEventListener("click", (event) => {
  event.preventDefault();

  const isPhoneValid = checkPhone(numberPhone.value);
  const isPasswordMatch = checkConfirmPassword(pass.value, confirmPass.value);

  if (isPhoneValid && isPasswordMatch) {
    console.log("Form is valid. Submitting...");
  } else {
    console.log("Form has errors.");
  }
});
