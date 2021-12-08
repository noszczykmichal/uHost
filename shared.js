const backdrop=document.querySelector('.backdrop');
const modal=document.querySelector('.modal');
const selectPlanButtons=document.querySelectorAll('.button');
const modalNoButton=document.querySelector('.modal__action--negative');

for(let btn of selectPlanButtons ){
    
    btn.addEventListener('click', function(){
   
        backdrop.classList.add('active');
        modal.classList.add('active');
    });
};

backdrop.addEventListener('click', closeModal);
modalNoButton.addEventListener('click', closeModal);

function closeModal(){
    backdrop.classList.remove('active');
    modal.classList.remove('active');
};




