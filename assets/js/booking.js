let fullNameInput = document.getElementById("fullName");
let emailInput = document.getElementById("email");
let phoneNumberInput = document.getElementById("phoneNumber");
let personNumberInput = document.getElementById("personNumber");
let pickDateInput = document.getElementById("pickDate");
let pickTimeInput = document.getElementById("pickTime");
let buttonSubmit = document.getElementById("btn");
let form = document.getElementById("register");
let fullNameError = document.getElementsByClassName("fullNameError")[0];
let emailError = document.getElementsByClassName("emailError")[0];
let phoneNumberError = document.getElementsByClassName("phoneNumberError")[0];
let personNumberError = document.getElementsByClassName("personNumberError")[0];
let pickDateError = document.getElementsByClassName("pickDateError")[0];
let pickTimeError = document.getElementsByClassName("pickTimeError")[0];

// define and declare and empty errors object

let error = {};
// adding listener event to the submit btn
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // function to validate the form fields before submitting
  checkEmpty();
});

// validate empty fields and set error object

function checkEmpty() {
  // loop and removing all key and value fields in the errors object
  for (let key in error) {
    delete error[key];
  }
  //set all in fullname, email, phonenumber etc to display none
  fullNameError.style.display = "none";
  emailError.style.display = "none";
  phoneNumberError.style.display = "none";
  personNumberError.style.display = "none";
  pickDateError.style.display = "none";
  pickTimeError.style.display = "none";

  // remove all the errors class "border-red-500 classes"
  fullNameInput.classList.remove("border-red-500");
  emailInput.classList.remove("border-red-500");
  phoneNumberInput.classList.remove("border-red-500");
  personNumberInput.classList.remove("border-red-500");
  pickDateInput.classList.remove("border-red-500");
  pickTimeInput.classList.remove("border-red-500");

  // remove white spaces from every input field
  let fullNameValue = fullNameInput.value.trim();
  let emailValue = emailInput.value.trim();
  let phoneNumberValue = phoneNumberInput.value.trim();
  let personNumberValue = personNumberInput.value.trim();
  let pickDateValue = pickDateInput.value.trim();
  let pickTimeValue = pickTimeInput.value.trim();

  // check if all inputs are empty then add new  error keys
  if (fullNameValue === "") {
    error.fullName = "Full Name is requuired";
  }
  if (emailValue === "") {
    error.email = "Email is required";
  }
  if (phoneNumberValue === "") {
    error.phoneNumber = "Phone Number is required";
  }
  if (personNumberValue === "") {
    error.personNumber = "Number of person required";
  }
  if (pickDateValue === "") {
    error.pickDate = "Date is required";
  }
  if (pickTimeValue === "") {
    error.pickTime = "Time is required";
  }

  //validate the inputs
  if (fullNameValue !== "") {
    if (!fullNameValue.match(/^[a-zA-Z0-9]+$/)) {
      error.fullName = "Full Name must be letters only";
    }
  }
  if (emailValue !== "") {
    if (!emailValue.match(/^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/)) {
      error.email = "Email must be a valid email";
    }
  }
  if (phoneNumberValue !== "") {
    if (!phoneNumberValue.match([a - zA - Z][a - zA - Z0 - 9])) {
      error.phoneNumber = "Phone number can't be letter";
    }
  }
  if (personNumberValue !== "") {
    if (!personNumberValue.match([a - zA - Z][a - zA - Z0 - 9])) {
      error.personNumber = "Have to be a number";
    }
  }

  //adding error of error message
  if (Object.keys(error).length > 0) {
    displayError();
  } else {
    buttonSubmit.value = "submitting...";
    buttonSubmit.setAttribute("disabled", "disabled");

    //set a delay of 2seconds
    new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(submitForm());
      }, 2000);
    });
  }
}

// display errors respectively to the span html classses
function displayError() {
  //setting errors

  if (error.fullName) {
    fullNameInput.classList.add("border-red-500");
    fullNameError.style.display = "block";
    fullNameError.innerHTML = error.fullName;
  }
  if (error.email) {
    emailInput.classList.add("border-red-500");
    emailError.style.display = "block";
    emailError.innerHTML = error.email;
  }
  if (error.phoneNumber) {
    phoneNumberInput.classList.add("border-red-500");
    phoneNumberError.style.display = "block";
    phoneNumberError.innerHTML = error.phoneNumber;
  }
  if (error.personNumber) {
    personNumberInput.classList.add("border-red-500");
    personNumberError.style.display = "block";
    personNumberError.innerHTML = error.personNumber;
  }
  if (error.pickDate) {
    pickDateInput.classList.add("border-red-500");
    pickDateError.style.display = "block";
    pickDateError.innerHTML = error.pickDate;
  }
  if (error.pickTime) {
    pickTimeInput.classList.add("border-500-red");
    pickDateError.style.display = "block";
    pickTimeError.innerHTML = error.pickTime;
  }
}
