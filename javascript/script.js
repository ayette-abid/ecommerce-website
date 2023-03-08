// Declare the check function in the global scope
function validform() {
  // Get the value of the input field
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  var rpass = document.getElementById("rpass").value;

  // Check if the input field is empty
  var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  if (!regEmail.test(email)) {
    alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }
  if (pass.length < 8) {
    // Display an error message
    alert("enter correct password");

    return false;
  }
  if (pass.length != rpass.length) {
    alert("enter correct password");

    return false;
  }

  // If the input field is not empty, allow the form to be submitted
  return true;
}




