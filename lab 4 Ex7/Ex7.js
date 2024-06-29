document.addEventListener('DOMContentLoaded', () => {
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const repeatPasswordInput = document.getElementById('repeatPassword');
    const nameError = document.getElementById('nameError');
    const passwordError = document.getElementById('passwordError');
    const form = document.getElementById('registrationForm');
    fullNameInput.addEventListener('blur', () => {
        validateFullname();
    });
    repeatPasswordInput.addEventListener('blur', () => {
        validatePassword();
    });

    registrationForm.addEventListener('submit', (event) => {
        if (!validateFullName() || !validatePassword()) {
            event.preventDefault();
            alert('Please correct the validation errors first.');
        }
    });
    function validateFullName() {
        const fullName = fullNameInput.value.trim();
        const fullNameRegex = /^[A-Za-z]{3,}(\s[A-Za-z]{3,})*$/;
        if (!fullNameRegex.test(fullName)) {
            fullNameError.style.display = 'block';
            fullNameInput.focus();
            fullNameInput.select();
            fullNameInput.style.backgroundColor = 'gray';
            return false;
        } else {
            fullNameError.style.display = 'none';
            fullNameInput.style.backgroundColor = 'white';
            return true;
        }
    }
    function validatePassword() {
        const password = passwordInput.value;
        const repeatPassword = repeatPasswordInput.value;
        if (password !== repeatPassword) {
            passwordError.style.display = 'block';
            repeatPasswordInput.style.backgroundColor = 'gray';
            return false;
        } else {
            passwordError.style.display = 'none';
            repeatPasswordInput.style.backgroundColor = 'white';
            return true;
        }
    }
});

