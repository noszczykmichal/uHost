const backdrop=document.querySelector('.backdrop');
const modal=document.querySelector('.modal');
const selectPlanButtons=document.querySelectorAll('.plan .button');
const modalNoButton=document.querySelector('.modal__action--negative');
const toggleButton=document.querySelector('.toggle-button');
const mobileNav=document.querySelector('.mobile-nav');

for(let btn of selectPlanButtons ){
    
    btn.addEventListener('click', function(){
   
        backdrop.classList.add('active');
        modal.classList.add('active')
    });
};

function closeModal(){
    backdrop.classList.remove('active');
    mobileNav.classList.remove('active');
    //on cases where we don't have a modal on the page
    if(modal){
        modal.classList.remove('active')
    };
};

backdrop.addEventListener('click', closeModal);
//on cases where we don't have a modal on the page
if(modalNoButton){
    modalNoButton.addEventListener('click', closeModal);
}

toggleButton.addEventListener('click', function(){
    mobileNav.classList.add('active');
    backdrop.classList.add('active');
})

// The start-hosting page -form validation

const signupForm=document.querySelector('.signup-form');
const selectSignupForm=document.querySelector('select');
//checkbox has to be dealt with seperately because when checked together with other inputs it causes issues. The text inputs when checked with method 'checked' always return value 'false' even if filled-in.
const inputsSignupForm=document.querySelectorAll('input:not([type="checkbox"])');
const checkboxSignupForm=document.querySelector('input[type="checkbox"]');
const btnSignupForm=document.querySelector('button[type="submit"]');
let allFilledIn=true;

// Event listener on submiting the form
signupForm.addEventListener('submit', function(event){
    //checking if inputs where user can type-in text are filled in
    for(let input of inputsSignupForm){

        if(input.value.trim()===""){// if input value is empty string
            event.preventDefault();//preventing submit event
            input.value="";//setting input's value to an empty string
            input.classList.add('invalid');//adding class 'invalid'
            allFilledIn=allFilledIn && false //setting this to false to disable submit button 
        }
    }

    if(selectSignupForm.value==='null'){ //the same for select
        event.preventDefault();
        selectSignupForm.classList.add('invalid');
        allFilledIn=allFilledIn && false;
    }

    if(!checkboxSignupForm.checked){ //and checkbox
        event.preventDefault();
        checkboxSignupForm.classList.add('invalid');
        allFilledIn=allFilledIn && false;
    }

    if(!allFilledIn){// if current value of variable is false, button is disabled
        btnSignupForm.setAttribute('disabled', 'true');
    }
})

//adding onchange event to all inputs to remove class invalid user goes through previously unfilled inputs/select/checkbox
for(let input of inputsSignupForm){

    input.addEventListener('change', function(){
        input.classList.remove('invalid');
    })
}

selectSignupForm.addEventListener('change', function(){
    selectSignupForm.classList.remove('invalid');
})

checkboxSignupForm.addEventListener('change', function(){
    checkboxSignupForm.classList.remove('invalid');
})

//enabling the submit button when change in the form is registered

signupForm.addEventListener('change', function(){
    allFilledIn=true;
    btnSignupForm.removeAttribute('disabled');
})
