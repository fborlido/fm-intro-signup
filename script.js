const first = document.querySelector("#first");
const last = document.querySelector("#last");
const email = document.querySelector("#email");
const pass = document.querySelector("#pass");

const validateForm = () => {
  var firstValue = document.forms["form"]["first"].value;
  var lastValue = document.forms["form"]["last"].value;
  var emailValue = document.forms["form"]["email"].value;
  var passValue = document.forms["form"]["pass"].value;

  if (firstValue === "") {
    first.parentNode.classList.add("error");
  }
  if (lastValue === "") {
    last.parentNode.classList.add("error");
  }
  if (emailValue === "") {
    email.parentNode.classList.add("error");
  }
  if (passValue === "") {
    pass.parentNode.classList.add("error");
  }
  if (
    firstValue !== "" &&
    lastValue !== "" &&
    emailValue !== "" &&
    passValue !== ""
  ) {
    first.parentNode.classList.remove("error");
    last.parentNode.classList.remove("error");
    email.parentNode.classList.remove("error");
    pass.parentNode.classList.remove("error");
    alert("Success");
  }
  return false;
};
