// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword,  createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBizPTu9d6Ep4YkLkAo9CnbOC_d7snZBrU",
  authDomain: "weather-8dfe1.firebaseapp.com",
  projectId: "weather-8dfe1",
  storageBucket: "weather-8dfe1.appspot.com",
  messagingSenderId: "292680756094",
  appId: "1:292680756094:web:1c3ef4fb285771631e612f",
  measurementId: "G-PLEPYDHSCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


document.getElementById("reg-btn").addEventListener('click', function(){
  document.getElementById("register-div").style.display="inline";
  document.getElementById("login-div").style.display="none";
});

document.getElementById("log-btn").addEventListener('click', function(){
document.getElementById("register-div").style.display="none";
document.getElementById("login-div").style.display="inline";

});

 document.getElementById("login-btn").addEventListener('click', function(){
  const loginEmail= document.getElementById("login-email").value;
  const loginPassword =document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
 .then((userCredential) => {
   const user = userCredential.user;
   document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+" was Login Successfully";
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;

 });
});


 document.getElementById("register-btn").addEventListener('click', function(){

  const registerEmail= document.getElementById("register-email").value;
  const registerPassword =document.getElementById("register-password").value;

  createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
 .then((userCredential) => {
   const user = userCredential.user;
   document.getElementById("result-box").style.display="inline";
    document.getElementById("register-div").style.display="none";
    document.getElementById("result").innerHTML="Welcome <br>"+registerEmail+" was Registered Successfully";
 }).catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   document.getElementById("result-box").style.display="inline";
    document.getElementById("register-div").style.display="none";
    document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;

 });
});


document.getElementById("log-out-btn").addEventListener('click', function(){
 signOut(auth).then(() => {
    document.getElementById("result-box").style.display="none";
      document.getElementById("login-div").style.display="inline";
 }).catch((error) => {
    document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
 });

});