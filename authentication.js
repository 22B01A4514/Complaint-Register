	function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var reenterpassword = document.getElementById('confirmpassword').value;
    if (username === '' || password === '' || reenterpassword === '') {
        alert('Please fill in all fields before creating an account.');
    } else if (!isValidEmail(username)) {
        alert('Please enter a valid email address.');
    } else {
        checkPassword();
    }
}

function forgotpassword() {
    
    var password = document.getElementById('password').value;
    var reenterpassword = document.getElementById('confirmpassword').value;
    if (password === '' || reenterpassword === '') {
        alert('Please fill in all fields before creating an account.');
    } else if (!isValidEmail(username)) {
        alert('Please enter a valid email address.');
    } else {
        checkPassword();
    }
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function checkPassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmpassword").value;
    if (password === confirmPassword) {
      alert("Successfully created account!");
    } else {
      alert("Passwords do not match. Please try again.");
    }
  }