// Get Modal Element
var modal = document.getElementById('simpleModal');
// Get Open Modal Button
var modalBtn = document.getElementById('modalBtn');
// Get Close Button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen For Open Click
modalBtn.addEventListener('click',openModal);
// Listen For close Click
closeBtn.addEventListener('click',closeModal);
// Listen for Outside Click
window.addEventListener('click',outsideClick);

// Function to Open Modal
function openModal(){
    modal.style.display='block';
}

// Function to Close Modal
function closeModal(){
    modal.style.display='none';
}

// Function to Close Modal if outside clicked
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}