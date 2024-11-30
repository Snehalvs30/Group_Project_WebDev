document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('form');

    if (loginForm) { // This condition makes sure we are working with the login form
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the form from submitting directly
                alert("Login Successful")
            if (validateLoginForm()) {
                window.location.href = "landing.html"; // Redirect to landing page after successful login
            }
        });

  

    }
    
    function validateLoginForm() {
        let isValid = true;

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
        if (password.value.trim().length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters long.';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        return isValid;
    }

    // Adding event listeners for onkeyup validation
    document.getElementById('email').addEventListener('keyup', validateLoginForm);
    document.getElementById('password').addEventListener('keyup', validateLoginForm);
});