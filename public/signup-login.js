var firebaseConfig = {
    apiKey: "AIzaSyAXK5yR83b_zfcs_8pR7kOgLRWcWAHluSo",
    authDomain: "quiz-app-e1dc8.firebaseapp.com",
    projectId: "quiz-app-e1dc8",
    storageBucket: "quiz-app-e1dc8.firebasestorage.app",
    messagingSenderId: "289654980047",
    appId: "1:289654980047:web:f6e9b416d2699482f7e6ba"
};

var app = firebase.initializeApp(firebaseConfig);



function signUp() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    console.log(name.value);
    console.log(email.value);
    console.log(password.value);

    firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    
    // ..
  });
    
}

