const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan .button');
const modalNoButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

for (let btn of selectPlanButtons) {

    btn.addEventListener('click', function () {

        backdrop.classList.add('active');
        modal.classList.add('active')
    });
};

function closeModal() {
    backdrop.classList.remove('active');
    mobileNav.classList.remove('active');
    //on cases where we don't have a modal on the page
    if (modal) {
        modal.classList.remove('active')
    };
};

backdrop.addEventListener('click', closeModal);
//on cases where we don't have a modal on the page
if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

toggleButton.addEventListener('click', function () {
    mobileNav.classList.add('active');
    backdrop.classList.add('active');
})

// The start-hosting page -form validation

const signupForm = document.querySelector('.signup-form');
const selectSignupForm = document.querySelector('select');
//checkbox has to be dealt with seperately because when checked together with other inputs it causes issues. The text inputs when checked with method 'checked' always return value 'false' even if filled-in.
const inputsSignupForm = document.querySelectorAll('input:not([type="checkbox"])');
const checkboxSignupForm = document.querySelector('input[type="checkbox"]');
const btnSignupForm = document.querySelector('button[type="submit"]');
let allFilledIn = true;

function elementInvalid(element, event) {
    event.preventDefault();//preventing the submit event
    element.classList.add('invalid');//adding class 'invalid'
    allFilledIn = allFilledIn && false; //setting this to false to disable the submit button
}

// Event listener on submitting the form
signupForm.addEventListener('submit', function (event) {

    //checking if inputs where user can type-in text are filled in
    for (let input of inputsSignupForm) {

        if (input.value.trim() === "") {// if value of input is an empty string
            elementInvalid(input, event) //check what happens next in function body
            input.value = "";//setting input's value to an empty string
        }
    }

    if (selectSignupForm.value === 'null') { //the same for select
        elementInvalid(selectSignupForm, event);
    }

    if (!checkboxSignupForm.checked) { //and checkbox
        elementInvalid(checkboxSignupForm, event);
    }

    if (!allFilledIn) {// if current value of variable is false, the button is disabled
        btnSignupForm.setAttribute('disabled', 'true');
    }
})

function addEventRemoveClass(element) {
    element.addEventListener('change', function () {//adding the onchange event to all inputs to remove class 'invalid' when the user goes through previously unfilled inputs/select/checkbox
        element.classList.remove('invalid');
    })
}

for (let input of inputsSignupForm) { addEventRemoveClass(input); }

addEventRemoveClass(selectSignupForm)//the same for select
addEventRemoveClass(checkboxSignupForm)//and checkbox

//enabling the submit button when change in the form is registered (presumably the user fills in unfilled inputs in the form)-because button is enabled, the form can be validated once more.
signupForm.addEventListener('change', function () {
    allFilledIn = true;
    btnSignupForm.removeAttribute('disabled');
})
