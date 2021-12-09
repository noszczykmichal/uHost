const backdrop=document.querySelector('.backdrop');
const modal=document.querySelector('.modal');
const selectPlanButtons=document.querySelectorAll('.button');
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


