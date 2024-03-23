//login.js

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Fetch input values
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Reset error messages
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Validate email and password
    var isValid = true;
    if (email.trim() === '') {
        document.getElementById('emailError').textContent = 'Please enter your email.';
        isValid = false;
    }

    if (password.trim() === '') {
        document.getElementById('passwordError').textContent = 'Please enter your password.';
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    // Check if user exists in local storage
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var user = users.find(function (user) {
        return user.email === email && user.password === password;
    });

    if (user) {
        alert('Login Successful!');
        // Redirect to dashboard or any other page
    } else {
        alert('User does not exist. Redirecting to signup page.');
        window.location.href = 'signup.html';
    }
});

// Show/hide password functionality
document.getElementById('showPasswordBtn').addEventListener('click', function () {
    var passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});
