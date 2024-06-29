document.addEventListener('DOMContentLoaded', () => {
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const repeatPasswordInput = document.getElementById('repeatPassword');
    const nameError = document.getElementById('nameError');
    const passwordError = document.getElementById('passwordError');
    const form = document.getElementById('registrationForm');
    fullNameInput.addEventListener('focus', () => {
        fullNameInput.style.border = 'solid 1px blue';
    });
    fullNameInput.addEventListener('blur', () => {
        fullNameInput.style.border = '';
        if (fullNameInput.value.length < 3) {
            nameError.textContent = 'Invalid name';
            nameError.style.display = 'block';
            fullNameInput.focus();
            fullNameInput.select();
            fullNameInput.style.backgroundColor = 'gray';
        } else {
            nameError.style.display = 'none';
            fullNameInput.style.backgroundColor = 'white';
        }
    });
    repeatPasswordInput.addEventListener('blur', () => {
        if (passwordInput.value !== repeatPasswordInput.value) {
            passwordError.textContent = 'Password and repeat password should be the same';
            passwordError.style.display = 'block';
            repeatPasswordInput.focus();
            repeatPasswordInput.select();
            repeatPasswordInput.style.backgroundColor = 'gray';
        } else {
            passwordError.style.display = 'none';
            repeatPasswordInput.style.backgroundColor = 'white';
        }
    });
    form.addEventListener('submit', (event) => {
        if (fullNameInput.value.length < 3) {
            nameError.textContent = 'Invalid name';
            nameError.style.display = 'block';
            fullNameInput.focus();
            fullNameInput.select();
            fullNameInput.style.backgroundColor = 'gray';
            event.preventDefault();
        } else if (passwordInput.value !== repeatPasswordInput.value) {
            passwordError.textContent = 'Password and repeat password should be the same';
            passwordError.style.display = 'block';
            repeatPasswordInput.focus();
            repeatPasswordInput.select();
            repeatPasswordInput.style.backgroundColor = 'gray';
            event.preventDefault();
        } else {
            nameError.style.display = 'none';
            passwordError.style.display = 'none';
            fullNameInput.style.backgroundColor = 'white';
            repeatPasswordInput.style.backgroundColor = 'white';
        }
    });
});
