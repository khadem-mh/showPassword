// Functions for select elems with id & class
let $ = document;
function _id(id_name) {
  return $.getElementById(id_name);
}

function _class(class_name) {
  return $.getElementsByClassName(class_name);
}

// Select Elems
let togglePassword = _class("toggle-password");
let passwordField = _id("password-field");

// Fire click event on eye icon
//  console.log(togglePassword);
togglePassword[0].addEventListener("click", function () {
  //  console.log('Run');
  if (passwordField.type == "text") {
    passwordField.type = "password";
    togglePassword[0].classList.remove("active");
  } else {
    passwordField.type = "text";
    togglePassword[0].classList.add("active");
  }
})