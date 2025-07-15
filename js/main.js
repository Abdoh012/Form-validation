// Variables
const form = document.querySelector("form"); // Form
const allInputs = document.querySelectorAll(
  "input:not([type=submit]),textarea"
); // Inputs
const spans = document.querySelectorAll("span:last-child"); // Spans that shows while writing
const submitBtn = document.querySelector("input[type=submit]"); // Submit Button
const confirmation = document.querySelector(".confirmation"); // Confirmation Message
let required;
// End of variables

// Functions

// Check input validity
function checkInputValidity() {
  // Add text to span to show the non validation reason
  if (allInputs[0].value === "") {
    spans[0].textContent = "Enter your name";
  } else if (allInputs[1].value === "") {
    spans[1].textContent = "Phone no is required";
  } else if (allInputs[2].value === "") {
    spans[2].textContent = "Email Invalid";
  } else if (allInputs[3].value === "") {
    spans[3].textContent = "Enter a message";
  }

  // Add required class to all inouuts that have no value
  allInputs.forEach((ele, ind) => {
    if (ele.value === "") {
      ele.parentElement.classList.add("required");
    } else {
      ele.parentElement.classList.remove("required");
    }
  });
  // Get the elements that have required class
  required = document.querySelectorAll(".required");
  checkFormValidity();
}

// Check form validity
function checkFormValidity() {
  // Do not submit the form if the textarea has less than 30 characters or the required var has more than 0 value
  if (required.length !== 0 || allInputs[3].value.length < 30) {
    form.onsubmit = (e) => {
      e.preventDefault(); // Show fix error message
      confirmation.textContent = "please fix the error";
    };
  } else {
    confirmation.textContent = ""; // Delete fix error message
    form.submit(); // Submit the form
  }
}

// Check if the name is fulled
function onNameInput() {
  let reg = /\w+ \w+/gi;
  if (reg.test(allInputs[0].value)) {
    spans[0].innerHTML = `<i class="fa fa-check center" aria-hidden="true"></i>`;
  } else spans[0].textContent = "Enter full name";
}

// Check if the phone number has 11 digits
function onPhoneInput() {
  if (allInputs[1].value.length < 11) {
    spans[1].textContent = "Phone no is required";
  } else if (allInputs[1].value.length === 11) {
    spans[1].innerHTML = `<i class="fa fa-check center" aria-hidden="true"></i>`;
  }
}

// Check that email is valid
function onMailInput() {
  let reg = /\w+@\w+.\w+/gi;
  if (reg.test(allInputs[2].value)) {
    spans[2].innerHTML = `<i class="fa fa-check center" aria-hidden="true"></i>`;
  } else spans[2].textContent = "Invalid E-mail";
}

// Check if textarea has more than 30 characters
function onTextareaInput() {
  let chars = 30 - allInputs[3].value.length;
  if (allInputs[3].value.length < 30) {
    spans[3].textContent = `${chars} more characters required`;
  } else
    spans[3].innerHTML = `<i class="fa fa-check center" aria-hidden="true"></i>`;
}
// End of functions
