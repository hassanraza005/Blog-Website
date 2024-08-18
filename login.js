// const loginForm = document.querySelector('.login-box form');

// const registerLink = document.querySelector('.login-box p a');

// loginForm.addEventListener('submit', (event) => {
//   event.preventDefault();


//   window.location.href = 'homepage.html'; 
// });

// registerLink.addEventListener('click', (event) => {
//   event.preventDefault();
 
//   window.location.href = 'register.html'; 
// });


// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// const loginForms = document.getElementById('login-form');
// const errorMessage = document.getElementById('error-message');

// loginForm.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;

//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
  
//     window.location.href = 'homepage.html'; 
//   } catch (error) {
//     errorMessage.textContent = error.message;
//   }
// });


import { signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js"
import {auth} from "./config.js"



const loginForm = document.querySelector('#login-form')
const emailLogin = document.querySelector('.email-login')
const passwordLogin = document.querySelector('.password-login')

loginForm.addEventListener('submit' , (e)=>{
    e.preventDefault()

    signInWithEmailAndPassword(auth, emailLogin.value, passwordLogin.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);

    setTimeout(()=>{
        alert('login succesfully')
        window.location.href = 'index.html'
    },1000)
    
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    
  });
})

