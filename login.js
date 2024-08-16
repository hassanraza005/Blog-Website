const loginForm = document.querySelector('.login-box form');
const registerLink = document.querySelector('.login-box p a');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();


  window.location.href = 'homepage.html'; 
});

registerLink.addEventListener('click', (event) => {
  event.preventDefault();
 
  window.location.href = 'register.html'; 
});


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
const loginForms = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
  
    window.location.href = 'homepage.html'; 
  } catch (error) {
    errorMessage.textContent = error.message;
  }
});