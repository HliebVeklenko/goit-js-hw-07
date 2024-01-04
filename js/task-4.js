const form = document.querySelector('.login-form');

function sumbitChecker(event) {
    event.preventDefault();
    const currentForm = event.target;
    const email = currentForm.elements.email.value.trim();
    const password = currentForm.elements.password.value.trim();
    if (email === '' || password === '') {
        alert('All form fields must be filled in');
    } else {
        const formValues = {
            email,
            password,
        }
        console.log(formValues);
        currentForm.reset();
    }
};

form.addEventListener('submit', sumbitChecker);