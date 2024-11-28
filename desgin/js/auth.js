import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";



  const firebaseConfig = {
    apiKey: "AIzaSyAhco23rqhtnxBGN56m8ZX7vgM_mt5RHXQ",
    authDomain: "musiclearntcc.firebaseapp.com",
    databaseURL: "https://musiclearntcc-default-rtdb.firebaseio.com",
    projectId: "musiclearntcc",
    storageBucket: "musiclearntcc.firebasestorage.app",
    messagingSenderId: "563014806302",
    appId: "1:563014806302:web:373eabe3dabc2b7294770f"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);




 const submit = document.getElementById('submit'); 

submit.addEventListener("click", function (event){
    event.preventDefault()

    const email = document.getElementById('email').value; 
    const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

        const user = userCredential.user;
        alert("Criando conta...")
        window.location.href ="home.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Este email ja sendo utilizado")
    });
})
