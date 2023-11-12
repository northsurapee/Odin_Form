// Reference Variables
const submitBtn = document.querySelector('.submit-btn');
const password = document.querySelector('.password');
const passwordConfirm = document.querySelector('.confirm_password');
const errorDisplayers = document.querySelector('.error');

// Add event listener
passwordConfirm.addEventListener('keyup', isPasswordMatch);
password.addEventListener('keyup', isPasswordMatch);

function isPasswordMatch() {
    let pass = password.value;  // Use .value instead of .textContent for input elements
    let confirmPass = passwordConfirm.value;

    if (pass !== confirmPass) {  // Use strict inequality operator !==
        errorDisplayers.textContent = '* Passwords do not match';
        password.style.borderColor = 'red';
        passwordConfirm.style.borderColor = 'red';  // Add this line to highlight confirm password field
    } else {
        errorDisplayers.textContent = '';
        password.style.borderColor = '';
        passwordConfirm.style.borderColor = '';  // Reset confirm password field border color
    }
}
