//signup.js

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Fetch input values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Reset error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Flag to check if any error occurred
    var hasError = false;

    // Validate username
    if (username.trim() === '') {
        document.getElementById('usernameError').textContent = '* Please enter your username.';
        hasError = true;
    }

    // Validate email
    if (email.trim() === '') {
        document.getElementById('emailError').textContent = '* Please enter your email.';
        hasError = true;
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = '* Please enter a valid email address.';
        hasError = true;
    }

    // Validate password
    if (password.trim() === '') {
        document.getElementById('passwordError').textContent = '* Please enter your password.';
        hasError = true;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        hasError = true;
    }

    // If any error occurred, return without further processing
    if (hasError) {
        return;
    }

    // Simulate signup process (replace this with your actual signup logic)
    // For demo, assume signup is successful
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var userExists = users.some(function(user) {
        return user.email === email;
    });
    if (userExists) {
        alert('User already exists!');
        return;
    } else {
        users.push({
            username: username,
            email: email,
            password: password
        });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Signup Successful!');
        window.location.href = 'login.html'; // Redirect to login page
    }
});

// Function to validate email format
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show/hide password functionality
document.getElementById('showPasswordBtn').addEventListener('click', function () {
    var passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});