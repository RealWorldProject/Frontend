const password = document.querySelector('#password');
// let mouseOut =  () => {
//     const eye1 = document.querySelector('.eye');
//     eye1.style.visibility = "hidden";
    
// }
// function validation() { 
//     let eye =document.querySelector(".eye");
//         eye.style.visibility = "visible";  
// }
function showPW() {
    const password = document.getElementById("password");
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  } 