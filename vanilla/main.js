const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent form from submitting

  // get the values from the form fields
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  const errorUsername = document.querySelector("#error-username");
  const errorPassword = document.querySelector("#error-password");

  // validate the form
  if (username === "") {
    errorUsername.style.display = "block";
    return;
  } else {
    errorUsername.style.display = "none";
  }

  if (password === "") {
    errorPassword.style.display = "block";
    return;
  } else {
    errorPassword.style.display = "none";
  }

  // get button by type button
  // const submitButton = document.querySelector("#submit-button");

  // submitButton.value = "Please wait...";

  // setTimeout(() => {
  //   alert("Form submitted successfully!");
  // }, 2000);

  // Send the data to an API

  alert("Form submitted successfully!");
});
