document.addEventListener('DOMContentLoaded', function () {
  const registerForm = document.getElementById('registerForm');

  registerForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting directly
      if (validateForm()) {
          alert("Registration successful! You can now log in.");
          window.location.href = "login.html"; // Redirect to login after successful registration
      }
  });

  function validateForm() {
      let isValid = true;

      // Validate First Name
      const firstName = document.getElementById('firstname');
      const firstNameError = document.getElementById('firstnameError');
      if (firstName.value.trim() === '') {
          firstNameError.textContent = 'First name is required.';
          isValid = false;
      } else {
          firstNameError.textContent = '';
      }

      // Validate Last Name
      const lastName = document.getElementById('lastname');
      const lastNameError = document.getElementById('lastnameError');
      if (lastName.value.trim() === '') {
          lastNameError.textContent = 'Last name is required.';
          isValid = false;
      } else {
          lastNameError.textContent = '';
      }

      // Validate Email Address
      const email = document.getElementById('email');
      const emailError = document.getElementById('emailError');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value)) {
          emailError.textContent = 'Please enter a valid email address.';
          isValid = false;
      } else {
          emailError.textContent = '';
      }

      // Validate Password
      const password = document.getElementById('password');
      const passwordError = document.getElementById('passwordError');
      const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
      if (!passwordRegex.test(password.value)) {
          passwordError.textContent = 'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.';
          isValid = false;
      } else {
          passwordError.textContent = '';
      }

      // Validate Confirm Password
      const confirmPassword = document.getElementById('confirmPassword');
      const confirmPasswordError = document.getElementById('confirmPasswordError');
      if (confirmPassword.value !== password.value) {
          confirmPasswordError.textContent = 'Passwords do not match.';
          isValid = false;
      } else {
          confirmPasswordError.textContent = '';
      }

      // Validate Card Number (Simple Luhn check can be added here)
      const cardNumber = document.getElementById('cardNumber');
      const cardNumberError = document.getElementById('cardNumberError');
      const cardNumberRegex = /^\d{16}$/; // Assuming 16-digit card numbers
      if (!cardNumberRegex.test(cardNumber.value)) {
          cardNumberError.textContent = 'Please enter a valid 16-digit card number.';
          isValid = false;
      } else {
          cardNumberError.textContent = '';
      }

       // Enable or disable the register button based on the validity of the form
       registerButton.disabled = !isValid;

      return isValid;
  }

  // Adding event listeners for onkeyup validation
  document.getElementById('firstname').addEventListener('keyup', validateForm);
  document.getElementById('lastname').addEventListener('keyup', validateForm);
  document.getElementById('email').addEventListener('keyup', validateForm);
  document.getElementById('password').addEventListener('keyup', validateForm);
  document.getElementById('confirmPassword').addEventListener('keyup', validateForm);
  document.getElementById('cardNumber').addEventListener('keyup', validateForm);
});