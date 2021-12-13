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
const inputsSignupForm=document.querySelectorAll('input');
const checkboxSignupForm=document.querySelector('input[type="checkbox"]');

signupForm.addEventListener('submit', function(event){
    for(let input of inputsSignupForm){
        //if any input is empty add class invalid
        if(!input.value.trim()){
            event.preventDefault();
            input.value=""; //set incorrect value(whitespaces) to an empty string
            input.classList.add('invalid');
        }
        //if e.g. on the second check they are filled in, remove class invalid 
        if(input.value.trim()){
            input.classList.remove('invalid');
        }
    }

    // the same for select and checkbox
    if(selectSignupForm.value==='null'){
        event.preventDefault();
        selectSignupForm.classList.add('invalid');
    }
    if(!checkboxSignupForm.checked){
        event.preventDefault();
        checkboxSignupForm.classList.add('invalid');
    }

    //removing class invalid for select and checkbox
    if(selectSignupForm.value!=='null'){
        selectSignupForm.classList.remove('invalid');
    }
    if(checkboxSignupForm.checked){
        checkboxSignupForm.classList.add('invalid');
    }
})
